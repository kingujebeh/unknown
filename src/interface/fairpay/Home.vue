<template>
  <div class="flex flex-col min-h-screen bg-white">
    <!-- Header -->
    <div class="flex items-center justify-between px-4 pt-6">
      <div class="flex items-center gap-3">
        <img
          src="https://storage.googleapis.com/great-unknown.appspot.com/anwuri.png"
          alt="user avatar"
          class="w-12 h-12 rounded-full"
        />
        <div>
          <p class="text-sm text-gray-500">Let’s split things smoothly 🚀</p>
          <p class="font-semibold text-gray-900">Anwuri Alabi</p>
        </div>
      </div>
      <button class="relative p-2 rounded-full border border-gray-200">
        <span
          class="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"
        ></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 text-gray-700"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M15 17h5l-1.405-1.405A2.032 
               2.032 0 0118 14.158V11a6.002 
               6.002 0 00-4-5.659V4a2 2 0 
               10-4 0v1.341C7.67 6.165 6 
               8.388 6 11v3.159c0 .538-.214 
               1.055-.595 1.436L4 17h5m6 0v1a3 
               3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </button>
    </div>

    <!-- Wallet Card -->
    <div class="px-4 mt-6">
      <div class="bg-black text-white rounded-2xl p-4">
        <div class="flex items-center justify-between">
          <p class="font-medium">FairPay wallet</p>
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <p class="mt-6 text-3xl font-bold">₦00.00</p>
        <p class="text-gray-400 text-sm">You have no splits currently</p>

        <div class="flex gap-3 mt-4">
          <button
            class="flex-1 flex items-center justify-center gap-2 py-2 bg-white text-black rounded-lg font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add money
          </button>
          <button
            class="flex-1 flex items-center justify-center gap-2 py-2 bg-white text-black rounded-lg font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3"
              />
            </svg>
            Create split
          </button>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="flex justify-center gap-2 mt-6">
      <button class="px-6 py-2 rounded-full bg-gray-200 font-medium">
        Ongoing split
      </button>
      <button class="px-6 py-2 rounded-full text-gray-500 font-medium">
        Completed
      </button>
    </div>

    <!-- Empty state -->
    <div class="flex flex-col items-center justify-center flex-1 px-4 mt-10">
      <div
        class="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8 text-black"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 6.75h.008v.008H9.75V6.75zM4.5 
               6.75h.008v.008H4.5V6.75zM15 
               6.75h.008v.008H15V6.75zM9.75 
               12h.008v.008H9.75V12zM4.5 
               12h.008v.008H4.5V12zM15 
               12h.008v.008H15V12zM9.75 
               17.25h.008v.008H9.75v-.008zM4.5 
               17.25h.008v.008H4.5v-.008zM15 
               17.25h.008v.008H15v-.008z"
          />
        </svg>
      </div>
      <p class="mt-4 text-gray-500 text-center text-sm">
        You have no splits yet. Create one with <br />
        friends to enjoy sharing.
      </p>
    </div>

    <!-- Bottom Nav -->
    <div class="flex justify-around items-center py-3 border-t border-gray-200">
      <div class="flex flex-col items-center text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M11.47 3.72a.75.75 0 011.06 
               0l8.25 8.25a.75.75 0 
               01-1.06 1.06L12 5.81l-7.72 
               7.72a.75.75 0 11-1.06-1.06l8.25-8.25z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M12 5.81l8.25 
               8.25v6.19a.75.75 0 
               01-.75.75h-4.5a.75.75 0 
               01-.75-.75v-4.5h-4.5v4.5a.75.75 
               0 01-.75.75h-4.5a.75.75 0 
               01-.75-.75v-6.19L12 5.81z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-xs">Home</span>
      </div>

      <div class="flex flex-col items-center text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5h2M5 11h2m6 
               0h2m-6 6h2m6 0h2"
          />
        </svg>
        <span class="text-xs">Splits</span>
      </div>

      <div class="flex flex-col items-center text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <span class="text-xs">Settings</span>
      </div>
    </div>
  </div>
</template>
