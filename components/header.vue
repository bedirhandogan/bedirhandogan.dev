<template>
   <div class="header">
      <div class="title">
         <div class="shadow-text">前端开发人员</div>
         <div class="text">
            Frontend Developer <sup aria-label="Craftsman">工匠</sup>
         </div>
         <div class="text small-screen-size">
            Frontend Dev. <sup aria-label="Craftsman">工匠</sup>
         </div>
      </div>

      <Tooltip text="Email address for contact.">
         <a
            class="contact-button"
            href="mailto:contact@bedirhandogan.dev"
            data-mail="contact@bedirhandogan.dev"
         />
      </Tooltip>
   </div>
</template>

<style>
.header {
   position: relative;
   padding: 0 15px;
   width: 100%;
   height: 50px;
   border-top: 1px solid var(--color-border);
   border-bottom: 1px solid var(--color-border);
   background-image: url('../assets/images/header-cols-effect.webp');
   display: flex;
   gap: 50px;
   align-items: center;
   justify-content: space-between;

   .title {
      flex-shrink: 0;

      .shadow-text {
         position: absolute;
         top: 50%;
         transform: translateY(-50%);
         left: 22px;
         font-family: var(--ff-edu-qld-beginner);
         font-size: 25px;
         font-weight: 400;
         user-select: none;
         cursor: text;
         opacity: 0.1;

         @media (max-width: 768px) {
            font-size: 20px;
         }
      }

      .text {
         font-family: var(--ff-roboto-mono);
         font-size: 14px;

         @media (max-width: 768px) {
            display: none;
         }

         sup {
            font-size: 10px;
         }
      }
      .small-screen-size {
         display: none;

         @media (max-width: 768px) {
            display: block;
         }
      }
   }

   .contact-button {
      color: var(--color-gray);
      text-decoration: none;
      font-size: 14px;
      padding: 5px 10px 6px 10px;
      background-color: var(--color-white);
      border: 1px solid var(--color-border);
      border-radius: 100px;

      &::after {
         content: attr(data-mail);
      }

      @media (max-width: 768px) {
         &::after {
            content: '';
         }

         &::before {
            content: 'contact me';
         }
      }
   }
}
</style>
<script setup></script>
