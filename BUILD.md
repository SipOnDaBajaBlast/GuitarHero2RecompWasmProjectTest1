# Build and resume
This is an audit/tooling checkpoint, not a deployment-ready port.
Node inventory tooling has no npm dependencies.

From this folder:
```powershell
node --test tools/inventory.test.mjs
node tools/inventory.mjs 'PATH_TO_EXTRACTED_GAME' > asset-inventory.json
```
The inventory does not extract archives, validate song charts or establish executable compatibility.

Upstream native procedure (not executed here): install a verified compatible ReXGlue SDK, set REXSDK, place extracted content in assets, configure a matching CMake preset, build gh2test_codegen, reconfigure to include generated/sources.cmake, then build gh2test and run with the assets directory argument.
Do not treat this procedure as tested or reproducible until the SDK and executable hashes are established.

Repository source baseline: ef521f4c7ab57cbd201de6f9acf37f218f48fa49.
Codegen config Git blob: 159ccbf703ecd95800a36a4db4c949732369057d.
ReXGlue compatible revision: UNKNOWN. PR branch mentions 0.2.0; that is not a validated pin for main.
Toolchain compatible revision: UNKNOWN.
PR #2 base: 816fa26d23b25312145469b8abfd0a830746dfba; head: 7cb50a2659678b6060b6ea28fe2a798708009481. Not applied.

Browser work required: replace native entry/window/scheduler, implement guest memory/address translation and VMX semantics, port Xbox command/shader/texture/eDRAM handling, decode/mix original audio with an AudioWorklet clock, virtualize reads with demand fetching, integrate controls and persistent saves.
A pthread design would require HTTPS (or localhost), COOP same-origin and COEP require-corp plus compatible CORS/CORP on every asset; this alone does not establish runtime compatibility.
No production build command exists yet. No runtime or copyrighted content is included.
