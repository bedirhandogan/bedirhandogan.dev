<script setup>
import '@/assets/styles.css';

const showLoadingScreen = ref(true);

onMounted(() => {
   setTimeout(() => {
      showLoadingScreen.value = false;
   }, 500);
});
</script>

<template>
   <Loader v-if="showLoadingScreen" />
   <div id="app">
      <Header />
      <Introduction />
      <BackgroundElement type="text" />
      <BackgroundElement type="figure" />
      <Works />
      <Footer />
   </div>
</template>
