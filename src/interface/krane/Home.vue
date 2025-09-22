<template>
  <div class="flex flex-col h-screen justify-between">
    <div class="flex-grow overflow-y-auto hide-scrollbar">
      <header
        class="sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-10"
      >
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between py-4">
            <h1
              class="text-xl font-bold text-gray-900 dark:text-white flex-1 text-center"
            >
              Genesis Krane
            </h1>
            <button
              class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <svg
                class="text-gray-900 dark:text-white"
                fill="currentColor"
                height="24"
                viewBox="0 0 256 256"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="relative pb-4">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                class="text-gray-400 dark:text-gray-500"
                fill="currentColor"
                height="20"
                viewBox="0 0 256 256"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                ></path>
              </svg>
            </div>
            <input
              class="w-full h-12 pl-10 pr-4 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-transparent focus:border-primary focus:ring-primary"
              placeholder="Search apps"
              type="text"
            />
          </div>
        </div>
      </header>
      <main class="container mx-auto px-4 pb-4">
        <section class="mt-6">
          <h2 class="text-xl font-bold mb-4">Recommended For You</h2>
          <div class="grid grid-cols-1 gap-4">
            <a
              :href="'https://fairpay.gkrane.online'"
              target="_blank"
              rel="noopener"
              class="flex items-center space-x-4 p-4 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              <div
                class="w-16 h-16 rounded-lg bg-black flex items-center justify-center text-xl font-semibold text-white"
              >
                FP
              </div>
              <div>
                <p class="font-semibold">Fair Pay</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Advanced code editor for developers
                </p>
              </div>
            </a>
            <a
              :href="'https://handyfix.gkrane.online'"
              target="_blank"
              rel="noopener"
              class="flex items-center space-x-4 p-4 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              <div
                class="w-16 h-16 rounded-lg bg-orange-300 flex items-center justify-center text-xl font-semibold text-white"
              >
                HF
              </div>
              <div>
                <p class="font-semibold">Handy Fix</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  A full suite of design tools
                </p>
              </div>
            </a>
            <a
              :href="'https://handyman.gkrane.online'"
              target="_blank"
              rel="noopener"
              class="flex items-center space-x-4 p-4 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              <div
                class="w-16 h-16 rounded-lg bg-green-300 flex items-center justify-center text-xl font-semibold text-white"
              >
                HM
              </div>
              <div>
                <p class="font-semibold">Handy Man</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Connect and share with friends
                </p>
              </div>
            </a>
          </div>
        </section>
        <h2 class="text-xl font-bold mt-6 mb-4">Categories</h2>
        <div class="grid grid-cols-2 gap-4">
          <a
            class="flex items-center space-x-4 p-4 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            href="#"
          >
            <img
              alt="Business Category"
              class="w-10 h-10 rounded-lg object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACeWjNwKTAk_PQs9ebXadYPRJ-lfC08SvGP5hwvBVFNCuK7zDGkQUN5EMeU18bq9wNoNrfXsIXLtdmTYcwdzCJ4zrC2IiltW6oCa6NUHFWkst8Lm00bZBlhHdwKap_4PSDd1hbBahqw8v3FsIv37VghvtGLjjnN5qT3ltTYNJHwy4TTLlbHAPP4AwC6z9dhp_gr3iliq3PkZoOald3FInSafwqnNBxh5meHmEx__MpRFp0GwIrjcSt0ct0LfeMjTCTZZWhm0sxpXY"
            />
            <span class="font-semibold">Business</span>
          </a>
          <a
            class="flex items-center space-x-4 p-4 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            href="#"
          >
            <img
              alt="Design Category"
              class="w-10 h-10 rounded-lg object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzMUbQpzDB23aRxkNmvjNsY9JxHgccY3y9hLndhpXN32IvhcSBcHrgiAI6L8ErpAoNhiBJmX1M3FQ55Np_COFPAuSOeVk__xVHs5R18ds7zjUAe9EJNQdoDzWHoOmxCZFy3gX10ZpkbHzcuI3f5zhtRWE-sIRAdJIDppNH7F9yFQGTF2u1WgJ2VvzrOs8HvNSeaW_54SKT7RU1liENzY4aN9jjiloqB5cbGtb2R6ZiOOcV6SnAIvQXMUo6BwgTqJ6Nol4o2vZIhY4"
            />
            <span class="font-semibold">Design</span>
          </a>
          <a
            class="flex items-center space-x-4 p-4 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            href="#"
          >
            <img
              alt="Developer Category"
              class="w-10 h-10 rounded-lg object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJuOueRrx4v7cYoufaE3v2efe-LlPas62NGHs0i_-D11Wi4Y6kwJhdb0gh75_GZ_vJmPx6SPHt49hYSfF5noE1RukEZEHlcigddBCJyuK_2id6NBUb4i1ZHDz6xSxOpv2d_6OC83E1gN0Xyo7ad-mK0-AYc5dCJYHuc3Xw7PwZHy6FdXfM4gZCmAgPZpjkoDZ8h1DBUArhxxbyU82UWmn1Bd0oqerqmPva4tLuw5-7ifEG_9m7sXC2yQ_p-LitVfTcxj6jk9u_BOM"
            />
            <span class="font-semibold">Developer</span>
          </a>
          <a
            class="flex items-center space-x-4 p-4 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            href="#"
          >
            <img
              alt="Marketing Category"
              class="w-10 h-10 rounded-lg object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqlFj5D2xQ4XyQaHTc5Co0_5MjiJpQEvTwsVRr1N5rgb36M5er5bUqgh5vSEszVlM_bqvNpnFibvh8JSW5qZw17IexiYpeOLXAJNQCel447Ruoh3Z1qSozaZllZCfhvaMpyIYTeRpPb7nhm9x-E9OmI424KNpjNVy5zmeZ6kJGzY7nqiTlBEtP8_2xBCZWwG-f3RnoCc1eIyPJxxPSOAEfGa1Fdp98yruYDrdJB5KwR-BYTwHLtlCyUwL7XYBmfVCInT-WTBY1b_M"
            />
            <span class="font-semibold">Marketing</span>
          </a>
        </div>
      </main>
    </div>
    <nav
      class="border-t border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark"
    >
      <div class="container mx-auto px-4 py-2 flex justify-around">
        <a
          class="flex flex-col items-center justify-center space-y-1 text-primary"
          href="#"
        >
          <svg
            fill="currentColor"
            height="24"
            viewBox="0 0 256 256"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
            ></path>
          </svg>
          <span class="text-xs font-medium">Home</span>
        </a>
        <a
          class="flex flex-col items-center justify-center space-y-1 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
          href="#"
        >
          <svg
            fill="currentColor"
            height="24"
            viewBox="0 0 256 256"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM80,84A12,12,0,1,1,68,72,12,12,0,0,1,80,84Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,120,84Z"
            ></path>
          </svg>
          <span class="text-xs font-medium">Apps</span>
        </a>
        <a
          class="flex flex-col items-center justify-center space-y-1 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
          href="#"
        >
          <svg
            fill="currentColor"
            height="24"
            viewBox="0 0 256 256"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
            ></path>
          </svg>
          <span class="text-xs font-medium">Profile</span>
        </a>
      </div>
      <div class="pb-safe-area-bottom"></div>
    </nav>
  </div>
</template>
