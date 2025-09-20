<template>
  <div class="flex flex-col min-h-screen bg-white">
    <!-- Header -->
    <div class="flex items-center justify-between px-4 pt-6">
      <div>
        <h1 class="text-lg font-semibold">Good morning!</h1>
        <p class="text-sm text-gray-500">What can we help you with today?</p>
      </div>
      <button class="relative">
        <span
          class="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"
        ></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405M19 13V7a7 7 0 00-14 0v6L3 17h18l-2-2z"
          />
        </svg>
      </button>
    </div>

    <!-- Search -->
    <div class="px-4 mt-4">
      <input
        type="text"
        placeholder="Search for services..."
        class="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-100"
      />
    </div>

    <!-- Quick Book -->
    <div class="px-4 mt-6">
      <h2 class="text-base font-semibold">Quick Book</h2>
      <div class="flex gap-3 mt-3">
        <button class="flex flex-col items-center p-3 rounded-xl bg-blue-50">
          <span class="text-blue-600 font-medium text-sm">Emergency</span>
        </button>
        <button class="flex flex-col items-center p-3 rounded-xl bg-green-50">
          <span class="text-green-600 font-medium text-sm">Electrical</span>
        </button>
        <button class="flex flex-col items-center p-3 rounded-xl bg-yellow-50">
          <span class="text-yellow-600 font-medium text-sm">Plumbing</span>
        </button>
        <button class="flex flex-col items-center p-3 rounded-xl bg-purple-50">
          <span class="text-purple-600 font-medium text-sm">Cleaning</span>
        </button>
      </div>
    </div>

    <!-- Promo Banner -->
    <div class="px-4 mt-6">
      <div
        class="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-5"
      >
        <h3 class="text-sm font-medium">20% OFF First Booking</h3>
        <p class="text-xs">Use code: WELCOME20</p>
        <button
          class="mt-3 bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold"
        >
          Book Now
        </button>
      </div>
    </div>

    <!-- All Services -->
    <div class="px-4 mt-6 flex items-center justify-between">
      <h2 class="text-base font-semibold">All Services</h2>
      <a href="#" class="text-sm text-blue-500">View All</a>
    </div>

    <div class="px-4 mt-4 grid grid-cols-2 gap-4">
      <div class="p-4 border rounded-xl">
        <h3 class="font-medium">Handyman</h3>
        <p class="text-xs text-gray-500">General repairs & fixes</p>
        <p class="text-sm text-green-600 mt-1">From $25</p>
      </div>

      <div class="p-4 border rounded-xl">
        <h3 class="font-medium">Plumbing</h3>
        <p class="text-xs text-gray-500">Pipes, leaks & drainage</p>
        <p class="text-sm text-green-600 mt-1">From $35</p>
      </div>

      <div class="p-4 border rounded-xl">
        <h3 class="font-medium">Electrical</h3>
        <p class="text-xs text-gray-500">Wiring & installations</p>
        <p class="text-sm text-green-600 mt-1">From $40</p>
      </div>

      <div class="p-4 border rounded-xl">
        <h3 class="font-medium">Cleaning</h3>
        <p class="text-xs text-gray-500">Deep & regular cleaning</p>
        <p class="text-sm text-green-600 mt-1">From $30</p>
      </div>

      <div class="p-4 border rounded-xl">
        <h3 class="font-medium">Carpentry</h3>
        <p class="text-xs text-gray-500">Furniture & woodwork</p>
        <p class="text-sm text-green-600 mt-1">From $45</p>
      </div>

      <div class="p-4 border rounded-xl">
        <h3 class="font-medium">Painting</h3>
        <p class="text-xs text-gray-500">Interior & exterior</p>
        <p class="text-sm text-green-600 mt-1">From $50</p>
      </div>
    </div>

    <!-- Why Choose Us -->
    <div class="px-4 mt-8">
      <h2 class="text-base font-semibold mb-4">Why Choose Us?</h2>
      <div class="flex justify-around">
        <div class="flex flex-col items-center text-center">
          <div
            class="h-10 w-10 flex items-center justify-center bg-green-100 rounded-full"
          >
            ✅
          </div>
          <p class="mt-2 text-xs font-medium">Verified Professionals</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <div
            class="h-10 w-10 flex items-center justify-center bg-blue-100 rounded-full"
          >
            ⚡
          </div>
          <p class="mt-2 text-xs font-medium">Same Day Service</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <div
            class="h-10 w-10 flex items-center justify-center bg-yellow-100 rounded-full"
          >
            ⭐
          </div>
          <p class="mt-2 text-xs font-medium">5-Star Rated</p>
        </div>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <div
      class="fixed bottom-0 left-0 right-0 border-t bg-white flex justify-around py-2"
    >
      <button class="flex flex-col items-center text-blue-600">
        <span>🏠</span>
        <span class="text-xs">Home</span>
      </button>
      <button class="flex flex-col items-center text-gray-600">
        <span>📅</span>
        <span class="text-xs">Bookings</span>
      </button>
      <button class="flex flex-col items-center text-gray-600">
        <span>💳</span>
        <span class="text-xs">Wallet</span>
      </button>
      <button class="flex flex-col items-center text-gray-600">
        <span>💬</span>
        <span class="text-xs">Chat</span>
      </button>
      <button class="flex flex-col items-center text-gray-600">
        <span>👤</span>
        <span class="text-xs">Profile</span>
      </button>
    </div>
  </div>
</template>
