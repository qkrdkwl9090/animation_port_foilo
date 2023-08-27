<script setup>
const { $gsap } = useNuxtApp()
const gsapEffect = () => {
  $gsap.registerPlugin($gsap.scrollTrigger)
  $gsap.utils.toArray('.wrap-container').forEach((container) => {
    const reveals = container.querySelectorAll('.reveal')
    const timeline = $gsap.timeline({
      defaults: { duration: 1, ease: 'fast' },
      scrollTrigger: {
        trigger: container,
        start: 'top center',
      },
    })
    timeline.to(reveals, { y: 0, ease: 'power2.out', opacity: 1 })
  })
}
onMounted(() => {
  gsapEffect()
})
</script>

<template>
  <GsapGrowHeader />
  <section>
    <GsapGrowSection1 />
    <GsapGrowSection2 />
    <LazyGsapGrowSection3 />
  </section>
</template>
<style lang="scss">
.reveal {
  opacity: 0%;
  transform: translateY(50px);
}
</style>
