<template>
  <div
    class="relative flex size-full min-h-screen flex-col bg-[#111418] dark justify-between group/design-root overflow-x-hidden"
    style="font-family: 'Plus Jakarta Sans', 'Noto Sans', sans-serif"
  >
    <div>
      <div class="@container">
        <div class="@[480px]:px-4 @[480px]:py-3">
          <div
            class="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#111418] @[480px]:rounded-lg min-h-80"
            style="
              background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzuKZv8xnsL8ljsleK73pRuBrMT_K7X6RePwtEVLiJVgf2a8Rai53FXa_2hN3MtcXoaW4WusGd9dViQIFL_SVJBYy6gf-loIei_Eyi7QhimrOf9FRqt7DTuH3uUiZTdadCcDHitRcFCi22DWBV43SYldRAhArg4RbTbdOHV_h-3IK7gMlJT5b-2S0tnvjE8swFYsPDbmNV31pSP8bTpPg8nF0OhwnP1HLsG1HNrPxbK1eM1sMg3o4kuOn7Bx_d4i6oi2I4AmKgvPtX');
            "
          ></div>
        </div>
      </div>
      <h1
        class="text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6"
      >
        Yatsar
      </h1>
      <p
        class="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center"
      >
        Beauty, Cosmetics
      </p>
    </div>
    <div><div class="h-5 bg-[#111418]"></div></div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
setTimeout(() => router.push("/home"), 2500);
</script>
