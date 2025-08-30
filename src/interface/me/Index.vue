<template>
<div class="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col justify-between font-sans">
  <!-- Header -->
  <div class="p-4 flex items-center justify-between">
    <div class="flex items-center space-x-3">
      <img src="https://lh3.googleusercontent.com/ogw/AF2bZyiaE9-O0YEfm0P0zLyiAqFJIT8yPtvWAIVYy6B3fCIiOhoU=s32-c-mo" alt="user" class="w-10 h-10 rounded-full" />
      <div>
        <p class="text-sm text-gray-500">Let's split things smoothly 🚀</p>
        <p class="font-medium text-gray-900">Augment Chinedu</p>
      </div>
    </div>
    <button class="p-2 rounded-full border">
      <!-- bell icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    </button>
  </div>

  <!-- Wallet Card -->
  <div class="px-4">
    <div class="bg-black text-white rounded-2xl p-4 space-y-3 shadow-lg">
      <div class="flex items-center justify-between">
        <span class="flex items-center space-x-2">
          <span class="bg-white text-black rounded-full p-1">
            <!-- wallet icon -->
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 7h20v10H2z" />
            </svg>
          </span>
          <span class="text-sm">FairPay wallet</span>
        </span>
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>

      <div>
        <p class="text-2xl font-bold">₦50,200.10</p>
        <p class="text-sm text-gray-400">You owe ₦12,500 (2 splits)</p>
      </div>

      <div class="flex space-x-2">
        <button class="flex-1 py-2 rounded-xl border flex items-center justify-center space-x-2 bg-white text-black">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" />
          </svg>
          <span class="text-sm font-medium">Add money</span>
        </button>
        <button class="flex-1 py-2 rounded-xl border flex items-center justify-center space-x-2 bg-white text-black">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <span class="text-sm font-medium">Create split</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Tabs -->
  <div class="px-4 flex space-x-2 mt-4">
    <button class="flex-1 py-2 rounded-full bg-black text-white text-sm font-medium">Ongoing split</button>
    <button class="flex-1 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">Completed</button>
  </div>

  <!-- Split Item -->
  <div class="px-4 py-4 flex justify-between items-center">
    <div class="flex items-center space-x-3">
      <div class="w-8 h-8 rounded-full bg-blue-600"></div>
      <p class="text-sm font-medium text-gray-900">House rent</p>
    </div>
    <p class="text-sm font-semibold text-gray-900">₦100,000</p>
  </div>

  <!-- Footer -->
  <div class="px-4 py-8 text-center">
    <h2 class="text-lg font-semibold">Split bills <span class="font-bold">without the drama.</span></h2>
    <p class="text-gray-400">Everyone pays their part, no fuss</p>
    <button class="mt-6 w-full py-3 bg-black text-white rounded-full font-medium">Next</button>
  </div>
</div>
</template>
