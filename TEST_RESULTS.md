# Test results
Source review completed; this is not runtime validation.
- GitHub API repository/tree/file/blob/PR reads: succeeded.
- Read entire main codegen configuration via blob API after file API returned empty content for this 1,604,461-byte file. Do not infer the config is empty.
- Local shell: initial failures resolved by explicit powershell, login=false, workdir C:\\.
- Supplied project directory: absent.
- Downloads recursive XEX/ARK/HDR/ISO inventory: no matches; scope limited to Downloads.
- Git clone: failed DNS resolution.
- Node: v24.19.0.
- CMake, Clang, Ninja, emcc PATH probes: no matches.
- Native baseline: NOT RUN.
- Browser game: NOT BUILT / NOT RUN.
- Heart-Shaped Box Easy/Medium/Hard/Expert, scoring/HOPO/sustain/whammy/star power/failure/results: NOT RUN.
- Full-song playback, drift, underruns, FPS, memory, controller/audio/saves: NOT MEASURED.

Inventory tool automated tests: 2 passed, 0 failed under Node v24.19.0. Checks SHA-256 against known abc digest, XEX2 marker detection without compatibility claim, and missing-directory error. CLI exercised against the retrieved source subset: five files hashed, no default.xex, compatibility UNVERIFIED. These are tooling tests, not game tests.
