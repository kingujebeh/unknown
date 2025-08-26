<template>
  <div
    class="relative flex size-full min-h-screen flex-col bg-slate-50 justify-between group/design-root overflow-x-hidden"
  >
    <div>
      <h2
        class="text-[#0e141b] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5 capitalize"
      >
        Create your account
      </h2>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Email Address"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-14 placeholder:text-[#4e7097] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Password"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-14 placeholder:text-[#4e7097] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
    </div>
    <div>
      <div class="flex px-4 py-3">
        <button
          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#1979e6] text-slate-50 text-base font-bold leading-normal tracking-[0.015em]"
        >
          <span class="truncate">Sign Up</span>
        </button>
      </div>
      <p
        class="text-[#4e7097] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline"
      >
        Already have an account? Sign In
      </p>
      <div class="h-5 bg-slate-50"></div>
    </div>
  </div>
</template>
