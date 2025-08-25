<template>
  <div
    class="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden"
    style="font-family: 'Public Sans', 'Noto Sans', sans-serif"
  >
    <div>
      <div class="flex items-center bg-white p-4 pb-2 justify-between">
        <div
          class="text-[#111518] flex size-12 shrink-0 items-center"
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
          class="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12"
        >
          Our Services
        </h2>
      </div>
      <h2
        class="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
      >
        Repair Services
      </h2>
      <div class="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
        <div
          class="text-[#111518] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-12"
          data-icon="ThermometerCold"
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
              d="M248.91,77.72l-20,6.49,12.34,17a8,8,0,1,1-12.94,9.4L216,93.61l-12.34,17a8,8,0,0,1-12.94-9.4l12.34-17-20-6.49A8,8,0,0,1,188,62.5L208,69V48a8,8,0,0,1,16,0V69l20-6.49a8,8,0,0,1,4.95,15.22ZM152,184a32,32,0,1,1-40-31V120a8,8,0,0,1,16,0v33A32.06,32.06,0,0,1,152,184Zm-16,0a16,16,0,1,0-16,16A16,16,0,0,0,136,184Zm48,0A64,64,0,1,1,80,134V48a40,40,0,0,1,80,0v86A64.08,64.08,0,0,1,184,184Zm-16,0a48.08,48.08,0,0,0-20.58-39.4A8,8,0,0,1,144,138V48a24,24,0,0,0-48,0v90a8,8,0,0,1-3.42,6.56A48,48,0,1,0,168,184Z"
            ></path>
          </svg>
        </div>
        <div class="flex flex-col justify-center">
          <p
            class="text-[#111518] text-base font-medium leading-normal line-clamp-1"
          >
            Appliance Repair
          </p>
          <p
            class="text-[#60778a] text-sm font-normal leading-normal line-clamp-2"
          >
            Covers refrigerators, ovens, washers, dryers, and more.
          </p>
        </div>
      </div>
      <div class="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
        <div
          class="text-[#111518] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-12"
          data-icon="Television"
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
              d="M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM40,80H144V200H40ZM216,200H160V80h56V200Zm-16-84a12,12,0,1,1-12-12A12,12,0,0,1,200,116Zm0,48a12,12,0,1,1-12-12A12,12,0,0,1,200,164Z"
            ></path>
          </svg>
        </div>
        <div class="flex flex-col justify-center">
          <p
            class="text-[#111518] text-base font-medium leading-normal line-clamp-1"
          >
            Electronics Repair
          </p>
          <p
            class="text-[#60778a] text-sm font-normal leading-normal line-clamp-2"
          >
            Includes TVs, audio systems, gaming consoles, and other gadgets.
          </p>
        </div>
      </div>
      <div class="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
        <div
          class="text-[#111518] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-12"
          data-icon="Fan"
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
              d="M233,135a60,60,0,0,0-89.62-35.45l16.39-65.44a8,8,0,0,0-3.45-8.68A60,60,0,1,0,95.69,128.91L30.82,147.44a8,8,0,0,0-5.8,7.32,60,60,0,0,0,44.42,60.66,60.52,60.52,0,0,0,15.62,2.07,60.07,60.07,0,0,0,59.88-62l48.48,46.92a8,8,0,0,0,9.25,1.35A60,60,0,0,0,233,135Zm-121-7a16,16,0,1,1,16,16A16,16,0,0,1,112,128ZM80,76a44,44,0,0,1,62.75-39.82L127.77,96A32,32,0,0,0,99.85,112.8,43.85,43.85,0,0,1,80,76Zm27,119.57a44,44,0,0,1-65.86-34.43l59.31-16.94A32,32,0,0,0,128,160l.91,0A43.82,43.82,0,0,1,107,195.57Zm106.17-23a43.92,43.92,0,0,1-13,14.14l-44.32-42.89a31.91,31.91,0,0,0-.59-32.57,44,44,0,0,1,57.91,61.32Z"
            ></path>
          </svg>
        </div>
        <div class="flex flex-col justify-center">
          <p
            class="text-[#111518] text-base font-medium leading-normal line-clamp-1"
          >
            HVAC Repair
          </p>
          <p
            class="text-[#60778a] text-sm font-normal leading-normal line-clamp-2"
          >
            Specializes in air conditioners, heaters, and ventilation systems.
          </p>
        </div>
      </div>
      <div class="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
        <div
          class="text-[#111518] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-12"
          data-icon="Toilet"
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
              d="M120,64a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h16A8,8,0,0,1,120,64Zm52.32,133.14,3.52,24.6A16,16,0,0,1,160,240H96a16,16,0,0,1-15.84-18.26l3.52-24.6A96.09,96.09,0,0,1,32,112a8,8,0,0,1,8-8H56V40A16,16,0,0,1,72,24H184a16,16,0,0,1,16,16v64h16a8,8,0,0,1,8,8A96.09,96.09,0,0,1,172.32,197.14ZM72,104H184V40H72Zm85.07,99.5a96.15,96.15,0,0,1-58.14,0L96,224h64ZM207.6,120H48.4a80,80,0,0,0,159.2,0Z"
            ></path>
          </svg>
        </div>
        <div class="flex flex-col justify-center">
          <p
            class="text-[#111518] text-base font-medium leading-normal line-clamp-1"
          >
            Plumbing Services
          </p>
          <p
            class="text-[#60778a] text-sm font-normal leading-normal line-clamp-2"
          >
            Handles plumbing issues in appliances and home systems.
          </p>
        </div>
      </div>
      <div class="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
        <div
          class="text-[#111518] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-12"
          data-icon="Lightning"
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
              d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"
            ></path>
          </svg>
        </div>
        <div class="flex flex-col justify-center">
          <p
            class="text-[#111518] text-base font-medium leading-normal line-clamp-1"
          >
            Electrical Services
          </p>
          <p
            class="text-[#60778a] text-sm font-normal leading-normal line-clamp-2"
          >
            Deals with electrical wiring, lighting, and power systems.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
