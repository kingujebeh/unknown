<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="flex justify-between items-center px-4 pt-6">
      <div></div>
      <button class="text-sm text-gray-500">Skip</button>
    </div>

    <!-- Illustration -->
    <div class="flex-1 flex flex-col items-center justify-center px-6">
      <img src="" alt="Find Jobs" class="w-64 h-64 object-contain" />

      <!-- Pagination dots -->
      <div class="flex space-x-2 mt-6">
        <span class="w-2 h-2 rounded-full bg-blue-600"></span>
        <span class="w-2 h-2 rounded-full bg-gray-300"></span>
        <span class="w-2 h-2 rounded-full bg-gray-300"></span>
      </div>

      <!-- Text -->
      <div class="mt-8 text-center">
        <h1 class="text-xl font-bold text-gray-900">Find Jobs Near You</h1>
        <p class="text-sm text-gray-500 mt-2 px-4">
          Connect with customers in your area who need your services. Browse
          available jobs and choose the ones that fit your schedule.
        </p>
      </div>

      <!-- Features -->
      <div class="mt-8 space-y-3 w-full max-w-sm">
        <div class="flex items-center space-x-3">
          <div
            class="h-6 w-6 flex items-center justify-center bg-green-100 rounded-full"
          >
            ✔
          </div>
          <p class="text-sm text-gray-700">Get instant job notifications</p>
        </div>
        <div class="flex items-center space-x-3">
          <div
            class="h-6 w-6 flex items-center justify-center bg-green-100 rounded-full"
          >
            ✔
          </div>
          <p class="text-sm text-gray-700">Set your own rates and schedule</p>
        </div>
        <div class="flex items-center space-x-3">
          <div
            class="h-6 w-6 flex items-center justify-center bg-green-100 rounded-full"
          >
            ✔
          </div>
          <p class="text-sm text-gray-700">Work within your preferred area</p>
        </div>
      </div>
    </div>

    <!-- Continue Button -->
    <div class="px-6 pb-10">
      <router-link to="on-board-two">
        <button
          class="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
        >
          Continue
        </button>
      </router-link>
    </div>
  </div>
</template>
