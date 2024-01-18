<script setup lang="ts">
type Item = {
  title: string
  path: string
  image: string
}
const list: Array<Item> = [
  {
    title: 'GSAP Animation 1',
    path: '/gsap/1',
    image: '/nuxt3-portfoilo/img/main/1.webp',
  },
  {
    title: 'GROW',
    path: '/gsap/2',
    image: '/nuxt3-portfoilo/img/main/2.webp',
  },
]
</script>
<template>
  <section class="flex flex-col gap-[.625rem]">
    <div
      v-for="item of list"
      :key="item.title"
      class="w-screen relative [&>a>p]:hover:opacity-100"
    >
      <NuxtLink :to="item.path">
        <img
          :src="item.image"
          alt=""
          class="w-full md:h-[450px] object-cover object-top"
        />
        <p
          class="absolute top-12 right-12 text-white text-md md:text-2xl font-bold opacity-0 transition-opacity duration-300"
        >
          {{ item.title }}
        </p>
      </NuxtLink>
    </div>
  </section>
</template>
