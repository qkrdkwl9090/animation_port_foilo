<template>
  <section
    class="h-[56.25rem] md:h-[37.5rem] bg-black border-t border-gray-500 flex flex-col md:flex-row wrap-container"
  >
    <div
      class="md:w-2/5 h-full border-b md:border-r border-gray-500 px-6 md:px-24 py-20 md:py-32 flex flex-col justify-between"
    >
      <img
        class="w-full h-full object-contain reveal"
        src="@/assets/imgs/gsap/2/grow-cat.webp"
        alt=""
      />
    </div>
    <div class="md:w-3/5 h-full px-6 md:px-24 py-20 md:py-32 text-white">
      <div class="reveal flex flex-col justify-between h-full">
        <p class="font-medium text-4xl md:text-6xl">{{ `<Program />` }}</p>
        <p class="md:text-xl">
          This program provides professional growth programs<br />
          and opportunities to communicate and learn from current people<br />
          so that you can become a developer.
        </p>
      </div>
    </div>
  </section>
</template>
