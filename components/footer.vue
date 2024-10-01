<template>
   <div class="footer">
      <div class="effort-insight">
         Does hard work lead to success, or does it create more
         <span>problems</span>?
      </div>
      <div class="copyright">Copyright &copy; 2024 Bedirhan Doğan</div>
   </div>
</template>

<style>
.footer {
   position: absolute;
   bottom: 0;
   padding: 15px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
   gap: 15px;
   font-family: var(--ff-edu-qld-beginner);

   @media (max-height: 700px), (max-width: 770px) {
      position: relative;
      margin-top: 10px;
   }

   .effort-insight {
      font-size: 15px;

      span {
         text-decoration: line-through;
      }
   }

   .copyright {
      font-size: 13px;
   }
}
</style>
