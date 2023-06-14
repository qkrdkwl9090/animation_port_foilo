<script setup>
const { $gsap } = useNuxtApp()
onMounted(() => {
  $gsap.registerPlugin($gsap.scrollTrigger)

  const containers = document.querySelectorAll('.wrap-container')

  $gsap.utils.toArray('.wrap-container').forEach((container) => {
    const rvimg = container.querySelector('.reveal-img')
    const rvtext = container.querySelector('.reveal-text')
    const image = container.querySelector('img')

    const timeline = $gsap.timeline({
      defaults: { duration: 2, ease: 'slow' },
      scrollTrigger: {
        trigger: container,
        start: 'top center',
      },
    })
    timeline
      .to(rvimg, { xPercent: -100 })
      .to(rvtext, { xPercent: 100, ease: 'power2.inOut' }, '-=2')
      .fromTo(image, { scale: 2 }, { scale: 1 }, 0.3)
  })
})
</script>

<template>
  <div class="root">
    <div class="container">
      <div class="wrap-container">
        <div class="img-wrapper">
          <img src="@\assets\imgs\gsap\1\1-1.webp" alt="" />
          <div class="reveal-img"></div>
        </div>
        <div class="content">
          <div class="content-desc">
            <h2>Shoreline Solitude</h2>
          </div>
          <p>
            Sunlight dances on the tide, the song of the sea whispering tales.
            The beauty of life unfolds at the calm, serene shore.
          </p>
          <button>Explore</button>
          <div class="reveal-text"></div>
        </div>
      </div>
      <div class="wrap-container">
        <div class="img-wrapper">
          <img src="@\assets\imgs\gsap\1\1-2.webp" alt="" />
          <div class="reveal-img"></div>
        </div>
        <div class="content">
          <div class="content-desc">
            <h2>Galactic Echoes</h2>
          </div>
          <p>
            Night unfurls its mystic veil, revealing the Milky Way above the
            sea. An eternal dance of celestial bodies, whispering the cosmos'
            secret.
          </p>
          <button>Explore</button>
          <div class="reveal-text"></div>
        </div>
      </div>
      <div class="wrap-container">
        <div class="img-wrapper">
          <img src="@\assets\imgs\gsap\1\1-3.webp" alt="" />
          <div class="reveal-img"></div>
        </div>
        <div class="content">
          <div class="content-desc">
            <h2>Valley Whispers</h2>
          </div>
          <p>
            Amidst the emerald embrace, a valley unfolds. The river babbles,
            weaving stories of old. Nature’s serene symphony plays in this
            secluded theater.
          </p>
          <button>Explore</button>
          <div class="reveal-text"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

$primary: #101111;
$secondary: #fff;

.root {
  padding: 2% 10%;
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif;
  background-color: $primary;
  color: $secondary;
  line-height: 1.6;
}

h2 {
  margin-bottom: 20px;
}

p {
  margin-bottom: 30px;
}

button {
  background: #fff;
  padding: 10px 20px;
  border: 0;
  text-transform: uppercase;
  color: $primary;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.wrap-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
}

.img-wrapper {
  position: relative;
  overflow: hidden;
}

.reveal-text,
.reveal-img {
  background-color: #101111;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
}
</style>
