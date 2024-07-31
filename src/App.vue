<template>
  <div id="app" class="min-h-screen" >
    <div>
      <home-page></home-page>
    </div>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>
