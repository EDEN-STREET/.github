"use strict";
const { chromium } = require("playwright");
const fs = require("node:fs"), path = require("node:path");
const base = (process.env.EDEN_SITE_BASE || "http://127.0.0.1:8766/").replace(/\/?$/, "/");
const out = path.join(__dirname, "artifacts"); fs.mkdirSync(out, {recursive:true});
const report = {base,started:new Date().toISOString(),checks:[],screenshots:[],errors:[],hardware:"NOT_TESTED"};
let browser, page;
function add(name,ok,detail=""){report.checks.push({name,ok,detail});console.log((ok?"PASS ":"FAIL ")+name+" "+detail);if(!ok)report.errors.push(name+": "+detail)}
async function check(name,fn){try{const r=await fn();add(name,true,String(r||""))}catch(e){add(name,false,String(e?.message||e).slice(0,400))}}
async function open(url){const r=await page.goto(new URL(url,base).href,{waitUntil:"domcontentloaded",timeout:25000});if(!r||r.status()>=400)throw Error("HTTP "+r?.status()+" "+url);await page.waitForTimeout(180)}
async function image(sel){await page.waitForFunction(s=>{const x=document.querySelector(s);return x&&x.complete&&x.naturalWidth>0},sel,{timeout:5000})}
async function shot(name){const file=path.join(out,name);await page.screenshot({path:file,fullPage:true,animations:"disabled"});const bytes=fs.statSync(file).size;if(bytes<1500)throw Error("Blank screenshot: "+name);report.screenshots.push({name,bytes});return name}
async function labels(screen){const r=await page.evaluate(()=>{const imgs=[...document.querySelectorAll("img")].filter(x=>!x.hasAttribute("alt")).length;const frames=[...document.querySelectorAll("iframe")].filter(x=>!x.title.trim()).length;const buttons=[...document.querySelectorAll("button")].filter(x=>!x.textContent.trim()&&!x.getAttribute("aria-label")&&!x.getAttribute("title")).length;const a=[...document.querySelectorAll("[id]")].map(x=>x.id);return {imgs,frames,buttons,duplicateIds:a.length-new Set(a).size,overflow:document.documentElement.scrollWidth>window.innerWidth+4}});if(Object.values(r).some(Boolean))throw Error(screen+" "+JSON.stringify(r));return screen+" labels and width verified"}
const surfaces="terminal wiki handbuch builder projects setup quellen toolbox grimoire testlab router mobile suite academy".split(" ");
async function run(){
 browser=await chromium.launch({headless:true});
 const context=await browser.newContext({viewport:{width:1440,height:900},deviceScaleFactor:2});
 page=await context.newPage();
 await check("Homepage, diagrams, desktop screenshot",async()=>{await open("index.html");if(!(await page.locator("h1").innerText()).includes("Plattform"))throw Error("heading missing");await image(".heroGraphic");await labels("home");return shot("01-home-desktop.png")});
 await check("All HTML docs use rendered GitHub Markdown",async()=>{await open("index.html");const bad=await page.locator('a[href$=".md"]').evaluateAll(a=>a.filter(x=>!x.href.startsWith("https://github.com/EDEN-STREET/.github/blob/main/docs/")).map(x=>x.href));if(bad.length)throw Error(bad.join("; "));return "Markdown links routed to GitHub"});
 for(const s of surfaces)await check("Preview "+s,async()=>{
  await open("preview.html?surface="+s);
  if(await page.locator("#surface").inputValue()!==s)throw Error("wrong selector");
  await image("#cover");
  const h=await page.locator("#surfaceFrame").elementHandle(),f=await h.contentFrame();if(!f)throw Error("iframe missing");await f.waitForLoadState("domcontentloaded");
  const content=(await f.locator("body").innerText({timeout:10000})).trim();if(content.length<35)throw Error("frame empty");
  const src=await page.locator("#surfaceFrame").getAttribute("src");
  if(!src.startsWith(["router","mobile","suite","academy"].includes(s)?"concept-demo.html":"legacy/"))throw Error("incorrect frame: "+src);
  if(["terminal","router","mobile"].includes(s))await shot("02-preview-"+s+".png");
  return src+" ("+content.length+" chars)";
 });
 for(let i=1;i<=17;i++)await check("Workflow "+i,async()=>{
  const id=String(i).padStart(2,"0");await open("workflow.html?id="+id);
  if(await page.locator("#which").inputValue()!==id)throw Error("incorrect workflow");await image("#diagram");
  await page.locator("#next").click();if(!(await page.locator("#result").innerText()).includes("Schritt 2/5"))throw Error("Next broken");
  await page.locator("#reset").click();if(!(await page.locator("#result").innerText()).includes("Schritt 1/5"))throw Error("Reset broken");
  if(["09","12","15"].includes(id))await shot("03-workflow-"+id+".png");
  return "step switching + image PASS";
 });
 await check("Wiki tabs, missing PDF marked honestly",async()=>{
  await open("wiki.html?tab=wiki");await page.locator('[data-tab="pdf"]').click();
  if(!(await page.locator("#panel-pdf").isVisible()))throw Error("PDF tab hidden");
  const txt=await page.locator("#panel-pdf").innerText();if(!/nicht öffentlich|nicht veröffentlicht|nicht.*Original/.test(txt))throw Error("unverified PDF incorrectly represented");
  await page.locator('[data-tab="workflows"]').click();if(!(await page.locator("#panel-workflows").isVisible()))throw Error("workflow tab hidden");
  await labels("Wiki");return shot("04-wiki-desktop.png");
 });
 await check("Responsive homepage at 390 px",async()=>{await page.setViewportSize({width:390,height:844});await open("index.html");await labels("home mobile");return shot("05-home-mobile.png")});
 await check("Responsive workflow at 390 px",async()=>{await open("workflow.html?id=12");await labels("workflow mobile");return shot("06-workflow-mobile.png")});
 await check("Responsive preview at 390 px",async()=>{await open("preview.html?surface=mobile");await labels("preview mobile");return shot("07-preview-mobile.png")});
 await check("No uncaught top-level JavaScript errors",async()=>{const errs=[];page.on("pageerror",e=>errs.push(e.message));for(const u of ["index.html","preview.html?surface=terminal","workflow.html?id=01","wiki.html","concept-demo.html?surface=router"])await open(u);if(errs.length)throw Error(errs.join("; "));return "5 routes"});
}
(async()=>{try{await run()}catch(e){add("Runner",false,String(e?.stack||e).slice(0,500))}finally{if(browser)await browser.close();report.finished=new Date().toISOString();report.result=report.errors.length?"FAIL":"PASS";fs.writeFileSync(path.join(out,"report.json"),JSON.stringify(report,null,2)+"\n");console.log(JSON.stringify({result:report.result,checks:report.checks.length,errors:report.errors.length,screenshots:report.screenshots.length}));process.exitCode=report.errors.length?1:0}})();
