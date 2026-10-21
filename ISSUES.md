# Issues
| ID | Severity | Evidence / reproduction | Status |
|---|---|---|---|
| B01 | Critical | assets and generated directories contain only .gitignore in repository tree; Downloads scan has no XEX/ARK/HDR/ISO | Missing supplied game content; Heart-Shaped Box blocked |
| B02 | Critical | default project cwd returns invalid directory; explicit C:\\ works; supplied New folder does not exist | Recovered shell using explicit powershell/login=false, checkpoint in Temp |
| B03 | Critical | git clone fails Could not resolve host: github.com | API source reads work; network dependency fetch blocked |
| B04 | Critical | Get-Command cmake,clang,clang++,ninja,emcc returns no entries | No build toolchain on PATH; not proof absent elsewhere |
| B05 | Critical | CMake native entrypoints, GTK3, -mcmodel=large, -msse4.1; main native UI and worker Wait | Browser runtime unimplemented |
| B06 | High | main config has no executable hash/version pin; NewFileHook 0x82276780 vs PR base 0x822767F8 | Must identify executable before applying PR |
| B07 | High | NewFileHook uses synchronous host exists; only rewrites ..; guest string lacks explicit range/length validation | Need bounded guest reads, virtual root rules and async loading integration |
| B08 | High | PR audio hooks alter f1; units/sign not established; practice rejects negative sum by retaining old position | Disassembly and native trace required; preserve judgment rules |
| B09 | Release blocker | No supplied permission for public distribution of game/music; repo metadata reports no detected license | Public asset distribution remains unresolved; no publishing |
