# Source audit
Sources: audited main revision of https://github.com/SipOnDaBajaBlast/re-gh2 and upstream https://github.com/YoshiCrystal9/re-gh2/pull/2.
README calls this a crash-prone proof of concept requiring extracted game content.
CMake is C++23, CMake >=3.25, find_package(rexglue), links core/runtime/kernel/graphics/ui; no SDK pin. Desktop presets use clang or clang-20.
main.cpp calls Setup with generated PPC mappings, LoadXexImage(game:\\default.xex), native Window::Create, native presenter and UI callbacks. LaunchModule uses a background std::thread waiting on guest completion.
arkless.cpp only selects loose files when host filesystem exists checks succeed. This is not an archive streaming implementation.
Main codegen config identifies assets/default.xex, setjmp 0x82690C90, longjmp 0x82690A40, NewFileHook 0x82276780, and thousands of function mappings. No hash/version field found.
PR #2 targets tu1-rexglue0.2.0 rather than main. GuitarHook overwrites r11 with 7 at 0x8227B5A8, after instruction. This forces a type; it does not implement physical controller detection or web mappings.
AudioOffsetHook adds gh2_audiooffset to f1 at 0x822CFAC0. Practice hook at 0x822CFA9C retains input when offset result is negative. Units/sign require disassembly evidence; do not assume milliseconds.
Function changes include symbols, missing chunks and changed function extents (e.g. 0x823C3E98 to 0xEC, 0x824A9340 to 0x80). Validate against target executable/jump tables before applying.
PR source includes rex/ppc headers while main includes rex/runtime/guest headers: additional evidence of API generation mismatch.
Current ReXGlue tree (inspection only, not compatible pin) c94f5ebdcb3c9d1a460ca48e04f9758448f8d518 lists D3D12/Vulkan graphics and SDL/XMA audio implementations. Those names establish review targets, not browser support or incompatibility proof.
No original/native reference behavior was observed. Guest address-space and graphics/audio feasibility remain unresolved. Compiling only main.cpp with Emscripten would not deliver the required runtime.
