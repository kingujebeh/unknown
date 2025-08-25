<template>
  <div
    class="relative flex size-full min-h-screen flex-col bg-[#f9fbf9] justify-between group/design-root overflow-x-hidden"
    style="font-family: 'Space Grotesk', 'Noto Sans', sans-serif"
  >
    <div>
      <div class="flex items-center bg-[#f9fbf9] p-4 pb-2 justify-between">
        <h2
          class="text-[#121a0f] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12"
        >
          Yatsar
        </h2>
        <div class="flex w-12 items-center justify-end">
          <button
            class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#121a0f] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
          >
            <div
              class="text-[#121a0f]"
              data-icon="MagnifyingGlass"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div v-if="false" class="px-4 py-3">
        <label class="flex flex-col min-w-40 h-12 w-full">
          <div class="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div
              class="text-[#639155] flex border-none bg-[#ebf2e9] items-center justify-center pl-4 rounded-l-lg border-r-0"
              data-icon="MagnifyingGlass"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                ></path>
              </svg>
            </div>
            <input
              placeholder="Search for birding gear"
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#121a0f] focus:outline-0 focus:ring-0 border-none bg-[#ebf2e9] focus:border-none h-full placeholder:text-[#639155] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              value=""
            />
          </div>
        </label>
      </div>
      <div class="@container">
        <div class="@[480px]:px-4 @[480px]:py-3">
          <div
            class="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-[#f9fbf9] @[480px]:rounded-lg min-h-[218px]"
            style="
              background-image: linear-gradient(
                  0deg,
                  rgba(0, 0, 0, 0.4) 0%,
                  rgba(0, 0, 0, 0) 25%
                ),
                url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOA2H-lBXziW727pEj0d8E9wqYBFDKTYzH3GBq9nGnXfRRkBJnp45hXtIAV5bgdeEKwzhIjsKvkHO1yP2tvuw3B-ttxuKiaRSghcFQxCVxwRppT8wknoSTF6lQhQ9mlHZtCIxOD4nDdNBZboirMrd3PxQpGLjfmPHKhMCzMkXpPwTp99q-2GoJ6L-A4Jp12Vtv7qy9RweBierENpIY5995ypg_ncAw5iSYYucCct2n4gpsX6YrhkHcH3PbzMbjXJGrbXcKrwfayqk');
            "
          >
            <div class="flex p-4">
              <p
                class="text-white tracking-light text-[28px] font-bold leading-tight"
              >
                Explore the World of Birds
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2
        class="text-[#121a0f] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
      >
        Categories
      </h2>
      <div
        class="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden"
      >
        <div class="flex items-stretch p-4 gap-3">
          <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCuDy0_Xpw1NF1-0pHzvVczvnnAT-WeWvUMbPccP1IMEs_A78x8se_UR5YUO9a9ePlvhkL3HeTlhUNPyGGxPZ5XFivuXiXtsfKFlcM83iLahu01vJtArFmpns-WbQRILBWqNJ0vMVWTJbIr1OSMXml12Usm-sLjjQsIweW2MO6rHe00WZR96Si-HcO-Fd1nr0CTfCpTjbYScH4tx_4XaxVxWF4wI0UJtEQ-hVEiXxn1kD4CV88HrHDI082gbIwiK_ktK9L7MmRljk');
              "
            ></div>
            <p class="text-[#121a0f] text-base font-medium leading-normal">
              Binoculars
            </p>
          </div>
          <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2G_a6R1YsWNkU71lp6y9oJWs7RwqHn0BALhi0bfwOU8oMc_AeGikVtdlC_3Vxc0w6Udcnj7qFixkK_989AS7YMvrdxXYip2_EQMDJab0jIIPGp4iwWBmy6oqei8yufjbkwEAbe0cwFHIl0XShXDAzkYipc966F04X5MX9pgw_z2a6zLs3jKp588yEE8k5It-XLg262w0QPLs0GlYW9u646uY6Tw0LZ0zjEd0UlknsuU0eD403_UcSjYSo2bcxvduenH6hFSeLzE0');
              "
            ></div>
            <p class="text-[#121a0f] text-base font-medium leading-normal">
              Bird Feeders
            </p>
          </div>
          <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBT3OZwAiLmASPB5-rmtWYGD9GJRlKzldItj3YIvgmJik8jp5-jrR6j4LRRI4f7CCDn5_2ShLkqG1Mk_Peh6u3dzcvCrTiNqt-Xx6NiVfEj2_TzRvLlWZsk26dSae9wlV6EVLfErakWd-mGyOEzsgFgTQWjtuZFUdRWb_8OkkukpnTQTg55CeJ2kYzqDrTbzTMdPxTg5LkaAgpqYDzd9Z0OhjwGAIoEVJxMZ6SF-8NHcgfIH4t8lOyLICE7e7BKyfue9h_NBGkVz2c');
              "
            ></div>
            <p class="text-[#121a0f] text-base font-medium leading-normal">
              Field Guides
            </p>
          </div>
          <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUKjlzS2SewGjAm4BWdk39rW6uvPqEAgadbCBQWISPvKNFs1hG2dyQYaFSek0p9Yi70HqbQFAqlrWTOGaqmKcouDRLTulS5wVC7lH2Wa-ezaHQ4yTj1_jX8SYXothCNkoK_pdn1ySQdOA8x3wp3VKSwzojYyhh8mhhInZlWecDMA9ogvl1jd8QC-JeUzV7W6_TJ9nCTPPpNYMz-QvCHZrl3vUKobs_wnyEeFA2Mo4ct_VTkGHveGJ4-PuiYaR6k7rSGLyPWrpl2tM');
              "
            ></div>
            <p class="text-[#121a0f] text-base font-medium leading-normal">
              Bird Baths
            </p>
          </div>
        </div>
      </div>
      <h2
        class="text-[#121a0f] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
      >
        Featured Products
      </h2>
      <div
        class="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden"
      >
        <div class="flex items-stretch p-4 gap-3">
          <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsbu1E03Sq9OKdYYP3B4nm7TiCBLbMihRuOpxY8I0ColIDF8zaDP_ts5N_TD-nI7r_gTfpJsibixtRTo646ynKEIPcdJ3g0G8J3FEK0DBJ-d_auWXp0IocPUjfDzij42gU55TPC-SiEmMg4KsdeWyXbJlf0V83Sd1qsXAvpenHDo-PtkUwpLV-LLJrYfbNPNtC6coTE3QY9a3cZ8PHrbYZHTsUsPwPU2Zpi-UucyiXSL2wlweK-XXGEnAH1ogZ0x16TUayW2RXxJY');
              "
            ></div>
            <div>
              <p class="text-[#121a0f] text-base font-medium leading-normal">
                High-Performance Binoculars
              </p>
              <p class="text-[#639155] text-sm font-normal leading-normal">
                $199
              </p>
            </div>
          </div>
          <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCdyD0PtCoU4yfGLOwFsNFzk0_w_44V0m4NoApfqbK-3vpgKfC0xN6GsKyMfz1veo2AF0VHz3oKXPUnSP7MPrHlfQSPsOeo7YakylR8pOPClFH6qvjPlb0guKmq2hPtunozYf9pVBK6qj9RZ9-S15llPjMoqanLwNJDvPf9WSBVuo44Mr7Uz-C1RArvqRSZWW_eg7Z3OFJiPD9mYrFnYZVrAx4uam0XX63P_gQicetLrf8t349DWHXlQRWonaQHaBSlcyEUBBaWJE');
              "
            ></div>
            <div>
              <p class="text-[#121a0f] text-base font-medium leading-normal">
                Eco-Friendly Bird Feeder
              </p>
              <p class="text-[#639155] text-sm font-normal leading-normal">
                $49
              </p>
            </div>
          </div>
          <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuANhSdgZkCkaQwLJnfoq2I2mjhsu0CoJBct3Q_FlqDBQ_vA65FiXBFx8OBbfO8pcZPvw8DBDnfnecmEcov3yJPZWEZrmZKt0SLxvhhobQyiwGmz1jSjsCtZO2ujZmIViLVvUbIukzi5l13bPUzbrRUHtFpQ5sdQU6xv6Qvep-7qHvxDs1Rld_zJlycBepK23qzheOOO_xj7hjUOFTL6FACc3doHtTPUpRj1VBp2DLRH_dbQuC4K3d8gKr4LJ76xwM1ibfhQ4f-8aSY');
              "
            ></div>
            <div>
              <p class="text-[#121a0f] text-base font-medium leading-normal">
                Birding Backpack
              </p>
              <p class="text-[#639155] text-sm font-normal leading-normal">
                $79
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
