<template>
  <div
    class="relative flex size-full min-h-screen flex-col bg-[#f9fbf9] justify-between group/design-root overflow-x-hidden"
    style="font-family: 'Space Grotesk', 'Noto Sans', sans-serif"
  >
    <div>
      <div class="flex items-center bg-[#f9fbf9] p-4 pb-2 justify-between">
        <div
          class="text-[#121a0f] flex size-12 shrink-0 items-center"
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
        <div class="flex w-12 items-center justify-end">
          <button
            class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#121a0f] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
          >
            <div
              class="text-[#121a0f]"
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
      <div
        class="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden"
      >
        <div class="flex items-stretch p-4 gap-3">
          <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCS2b04rNgUtzfJuTTkWIwU0Ob_wlYUxdBwkrhkHqzMfFwexGIAq1Ir-BYDE4GM7rcy-FObHJYqdj9If3ZgvllT0BKwMo5VM0iHMHB5CqlOCLS1j5xYTU0sbYjDfTy_n3644YBVfv9osTWtQFc9xOiqP5GxLkDtZ9GO4fXVARjEiCYjNc_h6r37CVq-Mxw1Ira-ZLy8jusSHYJnSjJeXhOCAqePIIYsY0keC-8sJ8nHxl9rg7tWMamwY1wI9G9-G6uRuJ-VTlDFVWY');
              "
            ></div>
          </div>
          <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDht32m4k044JCH4GFrUHa9WCRBcZYsUNdTWFkNelb4UqTRdVKNlaeG1eMzphcVUfzf2j8RZik0JaLxVaFRZSRVjZeJlSCbAovXpQ9_oeLseZxImdJoHd2ccALS-PjwkTceCfPBbB0cG4ChWSfL6QPnmv7Y3TrEK6aQQu4rcriONJzt1-7G2NMcMHcQrAD092GtBzNSc19YU2WmqFCeg6eT36nnieQ--WZ2JaWSsGArTd9xfUm6F79YyTA3ljrJOo1KljqGsr0yE1Y');
              "
            ></div>
          </div>
          <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHnyVWezD34doHqVZst_RNIFZzZTnvpvYPo1EBzer6Uwi42R0Kw_kiCl12DO5Fd2B4k2s77TPe_XcpnDJKGUCgbQniWg7cos7baDPe8SUF8YRKYvJykNtDke7kb-jUGYxujE5CHeCctwUWsXAF_gsCE6L_gMSV5o4nWh79cL1_FTtDi53-OCOZr8t7Tbbty0BAXna2gfQb2nn5gBrQ6ljKAQDgJzT9Lkxb19oGk6L3J6yEsvmiQL1jqhDAHWK92olAbM040RDrfN0');
              "
            ></div>
          </div>
          <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTbmcdyxTMiMJWaQh6g2h4J4_7I4maQe-JiqMLwu_wYuPjKeHoA87bDMwmrgE7s7FjckhliOhiCaqtiX4KHLFkwT1wYJhtffwKGYe6ADFlfnzcLlwD4b-A5v_axJtJHDfyQrU3WwnS-G57KFRzg4WD9-g3MT8DyofOnCjUm14XENjiUlakvX5eyx4DA5itrTq6T44P3DPzlMPLfhUEDLD4DtYZd-R5EHkuLYkBz0bXt8QVlooWaY1VzCcgsYs9c6Lzqx7Pew2Fk4A');
              "
            ></div>
          </div>
        </div>
      </div>
      <h1
        class="text-[#121a0f] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5"
      >
        Eagle Eye Binoculars
      </h1>
      <p
        class="text-[#639155] text-sm font-normal leading-normal pb-3 pt-1 px-4"
      >
        4.5 stars (120 reviews)
      </p>
      <p
        class="text-[#121a0f] text-base font-normal leading-normal pb-3 pt-1 px-4"
      >
        Experience the thrill of bird watching with our Eagle Eye Binoculars.
        Designed for clarity and durability, these binoculars bring nature's
        wonders closer.
      </p>
      <h3
        class="text-[#121a0f] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
      >
        Specifications
      </h3>
      <div class="p-4 grid grid-cols-[20%_1fr] gap-x-6">
        <div
          class="col-span-2 grid grid-cols-subgrid border-t border-t-[#d6e5d2] py-5"
        >
          <p class="text-[#639155] text-sm font-normal leading-normal">
            Magnification
          </p>
          <p class="text-[#121a0f] text-sm font-normal leading-normal">10x</p>
        </div>
        <div
          class="col-span-2 grid grid-cols-subgrid border-t border-t-[#d6e5d2] py-5"
        >
          <p class="text-[#639155] text-sm font-normal leading-normal">
            Lens Diameter
          </p>
          <p class="text-[#121a0f] text-sm font-normal leading-normal">42mm</p>
        </div>
        <div
          class="col-span-2 grid grid-cols-subgrid border-t border-t-[#d6e5d2] py-5"
        >
          <p class="text-[#639155] text-sm font-normal leading-normal">
            Weight
          </p>
          <p class="text-[#121a0f] text-sm font-normal leading-normal">650g</p>
        </div>
        <div
          class="col-span-2 grid grid-cols-subgrid border-t border-t-[#d6e5d2] py-5"
        >
          <p class="text-[#639155] text-sm font-normal leading-normal">
            Waterproof
          </p>
          <p class="text-[#121a0f] text-sm font-normal leading-normal">Yes</p>
        </div>
      </div>
      <h3
        class="text-[#121a0f] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
      >
        Customer Reviews
      </h3>
      <div class="flex flex-col gap-8 overflow-x-hidden bg-[#f9fbf9] p-4">
        <div class="flex flex-col gap-3 bg-[#f9fbf9]">
          <div class="flex items-center gap-3">
            <div
              class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1Mya_xakkG_ILXdeOUnLelBx2XnbePMUQs7MoLv634C4-A45r9-0E8zO-j0RC8rOlF9jyCCkdHNw4x_eAA3VSnra9QeqzmQjxcX2GcoUFsx1WL3m-ATXLm4T8xw-KhNRLhqphgvAPzWUaKd33B0MPVzOKCUMpUVxwxibUV1edx3ipUIuLaD18lH9Moy0Iu4yY8o3JDriMA4lfToYQ2j3Duy5O5Kw2fpWHNwL8bl8j0Fw4QQNejZ4fYFgJJrXC8Zt7IU4BrEEI7L0');
              "
            ></div>
            <div class="flex-1">
              <p class="text-[#121a0f] text-base font-medium leading-normal">
                Liam Carter
              </p>
              <p class="text-[#639155] text-sm font-normal leading-normal">
                2 months ago
              </p>
            </div>
          </div>
          <div class="flex gap-0.5">
            <div
              class="text-[#54d22d]"
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
              class="text-[#54d22d]"
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
              class="text-[#54d22d]"
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
              class="text-[#54d22d]"
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
              class="text-[#54d22d]"
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
          <p class="text-[#121a0f] text-base font-normal leading-normal">
            These binoculars are fantastic! The clarity is amazing, and they're
            surprisingly lightweight. Perfect for long bird watching sessions.
          </p>
          <div class="flex gap-9 text-[#639155]">
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
              <p class="text-inherit">23</p>
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
              <p class="text-inherit">2</p>
            </button>
          </div>
        </div>
        <div class="flex flex-col gap-3 bg-[#f9fbf9]">
          <div class="flex items-center gap-3">
            <div
              class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwg1i0kxcLkHQ3RwdBuJ3wYSWH7s3PX0MlIIYuMS9kujmoN-55u31z6JFS8QhSl0jc-kVlmGNnh8srjXRPE65LZ1g0L_L_6bHE3A5mVW5roRJ0yyK3ViOjqGcibH-9VOiID2NYBfbCRbWR4tepGLkMdufS-OKhTzuK6TQePvcPGsr9L2e_vR3brdb6_JaFguwRjZT5YBkcmAL8IYtetb_22ljgNLTjNgLFWqX6WtocADBA5jwbPI5uWsEIdWqM0CUXbGuXOhLCC1I');
              "
            ></div>
            <div class="flex-1">
              <p class="text-[#121a0f] text-base font-medium leading-normal">
                Sophia Bennett
              </p>
              <p class="text-[#639155] text-sm font-normal leading-normal">
                3 months ago
              </p>
            </div>
          </div>
          <div class="flex gap-0.5">
            <div
              class="text-[#54d22d]"
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
              class="text-[#54d22d]"
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
              class="text-[#54d22d]"
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
              class="text-[#54d22d]"
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
              class="text-[#b9d2b2]"
              data-icon="Star"
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
                  d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"
                ></path>
              </svg>
            </div>
          </div>
          <p class="text-[#121a0f] text-base font-normal leading-normal">
            Great binoculars for the price. They're sturdy and provide a clear
            view, though they can be a bit heavy after a while.
          </p>
          <div class="flex gap-9 text-[#639155]">
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
              <p class="text-inherit">15</p>
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
      </div>
      <h3
        class="text-[#121a0f] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
      >
        Related Products
      </h3>
      <div
        class="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden"
      >
        <div class="flex items-stretch p-4 gap-3">
          <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCyGajkH_tECF62BAjjT8ffHZPi845GY5cIpx4ekahhaqvNUC5VNXEwFol2j2OyFIbE4H-7cwOoWRkqXc7R5pXJ33yKEhZzBQzXZLa7S4a7j7vybuYHGDPM9I8z5XvdTX-i-jcX74-kkw0cQcAXNO7uqWWfjvS2iXHF6Yq0QD9xfjvoccHwY7H5LOYEx2tjEjhT6dak_hSPqLelZw2MZWXh7tymCxLFyiXgfnkuXEyOzDSkoYX5gTG_l2Pw-GGZhCjS3qrlr-rCmP0');
              "
            ></div>
            <div>
              <p class="text-[#121a0f] text-base font-medium leading-normal">
                Field Guide to Birds
              </p>
              <p class="text-[#639155] text-sm font-normal leading-normal">
                Comprehensive guide
              </p>
            </div>
          </div>
          <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrwtcNeDUcJsbezRz6izGDlUzQlbBIq24AmI2Q9FP0lbNKfMR3GPypR4wBap_grrfx7k-0Ha5V5enC0vuAiMWFSnFVJJbJE6aN6613GOy5Tj4RpSjTC7dYIEzL8NDATgh_82wfsTq7Z-L_1UD_r3unV4XpJNQss7Gcmx1HeqnvIdU9bmxkmCkxE6gkKchC3u2VGvBhcT_ADyoWxQgfbJfDf7YDJaXxv6boB0HeKyiieXDzk75u8ih9OzQ2_Mzck_JLoAtY5v4JiQk');
              "
            ></div>
            <div>
              <p class="text-[#121a0f] text-base font-medium leading-normal">
                Bird Watching Backpack
              </p>
              <p class="text-[#639155] text-sm font-normal leading-normal">
                Comfortable and spacious
              </p>
            </div>
          </div>
          <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVM5Wo5j5Qh-eA4Kw-EC82jHFcdSM_qTnNeCcEG81dql217eTFqbp6AORydD_PFmxxg0G71bOTQNfOxzAjQGG8i7alrqlUysaeayXacMlvvI2ExVkL0CwsT_bb7aPjK-lCaDZV4UoJ4QRia4sdJjLtd8xpOQPJxYsi9HykYtPlXoVyvJfEq_qyZ6kWpVGgUib3bR33qlcrrokpQYD0zhpvbDaZ3SUMZlOwdL89qBa8P-griAc3EueJHd7UaWkwWIlEQZGehsY6bLU');
              "
            ></div>
            <div>
              <p class="text-[#121a0f] text-base font-medium leading-normal">
                Bird Watching Hat
              </p>
              <p class="text-[#639155] text-sm font-normal leading-normal">
                Protective and stylish
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex px-4 py-3">
        <button
          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#54d22d] text-[#121a0f] text-base font-bold leading-normal tracking-[0.015em]"
        >
          <span class="truncate">Add to Cart</span>
        </button>
      </div>
      <div
        class="flex gap-2 border-t border-[#ebf2e9] bg-[#f9fbf9] px-4 pb-3 pt-2"
      >
        <a
          class="just flex flex-1 flex-col items-center justify-end gap-1 text-[#639155]"
          href="#"
        >
          <div
            class="text-[#639155] flex h-8 items-center justify-center"
            data-icon="House"
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
                d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
              ></path>
            </svg>
          </div>
          <p
            class="text-[#639155] text-xs font-medium leading-normal tracking-[0.015em]"
          >
            Home
          </p>
        </a>
        <a
          class="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#121a0f]"
          href="#"
        >
          <div
            class="text-[#121a0f] flex h-8 items-center justify-center"
            data-icon="MagnifyingGlass"
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
                d="M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"
              ></path>
            </svg>
          </div>
          <p
            class="text-[#121a0f] text-xs font-medium leading-normal tracking-[0.015em]"
          >
            Shop
          </p>
        </a>
        <a
          class="just flex flex-1 flex-col items-center justify-end gap-1 text-[#639155]"
          href="#"
        >
          <div
            class="text-[#639155] flex h-8 items-center justify-center"
            data-icon="Heart"
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
                d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"
              ></path>
            </svg>
          </div>
          <p
            class="text-[#639155] text-xs font-medium leading-normal tracking-[0.015em]"
          >
            Wishlist
          </p>
        </a>
        <a
          class="just flex flex-1 flex-col items-center justify-end gap-1 text-[#639155]"
          href="#"
        >
          <div
            class="text-[#639155] flex h-8 items-center justify-center"
            data-icon="ShoppingBag"
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
                d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"
              ></path>
            </svg>
          </div>
          <p
            class="text-[#639155] text-xs font-medium leading-normal tracking-[0.015em]"
          >
            Cart
          </p>
        </a>
        <a
          class="just flex flex-1 flex-col items-center justify-end gap-1 text-[#639155]"
          href="#"
        >
          <div
            class="text-[#639155] flex h-8 items-center justify-center"
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
            class="text-[#639155] text-xs font-medium leading-normal tracking-[0.015em]"
          >
            Profile
          </p>
        </a>
      </div>
      <div class="h-5 bg-[#f9fbf9]"></div>
    </div>
  </div>
</template>
