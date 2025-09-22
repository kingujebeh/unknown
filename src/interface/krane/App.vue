<template>
  <div
    class="relative flex h-auto min-h-screen w-full flex-col justify-between overflow-x-hidden"
  >
    <div class="flex-grow">
      <header
        class="sticky top-0 z-10 flex items-center justify-between bg-background-light/80 p-4 pb-2 backdrop-blur-sm dark:bg-background-dark/80"
      >
        <button
          class="flex size-10 shrink-0 items-center justify-center rounded-full text-zinc-900 dark:text-white"
        >
          <span class="material-symbols-outlined"> arrow_back </span>
        </button>
        <h1
          class="flex-1 text-center text-lg font-bold text-zinc-900 dark:text-white"
        >
          App Details
        </h1>
        <div class="w-10 shrink-0"></div>
      </header>
      <main>
        <div class="p-4">
          <div
            class="relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-xl bg-cover bg-center"
            style="
              background-image: linear-gradient(
                  0deg,
                  rgba(0, 0, 0, 0.6) 0%,
                  rgba(0, 0, 0, 0) 40%
                ),
                url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCZmBKMHs21ps3Hlsatdo3lqeb_vy3WLyu_Kj3R4QWntLw4PpeqKbIi7WXFe2sR_RXIxM6AaMRPvBfRaEddNDMIsVt-qW3a1Rys3yx0adMQnu5HFuaBT81b6PDn-a5gSoxD1MIBJhWz135TA4Dgsj5mfWrRHqkBTUHSKTtxi6iBWSlD3rr9V8QAw3NjYYgu8DwjMqHBSic5LTruYkOoX2Zrzz8muV6uLZioIpg2jOr6L7dnyLTrATFrGcPb5_AyZPrGQCXvTviFEU');
            "
          >
            <div class="p-4">
              <h2 class="text-3xl font-bold text-white">Productivity Suite</h2>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between px-4 pb-4">
          <div class="flex flex-col items-start">
            <div class="flex items-center gap-1">
              <span class="text-lg font-bold text-zinc-900 dark:text-white"
                >4.5</span
              >
              <div class="flex text-primary">
                <span class="material-symbols-outlined text-base">star</span>
                <span class="material-symbols-outlined text-base">star</span>
                <span class="material-symbols-outlined text-base">star</span>
                <span class="material-symbols-outlined text-base">star</span>
                <span
                  class="material-symbols-outlined text-base text-zinc-300 dark:text-zinc-600"
                  >star_half</span
                >
              </div>
            </div>
            <a class="text-sm text-zinc-500 dark:text-zinc-400" href="#"
              >125 reviews</a
            >
          </div>
          <button
            class="flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-base font-bold text-white"
          >
            <span class="material-symbols-outlined">open_in_new</span>
            <span class="truncate">Open Domain</span>
          </button>
        </div>
        <p class="px-4 pb-4 text-base text-zinc-600 dark:text-zinc-400">
          A comprehensive suite of tools designed to boost your productivity,
          including a word processor, spreadsheet editor, and presentation
          software.
        </p>
        <div class="space-y-4">
          <h3 class="px-4 text-2xl font-bold text-zinc-900 dark:text-white">
            Screenshots
          </h3>
          <div
            class="flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden"
          >
            <div class="w-4/5 flex-shrink-0 snap-start">
              <div
                class="aspect-video w-full rounded-lg bg-cover bg-center"
                style="
                  background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOq3HSQ2Udz4cmnxDyedEpgCGoI-k51gXhFAz1oRh4veEmKGmZKb4mvDywq8Q2M7_Cx2_8iTSM_IRQP24MSR3kRUvm5ONn3o3ddFgFxtFuMyCmbKmPMTaPd86PQwLdtdo41hzD81QxfnC2Lk5tdb6wGi8SaqYlyT2npgimucNB8k8Jdz1YUyYmpQCXZNUEQGhOKP-OMW-BnUI6zNE2KyFamqAI1Lr2XryYfJgumVa_qN-ag3HiRq-kPXV9jriOKZjffZAd-gVOOr0');
                "
              ></div>
            </div>
            <div class="w-4/5 flex-shrink-0 snap-start">
              <div
                class="aspect-video w-full rounded-lg bg-cover bg-center"
                style="
                  background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWQ3P9OeEh20pVURb3DwsYrLeU2g6fNcTdg-qK2ZTMQaRCWsMOoK1qCcOv7QPqarFvEhI8aAAB8KZ1Vu4KNkOCwNtp2GHaLkhh56g7CrPfwMStiRG0B5L9QicfrwE8dv_lg8-cAvT5LwCtDDgVWmJO9H2ri6FxyiNJC7eL6IK3sBi8074-lgOwe2jsLvaLQlWcO93iPC5ZKm7lhbPTVg72hLcBrXwOeLQmVXMRrI-mlPVGbjaKZdULI1dF-gJ1p21smRFLfJCPOLw');
                "
              ></div>
            </div>
            <div class="w-4/5 flex-shrink-0 snap-start">
              <div
                class="aspect-video w-full rounded-lg bg-cover bg-center"
                style="
                  background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSl04ANPJTS7dawZgRlMPJNoEYzKU4Ww2zuk2aDkW4RnzHh2EqeUa0GpJqgkHo6LkAFpsHa7poiDM4gqOVMD6skGgUDEi3H9MKYw5eIRbNTgXt3vsqAy9K9kWwA-_GUHTxdSfEajpLqfKfhoPeR5trjHw9-nuA8-sQzLB9alJjgsQd_Dcm-K_sHUecoaB-lQjoD_5BV3Le6_E3SpYRHaBXpj54jVVWYNHlUrNzyAttFHlRg6xFRmIJTy1KGvNyh_yivdL-y6RGqZg');
                "
              ></div>
            </div>
          </div>
        </div>
        <div class="px-4 pt-8">
          <h3 class="text-2xl font-bold text-zinc-900 dark:text-white">
            Ratings and Reviews
          </h3>
          <div class="mt-4 flex flex-wrap items-start gap-6">
            <div class="flex flex-col items-center gap-1">
              <p class="text-5xl font-black text-zinc-900 dark:text-white">
                4.5
              </p>
              <div class="flex text-primary">
                <span class="material-symbols-outlined text-lg">star</span>
                <span class="material-symbols-outlined text-lg">star</span>
                <span class="material-symbols-outlined text-lg">star</span>
                <span class="material-symbols-outlined text-lg">star</span>
                <span
                  class="material-symbols-outlined text-lg text-zinc-300 dark:text-zinc-600"
                  >star_half</span
                >
              </div>
              <p class="text-sm text-zinc-500 dark:text-zinc-400">
                125 reviews
              </p>
            </div>
            <div
              class="grid flex-1 grid-cols-[auto_1fr_auto] items-center gap-x-2 gap-y-1 text-sm"
            >
              <span class="text-zinc-600 dark:text-zinc-400">5</span>
              <div class="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700">
                <div
                  class="h-1.5 rounded-full bg-primary"
                  style="width: 75%"
                ></div>
              </div>
              <span class="text-right text-zinc-500 dark:text-zinc-400"
                >94</span
              >
              <span class="text-zinc-600 dark:text-zinc-400">4</span>
              <div class="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700">
                <div
                  class="h-1.5 rounded-full bg-primary"
                  style="width: 15%"
                ></div>
              </div>
              <span class="text-right text-zinc-500 dark:text-zinc-400"
                >18</span
              >
              <span class="text-zinc-600 dark:text-zinc-400">3</span>
              <div class="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700">
                <div
                  class="h-1.5 rounded-full bg-primary"
                  style="width: 5%"
                ></div>
              </div>
              <span class="text-right text-zinc-500 dark:text-zinc-400">6</span>
              <span class="text-zinc-600 dark:text-zinc-400">2</span>
              <div class="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700">
                <div
                  class="h-1.5 rounded-full bg-primary"
                  style="width: 2%"
                ></div>
              </div>
              <span class="text-right text-zinc-500 dark:text-zinc-400">2</span>
              <span class="text-zinc-600 dark:text-zinc-400">1</span>
              <div class="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700">
                <div
                  class="h-1.5 rounded-full bg-primary"
                  style="width: 3%"
                ></div>
              </div>
              <span class="text-right text-zinc-500 dark:text-zinc-400">5</span>
            </div>
          </div>
        </div>
        <div class="mt-8 space-y-6 px-4">
          <div
            class="space-y-3 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
          >
            <div class="flex items-center gap-3">
              <div
                class="size-10 shrink-0 rounded-full bg-cover bg-center"
                style="
                  background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKD1fXP2Q4LewooP-TjxYSOpT9IKO1CMPXeUFnaAx9xS_cJvuxZdfXcnpEh0huMV2A2J9IIQbL_RfbnKDKaNjA_1VkfNLrANF6dgeIwOJhCfs4GABsaALiibN1P2CyMNZPzPRP4PA_ncAc-zAiQGSn1Ej5yCBFJysSmFgdz_jqFO2IUjKAYibBnZ2_bREhnYgEByBbWUiysnq9juhzrDxD9j_n9EH8pDrywZb10mBtP-Vh8XjhzWdVIdeggaiRw9smM0PlPo34Miw');
                "
              ></div>
              <div class="flex-1">
                <p class="font-medium text-zinc-900 dark:text-white">
                  Ethan Carter
                </p>
                <div class="flex text-primary">
                  <span class="material-symbols-outlined text-base">star</span>
                  <span class="material-symbols-outlined text-base">star</span>
                  <span class="material-symbols-outlined text-base">star</span>
                  <span class="material-symbols-outlined text-base">star</span>
                  <span class="material-symbols-outlined text-base">star</span>
                </div>
              </div>
              <p class="text-sm text-zinc-500 dark:text-zinc-400">
                2 months ago
              </p>
            </div>
            <p class="text-zinc-700 dark:text-zinc-300">
              This suite has completely transformed my workflow. The tools are
              intuitive and powerful, making my tasks much more efficient.
            </p>
          </div>
          <div
            class="space-y-3 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
          >
            <div class="flex items-center gap-3">
              <div
                class="size-10 shrink-0 rounded-full bg-cover bg-center"
                style="
                  background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2P3agqyKaZSZe6TM-rjeG7LuNozome10RHeJMZbiWM9sLk8HNwYD66MVUS7S8IXKHhCOjE5erqLXSM5lLDiVyOlC7FpELW8Qof99VBU1IYV5yeHm1R0vN2EvC3IJbSb5ifz7LeUJomC2Qxk7WNKO_gVskez5sx0JaUJCquMVbM49m1mc0nCmh0blOXIXNfKswA8YCUg5OxnsItByUpQMJbeUXcaTRPphTGm-xKvBsNv4OH9_AG8_YNBShXW1M-8p-kLy6fTe6uy4');
                "
              ></div>
              <div class="flex-1">
                <p class="font-medium text-zinc-900 dark:text-white">
                  Olivia Bennett
                </p>
                <div class="flex text-primary">
                  <span class="material-symbols-outlined text-base">star</span>
                  <span class="material-symbols-outlined text-base">star</span>
                  <span class="material-symbols-outlined text-base">star</span>
                  <span class="material-symbols-outlined text-base">star</span>
                  <span
                    class="material-symbols-outlined text-base text-zinc-300 dark:text-zinc-600"
                    >star</span
                  >
                </div>
              </div>
              <p class="text-sm text-zinc-500 dark:text-zinc-400">
                3 months ago
              </p>
            </div>
            <p class="text-zinc-700 dark:text-zinc-300">
              Overall, a solid suite of productivity tools. The interface is
              clean, and the features are well-organized. However, it could use
              some additional templates.
            </p>
          </div>
        </div>
      </main>
    </div>
    <footer
      class="sticky bottom-0 bg-background-light/80 pt-3 backdrop-blur-sm dark:bg-background-dark/80"
    >
      <div class="h-5"></div>
    </footer>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.params);
</script>
