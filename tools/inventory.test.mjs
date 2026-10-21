import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,writeFile,mkdir,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {inventory} from './inventory.mjs';
test('inventory hashes original bytes and detects XEX header without claiming compatibility',async()=>{
 const root=await mkdtemp(join(tmpdir(),'gh2-assets-'));
 try{
  await writeFile(join(root,'default.xex'),'XEX2example');
  await mkdir(join(root,'songs'));
  await writeFile(join(root,'songs','sample.mid'),'abc');
  const result=await inventory(root);
  assert.equal(result.xexMagic,true);
  assert.equal(result.executableCompatibility,'UNVERIFIED');
  assert.equal(result.entries.find(e=>e.path==='songs/sample.mid').sha256,'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
  assert.equal(result.songAndDifficultyValidation,'NOT_PERFORMED');
 }finally{await rm(root,{recursive:true});}
});
test('missing asset directory is an error',async()=>{await assert.rejects(inventory(join(tmpdir(),'gh2-nonexistent-'+Date.now())));});
