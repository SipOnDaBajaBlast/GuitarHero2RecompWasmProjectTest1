import {readdir,lstat,open} from 'node:fs/promises';
import {resolve,relative,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {createReadStream} from 'node:fs';
export async function inventory(root) {
 root=resolve(root); const entries=[];
 async function walk(dir) {
  for(const item of (await readdir(dir,{withFileTypes:true})).sort((a,b)=>a.name.localeCompare(b.name))) {
   const path=resolve(dir,item.name); const st=await lstat(path);
   if(st.isSymbolicLink()) throw new Error('Symlinks are not allowed: '+path);
   if(st.isDirectory()) {await walk(path);continue;}
   if(!st.isFile()) continue;
   const hash=createHash('sha256');
   for await(const chunk of createReadStream(path)) hash.update(chunk);
   entries.push({path:relative(root,path).split(sep).join('/'),bytes:st.size,sha256:hash.digest('hex')});
  }
 }
 await walk(root);
 const xex=entries.filter(e=>e.path.toLowerCase()==='default.xex');
 let xexMagic=false;
 if(xex.length===1) {const f=await open(resolve(root,xex[0].path));try{const b=Buffer.alloc(4);await f.read(b,0,4,0);xexMagic=b.toString('ascii')==='XEX2';}finally{await f.close();}}
 return {schema:1,entries,defaultXexPresent:xex.length===1,xexMagic,
 executableCompatibility:'UNVERIFIED',songAndDifficultyValidation:'NOT_PERFORMED',
 note:'Hashes identify supplied bytes only; XEX2 magic does not establish the supported title update or region.'};
}
if(process.argv[1] && resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
 try {console.log(JSON.stringify(await inventory(process.argv[2]||'assets'),null,2));}
 catch(e){console.error(e.message);process.exitCode=1;}
}
