<template>
   <div class="loader">
      <div class="loader-animation">
         <span>加载中</span>
         <span>加载中</span>
         <span>加载中</span>
      </div>
   </div>
</template>

<style>
.loader {
   position: absolute;
   left: 0;
   right: 0;
   width: 100%;
   height: 100vh;
   background-color: var(--color-white);
   background-image: url('../assets/images/noise.png');
   background-size: contain;
   z-index: 99;
   display: flex;
   align-items: center;
   justify-content: center;
}

.loader .loader-animation {
   display: flex;
   flex-direction: column;
   font-size: 18px;

   @media (max-width: 768px) {
      font-size: 14px;
   }
}

.loader .loader-animation span {
   animation: loader-animation 1s ease-in infinite;
   animation-direction: alternate;
}

.loader .loader-animation span:nth-child(2) {
   animation-delay: 100ms;
}

.loader .loader-animation span:nth-child(3) {
   animation-delay: 200ms;
}

@keyframes loader-animation {
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
}
</style>
