<template>
  <div
    class="flex min-h-screen items-center justify-center bg-slate-50 px-4"
    style="font-family: Manrope, 'Noto Sans', sans-serif"
  >
    <!-- Centered Forgot Password Form -->
    <div class="w-full max-w-[420px] bg-white rounded-2xl shadow-md p-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <back></back>
        <h2
          class="text-[#0e141b] text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10"
        >
          Forgot Password
        </h2>
      </div>

      <!-- Instruction -->
      <p class="text-[#4e7097] text-sm text-center mb-6">
        Enter your registered email address and we’ll send you a link to reset
        your password.
      </p>

      <!-- Email -->
      <div class="mb-4">
        <label class="flex flex-col">
          <span class="text-[#0e141b] text-base font-medium mb-2">
            Email Address
          </span>
          <input
            placeholder="Enter your email"
            class="w-full rounded-lg bg-[#e7edf3] h-14 p-4 text-base text-[#0e141b] placeholder:text-[#4e7097] focus:outline-none"
          />
        </label>
      </div>

      <!-- Button -->
      <button
        class="w-full rounded-lg h-12 bg-[#1979e6] text-slate-50 text-base font-bold hover:bg-[#166cd3] transition-colors"
      >
        Send Reset Link
      </button>

      <!-- Back to Sign In -->
      <div class="mt-6 text-center">
        <p class="text-[#4e7097] text-sm underline cursor-pointer">
          Back to Sign In
        </p>
      </div>
    </div>
  </div>
</template>
