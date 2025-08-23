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
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path
              d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"
            ></path>
          </svg>
        </div>
        <h2
          class="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center"
        >
          About
        </h2>
        <div class="flex w-12 items-center justify-end">
          <button
            class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
          >
            <div
              class="text-white"
              data-icon="Share"
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
                  d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L204.69,112H165a88,88,0,0,0-85.23,66,8,8,0,0,1-15.5-4A103.94,103.94,0,0,1,165,96h39.71L170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66ZM192,208H40V88a8,8,0,0,0-16,0V208a16,16,0,0,0,16,16H192a8,8,0,0,0,0-16Z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="flex p-4 @container">
        <div class="flex w-full flex-col gap-4 items-center">
          <div class="flex gap-4 flex-col items-center">
            <div
              class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUcoY7Dot9-9AlGv3CuBairFXa936w67rvyJRHvi99xDtU0t0JIZw967x2IRFKwmzriXrO6Off8_UkhRe7YjE16HLDNbsjOCBHUw7J7_N8gl_s0jUyP1i0N1xWvJrD0v6WTn14qZzyYlGU7A7mvJBLL_wGAh3AdNPGzD8I0zDZl69V8XRWHdhItOxGkHETEsP1Q9mIqVe6fJ5Aap4VNG0Z5uZCipwYV-ifnmEh16nq-lS7Nu832KhiNNKycWUuN9_qjWZImMUT9I2w');
              "
            ></div>
            <div
              class="flex flex-col items-center justify-center justify-center"
            >
              <p
                class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center"
              >
                Creative 3D
              </p>
              <p
                class="text-[#9cabba] text-base font-normal leading-normal text-center"
              >
                Product Designer
              </p>
              <p
                class="text-[#9cabba] text-base font-normal leading-normal text-center"
              >
                ethancarter.pro · 123 followers
              </p>
            </div>
          </div>
          <button
            class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#283039] text-white text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto"
          >
            <span class="truncate">Follow</span>
          </button>
        </div>
      </div>
      <p class="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
        I'm a product designer with a passion for creating intuitive and
        impactful digital experiences. My work focuses on user-centered design,
        blending aesthetics with functionality to solve real-world problems.
      </p>
      <h3
        class="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
      >
        Skills
      </h3>
      <div class="flex gap-3 p-3 flex-wrap pr-4">
        <div
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#283039] pl-4 pr-4"
        >
          <p class="text-white text-sm font-medium leading-normal">
            UI/UX Design
          </p>
        </div>
        <div
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#283039] pl-4 pr-4"
        >
          <p class="text-white text-sm font-medium leading-normal">
            Interaction Design
          </p>
        </div>
        <div
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#283039] pl-4 pr-4"
        >
          <p class="text-white text-sm font-medium leading-normal">
            User Research
          </p>
        </div>
        <div
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#283039] pl-4 pr-4"
        >
          <p class="text-white text-sm font-medium leading-normal">
            Prototyping
          </p>
        </div>
        <div
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#283039] pl-4 pr-4"
        >
          <p class="text-white text-sm font-medium leading-normal">
            Visual Design
          </p>
        </div>
        <div
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#283039] pl-4 pr-4"
        >
          <p class="text-white text-sm font-medium leading-normal">
            Design Systems
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

    <div
      class="flex gap-2 border-t border-[#283039] bg-[#1b2127] px-4 pb-3 pt-2"
    >
      <RouterLink to="/projects"
        class="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-white"
        href="#"
      >
        <div
          class="text-white flex h-8 items-center justify-center"
          data-icon="Folder"
          data-size="24px"
          data-weight="fill"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path
              d="M216,72H131.31L104,44.69A15.88,15.88,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.41,15.41,0,0,0,39.39,216h177.5A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40Z"
            ></path>
          </svg>
        </div>
        <p
          class="text-white text-xs font-medium leading-normal tracking-[0.015em]"
        >
          Projects
        </p>
      </RouterLink>
      <RouterLink to="/about"
        class="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9cabba]"
        href="#"
      >
        <div
          class="text-[#9cabba] flex h-8 items-center justify-center"
          data-icon="User"
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
              d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
            ></path>
          </svg>
        </div>
        <p
          class="text-[#9cabba] text-xs font-medium leading-normal tracking-[0.015em]"
        >
          About
        </p>
      </RouterLink>
      <a
        class="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9cabba]"
        href="#"
      >
        <div
          class="text-[#9cabba] flex h-8 items-center justify-center"
          data-icon="Envelope"
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
              d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"
            ></path>
          </svg>
        </div>
        <p
          class="text-[#9cabba] text-xs font-medium leading-normal tracking-[0.015em]"
        >
          Status
        </p>
      </a>
    </div>

    <div>
      <div class="h-5 bg-[#111418]"></div>
    </div>
  </div>
</template>
