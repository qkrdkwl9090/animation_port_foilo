<template>
  <section
    class="w-screen h-[700px] md:h-screen relative bg-black text-white pt-[5.625rem] md:pt-[7.5rem] px-6 md:px-10"
  >
    <div class="md:pl-10 text-xl md:text-2xl">
      const <span class="text-green-500">dev</span> = (effort) => {
      <div class="pl-10">
        if(!effort) return null;<br />
        let value = null;<br />
        value += <span class="text-green-500">effort</span>;<br />return value;
      </div>
      }
    </div>
    <div class="mt-20 md:pl-20 text-4xl md:text-6xl text-green-500">
      """<br />
      Development, in all its forms,<br />
      demands dedicated and<br />
      relentless effort.<br />"""
    </div>
    <div class="absolute flex items-center bottom-10 left-6 md:left-10">
      <i class="pi pi-arrow-down mr-4 animate-bounce" style="font-size: 30px" />
      <span class="text-xl font-bold"
        >Welcome_to_<span class="text-green-500">GROW</span></span
      >
    </div>
  </section>
</template>
