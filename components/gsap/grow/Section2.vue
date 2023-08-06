<template>
  <section
    class="h-[50rem] md:h-[37.5rem] bg-black border-t border-gray-500 flex flex-col md:flex-row"
  >
    <div
      class="md:w-2/5 h-full border-b md:border-b-0 md:border-r border-gray-500 px-6 md:px-24 py-20 md:py-32 flex flex-col justify-between"
    >
      <p class="text-white font-medium text-4xl md:text-6xl">{{ `<Dev />` }}</p>
      <p class="text-green-500 text-5xl md:text-7xl font-medium leading-10">
        Your grow<br />starts here<span class="animate-blink">_</span>
      </p>
    </div>
    <div class="md:w-3/5 h-full px-6 md:px-24 py-20 md:py-32">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/c2sNTAaILdA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>
  </section>
</template>
