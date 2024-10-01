<script setup>
const props = defineProps({
   text: {
      type: String,
      required: true,
   },
   arrow: {
      type: Boolean,
      default: true,
   },
});
</script>

<template>
   <div class="tooltip">
      <slot />
      <div class="tooltip-text">
         <div v-if="arrow" class="arrow" />
         {{ props.text }}
      </div>
   </div>
</template>

<style>
.tooltip {
   height: min-content;
   display: flex;
   position: relative;
   align-items: center;
   flex-direction: column;
   cursor: default;

   &:hover .tooltip-text {
      @media (min-width: 1024px) {
         display: block;
      }
   }

   .tooltip-text {
      display: none;
      transition: opacity 0.3s;
      width: max-content;
      font-size: 12px;
      position: absolute;
      top: 100%;
      transform: translateY(15px);
      padding: 5px 10px;
      background-color: var(--color-white);
      border: 1px solid var(--color-border);
      color: rgba(95, 95, 95, 0.75);
      font-family: var(--ff-roboto-mono);

      .arrow {
         width: 13px;
         height: 13px;
         background-color: var(--color-white);
         border-top: 1px solid var(--color-border);
         border-left: 1px solid var(--color-border);
         position: absolute;
         top: calc(-15px / 2 + 1px);
         left: 50%;
         transform: translateX(-50%) rotate(45deg);
      }
   }
}
</style>
