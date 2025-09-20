<template>
  <div class="flex flex-col min-h-screen bg-white pb-20">
    <!-- Header -->
    <div class="flex items-center justify-between px-4 pt-6">
      <div class="flex items-center space-x-3">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          class="h-10 w-10 rounded-full"
        />
        <div>
          <h1 class="text-base font-semibold">Good morning, Mike</h1>
          <p class="text-xs text-green-600">● Available</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <button class="relative">
          <span
            class="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"
          ></span>
          🔔
        </button>
        ⚙️
      </div>
    </div>

    <!-- Earnings -->
    <div class="px-4 mt-6">
      <div
        class="bg-blue-600 rounded-2xl p-5 text-white flex justify-between items-center"
      >
        <div>
          <p class="text-2xl font-bold">$285</p>
          <p class="text-sm">3 jobs completed</p>
        </div>
        <div class="text-right">
          <p class="text-sm">This week</p>
          <p class="text-lg font-semibold">$1,420</p>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="px-4 mt-6 flex space-x-4">
      <div class="flex-1 bg-green-50 rounded-xl p-4 text-center">
        <div class="text-green-600">🔍</div>
        <p class="font-medium">Find Jobs</p>
        <p class="text-xs text-gray-500">12 available</p>
      </div>
      <div class="flex-1 bg-yellow-50 rounded-xl p-4 text-center">
        <div class="text-yellow-600">🕒</div>
        <p class="font-medium">Schedule</p>
        <p class="text-xs text-gray-500">2 upcoming</p>
      </div>
    </div>

    <!-- Upcoming Jobs -->
    <div class="px-4 mt-6 flex items-center justify-between">
      <h2 class="font-semibold">Upcoming Jobs</h2>
      <a href="#" class="text-sm text-blue-500">View all</a>
    </div>

    <div class="px-4 mt-4 space-y-4">
      <!-- Job Card -->
      <div class="border rounded-xl p-4">
        <div class="flex justify-between items-center">
          <h3 class="font-medium">Kitchen Faucet Repair</h3>
          <span class="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-lg"
            >Confirmed</span
          >
        </div>
        <p class="text-sm text-gray-500">Sarah Johnson • 2.3 miles</p>
        <p class="text-sm text-gray-600 mt-2">📅 Today, 2:00 PM • $85</p>
        <button
          class="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium"
        >
          Start Job
        </button>
      </div>

      <div class="border rounded-xl p-4">
        <div class="flex justify-between items-center">
          <h3 class="font-medium">Bathroom Tile Installation</h3>
          <span
            class="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-lg"
            >Tomorrow</span
          >
        </div>
        <p class="text-sm text-gray-500">Mark Davis • 1.8 miles</p>
        <p class="text-sm text-gray-600 mt-2">📅 Tomorrow, 9:00 AM • $320</p>
        <button
          class="mt-3 w-full bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium"
        >
          View Details
        </button>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="px-4 mt-6 flex items-center justify-between">
      <h2 class="font-semibold">Recent Activity</h2>
      <a href="#" class="text-sm text-blue-500">See all</a>
    </div>

    <div class="px-4 mt-4 space-y-3">
      <div class="flex items-center space-x-3 p-3 border rounded-xl">
        <div class="h-8 w-8 flex items-center justify-center bg-green-100 rounded-full">
          💵
        </div>
        <div>
          <p class="text-sm font-medium">
            Payment received from Lisa Chen
          </p>
          <p class="text-xs text-gray-500">$125 • 2 hours ago</p>
        </div>
      </div>

      <div class="flex items-center space-x-3 p-3 border rounded-xl">
        <div class="h-8 w-8 flex items-center justify-center bg-blue-100 rounded-full">
          📋
        </div>
        <div>
          <p class="text-sm font-medium">
            New job request: Electrical Outlet Installation
          </p>
          <p class="text-xs text-gray-500">$95 • 4 hours ago</p>
        </div>
      </div>

      <div class="flex items-center space-x-3 p-3 border rounded-xl">
        <div class="h-8 w-8 flex items-center justify-center bg-yellow-100 rounded-full">
          ⭐
        </div>
        <div>
          <p class="text-sm font-medium">
            You received a 5-star review
          </p>
          <p class="text-xs text-gray-500">
            From Robert Wilson • Yesterday
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
