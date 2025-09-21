<template>
  <div
    class="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-white"
  >
    <!-- Header -->
    <div class="flex items-center justify-between px-4 pt-6">
      <back class="w-8 h-8"></back>
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
        <ContinueWithGoogle class="rounded-full bg-black text-white hover:bg-gray-900" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ContinueWithGoogle from "@/components/auth/ContinueWithGoogle.vue";
</script>
