<template>
  <div
    class="relative flex size-full min-h-screen flex-col bg-slate-50 justify-between group/design-root overflow-x-hidden"
    style="font-family: Manrope, 'Noto Sans', sans-serif"
  >
    <div>
      <div class="flex items-center bg-slate-50 p-4 pb-2 justify-between">
        <back></back>
        <h2
          class="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12"
        >
          Sign In
        </h2>
      </div>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#0e141b] text-base font-medium leading-normal pb-2">
            Email Address
          </p>
          <input
            placeholder="Enter your email"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-14 placeholder:text-[#4e7097] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#0e141b] text-base font-medium leading-normal pb-2">
            Password
          </p>
          <input
            placeholder="Enter your password"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-14 placeholder:text-[#4e7097] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div class="flex px-4 py-3">
        <button
          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#1979e6] text-slate-50 text-base font-bold leading-normal tracking-[0.015em]"
        >
          <span class="truncate">Sign In</span>
        </button>
      </div>
      <p
        class="text-[#4e7097] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline"
      >
        Forgot Password?
      </p>
    </div>
    <div>
      <div
        class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-none group-[:not(.dark)]/design-root:hidden"
        style="background-image: url('/dark.svg'); aspect-ratio: 390 / 320"
      ></div>
      <div
        class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-none group-[.dark]/design-root:hidden"
        style="background-image: url('/light.svg'); aspect-ratio: 390 / 320"
      ></div>
    </div>
  </div>
</template>
