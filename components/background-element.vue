<script>
export default {
   props: {
      type: {
         type: String,
         required: true,
      },
   },
};
</script>

<template>
   <div class="text" v-if="type === 'text'">
      <span>Merhaba Dünya</span> • <span>你好世界</span> •
      <span>Hello World</span> • <span>Hola Mundo</span>
   </div>
   <div class="figure" v-if="type === 'figure'">
      <img
         src="../assets/images/dragon-figure.webp"
         width="268"
         height="517"
         alt="dragon figure"
      />
   </div>
</template>

<style scoped>
.text {
   width: 880px;
   position: fixed;
   left: 50%;
   transform: translateX(-50%);
   font-size: 1.55rem;
   user-select: none;
   cursor: default;
   font-family: var(--ff-roboto-serif);
   opacity: 0.1;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 15px 0 30px 0;
   gap: 20px;
   z-index: 1;

   @media (max-width: 910px) {
      font-size: 1.35rem;
      width: 780px;
   }

   @media (max-width: 768px) {
      font-size: 1.15rem;
      width: 680px;
   }
}

.figure {
   position: absolute;
   top: 50%;
   right: calc(-268px / 2);
   transform: translateY(-50%);
   user-select: none;

   @media (max-width: 1024px) {
      position: fixed;
   }

   img {
      @media (max-width: 768px) {
         height: 450px;
      }
   }
}
</style>
