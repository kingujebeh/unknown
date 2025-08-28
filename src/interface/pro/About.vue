<template>
  <div
    class="relative flex size-full min-h-screen flex-col bg-[#111418] dark justify-between group/design-root overflow-x-hidden"
    style="font-family: 'Plus Jakarta Sans', 'Noto Sans', sans-serif"
  >
    <div>
      <div class="flex items-center bg-[#111418] p-4 pb-2 justify-between">
        <div
          class="text-white flex size-12 shrink-0 items-center"
          data-icon="ArrowLeft"
          data-size="24px"
          data-weight="regular"
        ></div>
        <h2
          class="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center"
        >
          About
        </h2>
        <div class="flex w-12 items-center justify-end">
          <button
            class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
          >
            <Icon icon="material-symbols-light:share" class="w-6 h-6" />
          </button>
        </div>
      </div>
      <div class="flex p-4 @container">
        <div class="flex w-full flex-col gap-4 items-center">
          <div class="flex gap-4 flex-col items-center">
            <div
              class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
              style="
                background-image: url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/0c0290fa2fdcfaec0fd3c61ddef14bae-1723635067108/5e6822e0-fa3a-4787-93f1-fece4f1a2fd1.jpg');
              "
            ></div>
            <div
              class="flex flex-col items-center justify-center justify-center gap-2"
            >
              <p
                class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center"
              >
                Creatyve3D Inc
              </p>
              <p
                class="text-[#9cabba] text-base font-normal leading-normal text-center"
              >
                Lead Consultant
              </p>
              <div
                class="flex items-center gap-2 text-[#9cabba] text-base font-normal leading-normal justify-center"
              >
                <p>@creatyve3d · 285 followers</p>
                <div class="flex gap-0.5">
                  <!-- Full stars -->
                  <Icon
                    icon="material-symbols:star"
                    class="w-5 h-5 text-white"
                  />
                  <Icon
                    icon="material-symbols:star"
                    class="w-5 h-5 text-white"
                  />
                  <Icon
                    icon="material-symbols:star"
                    class="w-5 h-5 text-white"
                  />
                  <Icon
                    icon="material-symbols:star"
                    class="w-5 h-5 text-white"
                  />
                  <!-- Half star -->
                  <Icon
                    icon="material-symbols:star-half"
                    class="w-5 h-5 text-white"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#283039] text-white text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            @click="toggleFollow"
            :disabled="loading"
          >
            <!-- Loading Spinner -->
            <div v-if="loading" class="flex items-center gap-2">
              <span class="loader"></span>
              <span class="truncate">Loading...</span>
            </div>

            <!-- Normal states -->
            <span v-else-if="!store.user.isFollowing" class="truncate"
              >Follow</span
            >
            <span v-else class="truncate">Followed</span>
          </button>
        </div>
      </div>
      <p class="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
        I am a 3D generalist and lead consultant with Creatyve3D Inc of Creatyve
        Graphyx, Nigeria. We have the proper tools, experience, and fortitude to
        get all your ideas perfected, from thought to product.
      </p>
      <p class="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
        Allow us to take the stress off you, and handle that project for you and
        I'm sure you'd be glad you delegated it to us.
      </p>
      <h3
        class="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
      >
        Skills
      </h3>
      <div class="flex gap-3 p-3 flex-wrap pr-4">
        <div
          v-for="skill in skills"
          :key="skill"
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#283039] px-4"
        >
          <p class="text-white text-sm font-medium leading-normal">
            {{ skill }}
          </p>
        </div>
      </div>
      <h3
        class="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
      >
        Design Philosophy
      </h3>
      <p class="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
        I believe in the power of empathy and collaboration. My design process
        is iterative, involving continuous feedback and refinement to ensure the
        final product meets user needs and business goals. I strive to create
        designs that are not only beautiful but also meaningful and accessible.
      </p>
      <div>
        <h3
          class="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
        >
          Awards
        </h3>
        <div
          class="flex items-center gap-4 bg-[#111418] px-4 min-h-[72px] py-2"
        >
          <div
            class="text-white flex items-center justify-center rounded-lg bg-[#283039] shrink-0 size-12"
            data-icon="Trophy"
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
                d="M232,64H208V56a16,16,0,0,0-16-16H64A16,16,0,0,0,48,56v8H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-28.49,64.64-63.51,64.9H128a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-col justify-center">
            <p
              class="text-white text-base font-medium leading-normal line-clamp-1"
            >
              Design Excellence Award
            </p>
            <p
              class="text-[#9cabba] text-sm font-normal leading-normal line-clamp-2"
            >
              2021
            </p>
          </div>
        </div>
      </div>
      <h3
        class="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
      >
        Testimonials
      </h3>
      <div class="flex flex-col gap-8 overflow-x-hidden bg-[#111418] p-4">
        <div class="flex flex-col gap-3 bg-[#111418]">
          <div class="flex items-center gap-3">
            <div
              class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBaakEx0OW1N1wJt1CqZPb1U8fRno0-BeLN7UP-q-fhAtqjgHJvg5RtEoGmDXwF1KT8luVhXghpYHpycyrr-GhjSYDOuFrOazYgKZzt-vdo8drF490oPDbjpSbGAqOvPwSOCxgZFjgWcWPDNvS1oyev28hAy5_hk3D9LQ4u0KDs1GI3GIOpmRohHVykrA38RpUlVYl_MWop0BJm1H45jCCc9jsem5h5WUSqG-ugaCb6CDGFPBrCEXRxK9vxO9ckCM4UOIJRDmiJSzzz');
              "
            ></div>
            <div class="flex-1">
              <p class="text-white text-base font-medium leading-normal">
                Sophia Bennett
              </p>
              <p class="text-[#9cabba] text-sm font-normal leading-normal">
                2023
              </p>
            </div>
          </div>
          <div class="flex gap-0.5">
            <div
              class="text-white"
              data-icon="Star"
              data-size="20px"
              data-weight="fill"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div
              class="text-white"
              data-icon="Star"
              data-size="20px"
              data-weight="fill"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div
              class="text-white"
              data-icon="Star"
              data-size="20px"
              data-weight="fill"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div
              class="text-white"
              data-icon="Star"
              data-size="20px"
              data-weight="fill"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div
              class="text-white"
              data-icon="Star"
              data-size="20px"
              data-weight="fill"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
          </div>
          <p class="text-white text-base font-normal leading-normal">
            Ethan's design expertise transformed our app. His user-centric
            approach and attention to detail resulted in a seamless and engaging
            experience for our users.
          </p>
          <div class="flex gap-9 text-[#9cabba]">
            <button class="flex items-center gap-2">
              <div
                class="text-inherit"
                data-icon="ThumbsUp"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
                  ></path>
                </svg>
              </div>
              <p class="text-inherit">12</p>
            </button>
            <button class="flex items-center gap-2">
              <div
                class="text-inherit"
                data-icon="ThumbsDown"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
                  ></path>
                </svg>
              </div>
              <p class="text-inherit">1</p>
            </button>
          </div>
        </div>
        <div class="flex flex-col gap-3 bg-[#111418]">
          <div class="flex items-center gap-3">
            <div
              class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjHTRtbuKj7-caZlixZqg7DdwHfaP05etYuofcRjxOZy3UB8GhkvBYXJ52n_DseggXcYsY9zQ-On8_vnVREoaDsXHdLYARkYAcEMxr0gx43wiyscUQdFF7xdcQYKkD5cTMeFO0QkwmlJkgCdUhgUYPENVRT89rwAeQ_TSjllzQnD6nrYp9nkrICfehd1CMb_BYAmqPpxEXMPBRIbqG1BSbhmuHRmyZIctAfFT3R8BK9uxOrzqNxT6tmGVbQ-g8Sr1vlvFGjWIL7tAj');
              "
            ></div>
            <div class="flex-1">
              <p class="text-white text-base font-medium leading-normal">
                Liam Harper
              </p>
              <p class="text-[#9cabba] text-sm font-normal leading-normal">
                2022
              </p>
            </div>
          </div>
          <div class="flex gap-0.5">
            <div
              class="text-white"
              data-icon="Star"
              data-size="20px"
              data-weight="fill"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div
              class="text-white"
              data-icon="Star"
              data-size="20px"
              data-weight="fill"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div
              class="text-white"
              data-icon="Star"
              data-size="20px"
              data-weight="fill"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div
              class="text-white"
              data-icon="Star"
              data-size="20px"
              data-weight="fill"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div
              class="text-white"
              data-icon="Star"
              data-size="20px"
              data-weight="fill"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
          </div>
          <p class="text-white text-base font-normal leading-normal">
            Working with Ethan was a pleasure. His ability to translate complex
            ideas into intuitive designs is truly remarkable. Highly recommend!
          </p>
          <div class="flex gap-9 text-[#9cabba]">
            <button class="flex items-center gap-2">
              <div
                class="text-inherit"
                data-icon="ThumbsUp"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
                  ></path>
                </svg>
              </div>
              <p class="text-inherit">8</p>
            </button>
            <button class="flex items-center gap-2">
              <div
                class="text-inherit"
                data-icon="ThumbsDown"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useStore } from "@/store";

const store = useStore();

const skills = reactive([
  "3D modeler",
  "3D Rendering Expert",
  "Autodesk Maya Expert",
  "Cinema 4D Expert",
  "Blender Expert",
  "Adobe Photoshop Expert",
  "Adobe Illustrator Expert",
  "Graphic Designer",
  "Marvelous Designer Expert",
  "3D Sculpting Artist",
  "ZBrush Expert",
  "Rhinoceros 3D Expert",
  "SketchUp Expert",
]);

const loading = ref(false);

async function toggleFollow() {
  if (loading.value) return; // prevent spamming

  loading.value = true;
  try {
    if (store.user.isFollowing) {
      await unfollow();
    } else {
      await follow();
    }
  } catch (err) {
    console.error("Failed:", err);
  } finally {
    loading.value = false;
  }
}

async function follow() {
  let uid = store.user.uid;

  if (uid) {
    await store.follow(uid);
  } else {
    await store.signin();
    await store.follow(uid);
  }
  console.info("Followed");
}

async function unfollow() {
  let uid = store.user.uid;
  if (uid) {
    await store.unfollow(uid);
  }
}
</script>

<style scoped>
.loader {
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid #fff;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
