<template>
  <section class="main__container w-full min-h-screen py-16 px-32">
    <article>
      <h3>GSAP</h3>
      <div class="mt-4">
        <div class="card__container" @click="navigateTo({ path: '/gsap/1' })">
          <img src="@\assets\imgs\main\gsap-1.png" alt="" />
        </div>
      </div>
    </article>
  </section>
</template>
<style lang="scss" scoped>
.main__container {
  background-color: #bcaaa4;
}
h3 {
  @apply text-2xl font-bold text-[#5D4037];
}
.card__container {
  @apply w-96 cursor-pointer;
  & > img {
    @apply rounded-2xl grayscale;
    box-shadow: rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
      inset rgba(white, 0.5) 0 0 0 6px;
    &:hover {
      @apply grayscale-0;
      box-shadow: rgba(white, 0.2) 0 0 40px 5px, rgba(white, 1) 0 0 0 2px,
        rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }
}
</style>
