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
        <h2
          class="text-[#121a0f] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12"
        >
          Profile
        </h2>
      </div>
      <div class="flex p-4 @container">
        <div class="flex w-full flex-col gap-4 items-center">
          <div class="flex gap-4 flex-col items-center">
            <div
              class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJW6Tx-jaBLfNTbx9WKLZG_48JxLdbRB9BLgkI5ZeyHiW9yicf0uJYnzRFsqWCXxtsStpuR1W-zkLJM8o34r-W8kpvBjiFr2TXz6CemzchEEdl2IHpxWciiIPulxp_OZqxKzlDeDQc88j9CClMCAWah1bQkozWyhggfPKWgwwGfng3vvk6iK7F82PrTh98qJMoayjknTpAQhQqv6Ny5yoxxJleOVCGTIlB3dGl0Qm9D654D0Xq9LmpBNv0dXhUyVyBkon3oqFTPJo');
              "
            ></div>
            <div
              class="flex flex-col items-center justify-center justify-center"
            >
              <p
                class="text-[#121a0f] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center"
              >
                Ethan Carter
              </p>
              <p
                class="text-[#639155] text-base font-normal leading-normal text-center"
              >
                Member since 2021
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3
        class="text-[#121a0f] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
      >
        Account
      </h3>
      <div class="flex items-center gap-4 bg-[#f9fbf9] px-4 min-h-[72px] py-2">
        <div
          class="text-[#121a0f] flex items-center justify-center rounded-lg bg-[#ebf2e9] shrink-0 size-12"
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
        <div class="flex flex-col justify-center">
          <p
            class="text-[#121a0f] text-base font-medium leading-normal line-clamp-1"
          >
            Contact Information
          </p>
          <p
            class="text-[#639155] text-sm font-normal leading-normal line-clamp-2"
          >
            ethan.carter@email.com
          </p>
        </div>
      </div>
      <div class="flex items-center gap-4 bg-[#f9fbf9] px-4 min-h-[72px] py-2">
        <div
          class="text-[#121a0f] flex items-center justify-center rounded-lg bg-[#ebf2e9] shrink-0 size-12"
          data-icon="MapPin"
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
              d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
            ></path>
          </svg>
        </div>
        <div class="flex flex-col justify-center">
          <p
            class="text-[#121a0f] text-base font-medium leading-normal line-clamp-1"
          >
            Shipping Address
          </p>
          <p
            class="text-[#639155] text-sm font-normal leading-normal line-clamp-2"
          >
            234 Oak Street, Anytown, USA
          </p>
        </div>
      </div>
      <h3
        class="text-[#121a0f] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
      >
        Orders
      </h3>
      <div class="flex items-center gap-4 bg-[#f9fbf9] px-4 min-h-[72px] py-2">
        <div
          class="text-[#121a0f] flex items-center justify-center rounded-lg bg-[#ebf2e9] shrink-0 size-12"
          data-icon="Package"
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
              d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"
            ></path>
          </svg>
        </div>
        <div class="flex flex-col justify-center">
          <p
            class="text-[#121a0f] text-base font-medium leading-normal line-clamp-1"
          >
            Order History
          </p>
          <p
            class="text-[#639155] text-sm font-normal leading-normal line-clamp-2"
          >
            Order #1234567890 · 03/15/2024
          </p>
        </div>
      </div>
      <div class="flex items-center gap-4 bg-[#f9fbf9] px-4 min-h-14">
        <div
          class="text-[#121a0f] flex items-center justify-center rounded-lg bg-[#ebf2e9] shrink-0 size-10"
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
          class="text-[#121a0f] text-base font-normal leading-normal flex-1 truncate"
        >
          Wishlist
        </p>
      </div>
      <h3
        class="text-[#121a0f] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
      >
        Settings
      </h3>
      <div class="flex items-center gap-4 bg-[#f9fbf9] px-4 min-h-14">
        <div
          class="text-[#121a0f] flex items-center justify-center rounded-lg bg-[#ebf2e9] shrink-0 size-10"
          data-icon="Bell"
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
              d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
            ></path>
          </svg>
        </div>
        <p
          class="text-[#121a0f] text-base font-normal leading-normal flex-1 truncate"
        >
          Notifications
        </p>
      </div>
      <div class="flex items-center gap-4 bg-[#f9fbf9] px-4 min-h-14">
        <div
          class="text-[#121a0f] flex items-center justify-center rounded-lg bg-[#ebf2e9] shrink-0 size-10"
          data-icon="Lock"
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
              d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"
            ></path>
          </svg>
        </div>
        <p
          class="text-[#121a0f] text-base font-normal leading-normal flex-1 truncate"
        >
          Change Password
        </p>
      </div>
    </div>
    <div>
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
          class="just flex flex-1 flex-col items-center justify-end gap-1 text-[#639155]"
          href="#"
        >
          <div
            class="text-[#639155] flex h-8 items-center justify-center"
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
          <p
            class="text-[#639155] text-xs font-medium leading-normal tracking-[0.015em]"
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
            data-icon="ShoppingCart"
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
                d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"
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
          class="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#121a0f]"
          href="#"
        >
          <div
            class="text-[#121a0f] flex h-8 items-center justify-center"
            data-icon="User"
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
                d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"
              ></path>
            </svg>
          </div>
          <p
            class="text-[#121a0f] text-xs font-medium leading-normal tracking-[0.015em]"
          >
            Profile
          </p>
        </a>
      </div>
      <div class="h-5 bg-[#f9fbf9]"></div>
    </div>
  </div>
</template>
