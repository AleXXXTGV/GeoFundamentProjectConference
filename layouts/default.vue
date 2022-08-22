<template>
    <div class="flex flex-col xl:flex-row relative">
        <Navbar />
        <Nuxt class="pt-[90px] xl:pt-0"/>
    </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
    export default {
    components: { Navbar }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');
    .container {
  width: 90%;
  margin: 0 auto;
}
body {
    font-family: 'Raleway', sans-serif;
}
</style>