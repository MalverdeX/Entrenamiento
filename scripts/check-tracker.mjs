import assert from 'node:assert/strict';
const base=process.argv[2]||'http://localhost:5173';
const group='qa-'+Date.now();
async function post(body){const r=await fetch(base+'/api/tracker',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({group,...body})});const d=await r.json();assert.ok(r.ok,JSON.stringify(d));return d;}
async function read(){const r=await fetch(base+'/api/tracker?group='+group,{cache:'no-store'});assert.ok(r.ok);return r.json();}
const a=(await post({action:'member',name:'QA A'})).member;
const b=(await post({action:'member',name:'QA B'})).member;
const form={memberId:a.id,dayId:1,exercise:'Press plano en máquina',weight:30,reps:'10, 9',note:'Prueba automatizada'};
const original=(await post({action:'entry',...form})).entry;
let logs=(await read()).entries;
assert.equal(logs.find(e=>e.id===original.id).weight,30);
assert.equal(logs.filter(e=>e.memberId===b.id).length,0);
const changed=(await post({action:'update',entryId:original.id,...form,weight:32.5})).entry;
assert.equal(changed.loggedAt,original.loggedAt);
assert.equal((await read()).entries.find(e=>e.id===original.id).weight,32.5);
await post({action:'delete',entryId:original.id,memberId:a.id});
assert.equal((await read()).entries.length,0);
console.log('PASS: server persistence, member separation, edit preserving date, deletion. Test group: '+group);
