<template>
  <div class="flex min-h-screen items-center justify-center bg-slate-50 px-4">
    <!-- Centered Sign In Form -->
    <div class="w-full max-w-[420px] bg-white rounded-2xl shadow-md p-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <back></back>
        <h2
          class="text-[#0e141b] text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10"
        >
          Create your account
        </h2>
      </div>

      <!-- First Name -->
      <div class="mb-4">
        <label class="flex flex-col">
          <span class="text-[#0e141b] text-base font-medium mb-2">
            First Name
          </span>
          <input
            placeholder="First Name"
            class="w-full rounded-lg bg-[#e7edf3] h-14 p-4 text-base text-[#0e141b] placeholder:text-[#4e7097] focus:outline-none"
          />
        </label>
      </div>

      <!-- Last Name -->
      <div class="mb-4">
        <label class="flex flex-col">
          <span class="text-[#0e141b] text-base font-medium mb-2">
            Last Name
          </span>
          <input
            placeholder="Last Name"
            class="w-full rounded-lg bg-[#e7edf3] h-14 p-4 text-base text-[#0e141b] placeholder:text-[#4e7097] focus:outline-none"
          />
        </label>
      </div>

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

      <!-- Password -->
      <div class="mb-6">
        <label class="flex flex-col">
          <span class="text-[#0e141b] text-base font-medium mb-2">
            Password
          </span>
          <input
            type="password"
            placeholder="Enter your password"
            class="w-full rounded-lg bg-[#e7edf3] h-14 p-4 text-base text-[#0e141b] placeholder:text-[#4e7097] focus:outline-none"
          />
        </label>
      </div>

      <!-- Primary Sign Up Button -->
      <button
        class="w-full rounded-lg h-12 bg-[#1979e6] text-slate-50 text-base font-bold hover:bg-[#166cd3] transition-colors mb-3"
      >
        Sign Up
      </button>

      <!-- Links -->
      <router-link to="./signin">
        <div class="mt-4 space-y-2 text-center">
          <p class="text-[#4e7097] text-sm underline cursor-pointer">
            Already have an account? <span class="font-medium">Sign In</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>
