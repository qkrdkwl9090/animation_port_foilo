<script setup lang="ts">
const isOpen = ref(false)
const menuOver = ref(false)
const menuList = {
  program: ['소개', '커리큘럼', '취업연계', 'FAQ'],
  apply: ['모집안내', '지원하기'],
  news: ['공지사항', '새소식'],
}
</script>
<template>
  <div class="bg-black absolute top-0 left-0 w-full z-50">
    <header
      class="px-5 md:px-10 h-[4.0625rem] md:h-[5.625rem] flex items-center justify-between border-b border-gray-500"
    >
      <div class="text-green-500 flex gap-4 items-center">
        <i class="pi pi-comments" style="font-size: 32px" />
        <h1 class="font-bold text-3xl md:text-5xl">Grow</h1>
      </div>
      <div class="hidden xl:flex text-white text-lg h-full">
        <div
          v-for="(value, key) in menuList"
          :key="key"
          @mouseenter="() => (menuOver = true)"
          @mouseleave="() => (menuOver = false)"
          class="h-full flex items-center px-10 border-green-500 hover:border-b"
        >
          {{ key.toUpperCase() }}
        </div>
      </div>
      <nav class="hidden xl:flex gap-4 items-center ml-[6.375rem]">
        <NuxtLink to="#" class="text-green-500">Home</NuxtLink>
        <NuxtLink to="#" class="text-gray-500">About</NuxtLink>
      </nav>
      <button
        class="text-white relative w-8 h-8 md:w-[2.25rem] xl:hidden"
        @click="() => (isOpen = true)"
      >
        <i class="pi pi-bars header__menu-icon" />
      </button>
    </header>
    <!-- pc Menu -->
    <div
      :class="menuOver ? 'opacity-100' : 'opacity-0'"
      class="absolute top-[5.625rem] left-0 | text-white bg-black w-full transition-opacity duration-300"
    >
      <section class="py-6 flex items-start justify-center">
        <nav
          class="h-full flex flex-col gap-4 items-center justify-start border-gray-300 [&+&]:border-l"
          v-for="(value, key) in menuList"
          @mouseenter="() => (menuOver = true)"
          @mouseleave="() => (menuOver = false)"
          :key="key"
        >
          <NuxtLink
            to="#"
            class="text-white hover:text-green-500 px-10"
            v-for="item of value"
            :key="item"
            >{{ item }}</NuxtLink
          >
        </nav>
      </section>
    </div>
    <!-- Mobile Menu -->
    <div
      :class="isOpen ? 'opacity-100' : 'opacity-0'"
      class="absolute top-0 left-0 | block xl:hidden h-screen text-white bg-black w-full transition-opacity duration-300"
    >
      <section
        class="px-5 md:px-10 h-[4.0625rem] md:h-[5.625rem] flex items-center justify-between border-b border-gray-500"
      >
        <nav class="flex gap-4 items-center text-xl">
          <NuxtLink to="#" class="text-green-500">Home</NuxtLink>
          <NuxtLink to="#" class="text-gray-500">About</NuxtLink>
        </nav>
        <button
          class="text-white relative w-8 h-8 md:w-[2.25rem] xl:hidden"
          @click="() => (isOpen = !isOpen)"
        >
          <i class="pi pi-times header__menu-icon" />
        </button>
      </section>
      <section class="px-5 md:px-10 py-10">
        <div v-for="(value, key) in menuList" :key="key" class="[&+&]:mt-10">
          <h2 class="text-2xl md:text-3xl font-bold text-green-500">
            {{ key.toUpperCase() }}
          </h2>
          <nav class="mt-6 text-xl flex gap-10">
            <NuxtLink
              v-for="item in value"
              :key="item"
              to="#"
              class="text-xl md:text-2xl hover:font-bold"
              >{{ item }}
            </NuxtLink>
          </nav>
        </div>
      </section>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header__menu-icon {
  @apply absolute top-0 right-0 transition-opacity duration-300 text-[2rem];
}
</style>
