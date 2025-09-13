<template>
  <div
    class="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-white"
  >
    <!-- Header -->
    <div class="flex items-center justify-between px-4 pt-6">
      <button
        class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h6" />
        </svg>
      </button>
    </div>

    <!-- Split Card -->
    <div class="px-4 mt-6">
      <div class="bg-white rounded-2xl shadow-md p-6">
        <h2 class="text-lg font-semibold">House rent</h2>
        <p class="text-2xl font-bold mt-2">₦100,000</p>
        <p class="text-sm text-gray-500 mt-1">
          4 members • Due:
          <span class="font-medium text-gray-700">July 31st</span>
        </p>

        <!-- Member list -->
        <div class="mt-6 space-y-4">
          <!-- Member 1 -->
          <div class="bg-white rounded-xl p-3 shadow-sm border">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <img
                  src="https://storage.googleapis.com/great-unknown.appspot.com/anwuri.png"
                  alt="anwuri"
                  class="w-8 h-8 rounded-full"
                />
                <span class="font-medium text-gray-800">Anwuri Alabi</span>
              </div>
              <span class="font-semibold">₦25,000</span>
            </div>
            <div class="flex items-center justify-between mt-1">
              <span class="text-sm text-gray-500">100%</span>
            </div>
            <div class="w-full bg-gray-100 h-2 rounded-full mt-2">
              <div class="bg-green-500 h-2 rounded-full w-full"></div>
            </div>
          </div>

          <!-- Member 2 -->
          <div class="bg-white rounded-xl p-3 shadow-sm border">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div
                  class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold"
                >
                  AM
                </div>
                <span class="font-medium text-gray-800">Ali Marshalee</span>
              </div>
              <span class="font-semibold">₦25,000</span>
            </div>
            <div class="flex items-center justify-between mt-1">
              <span class="text-sm text-gray-500">0%</span>
            </div>
            <div class="w-full bg-gray-100 h-2 rounded-full mt-2">
              <div class="bg-green-500 h-2 rounded-full w-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Carousel dots -->
    <div class="flex justify-center mt-6">
      <span class="w-2 h-2 rounded-full bg-gray-400 mx-1"></span>
      <span class="w-2 h-2 rounded-full bg-gray-300 mx-1"></span>
    </div>

    <!-- Footer CTA -->
    <div class="mt-auto px-6 py-8 text-center">
      <h3 class="text-xl font-bold">
        Track <span class="text-black">splits.</span>
      </h3>
      <p class="text-gray-500 mt-2">
        We keep tabs, so you don’t have to chase anyone down
      </p>

      <div class="flex gap-3 mt-6">
        <button
          class="flex-1 py-3 rounded-full bg-gray-100 text-gray-700 font-medium"
        >
          Log in
        </button>
        <button
          class="flex-1 py-3 rounded-full bg-black text-white font-medium"
        >
          Create account
        </button>
      </div>
    </div>
  </div>
</template>
