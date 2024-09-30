<template>
   <div class="introduction">
      <h4 class="title">Introduction</h4>
      <p class="paragraph">
         Hi, I'm Bedirhan. I'm 21 years old and I got acquainted with the world
         of programming when I was 12. My interest in drawings eventually
         triggered my interest in front-end development and this hobby
         eventually turned into my job. I'm currently creating user-friendly and
         aesthetic web applications by combining design and coding.
      </p>

      <div class="socials">
         <a
            >Github
            <img
               alt="link external"
               src="../assets/images/link-external-icon.svg"
            />
         </a>
         <a
            >Linkedin
            <img
               alt="link external"
               src="../assets/images/link-external-icon.svg"
            />
         </a>
         <a
            >Twitter
            <img
               alt="link external"
               src="../assets/images/link-external-icon.svg"
            />
         </a>
      </div>
   </div>
</template>

<style>
.introduction {
   padding: 30px 15px 15px 15px;
   display: flex;
   flex-direction: column;
   gap: 10px;

   .title {
      margin: 0;
      font-family: var(--ff-edu-qld-beginner);
      text-decoration: line-through;
      text-decoration-thickness: 1px;
      font-weight: 600;

      @media (max-width: 425px) {
         font-size: 0.88rem;
      }
   }

   .paragraph {
      margin: 0;
      font-family: var(--ff-edu-qld-beginner);
      font-size: 1rem;
      font-weight: 430;

      @media (max-width: 425px) {
         font-size: 0.88rem;
      }
   }

   .socials {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 10px;

      a {
         font-family: var(--ff-roboto-serif);
         font-size: 0.75rem;
         display: flex;
         align-items: center;
         gap: 7px;
         padding: 7px;
         cursor: pointer;
         border: 1px solid var(--color-border);
         transition: all 200ms;

         @media (max-width: 425px) {
            font-size: 0.68rem;
         }

         &:hover {
            background-color: var(--color-border);
         }

         &:nth-of-type(1) {
            background-color: var(--color-border);

            &:hover {
               background-color: transparent;
            }
         }

         img {
            width: 14px;
            height: 14px;
            user-select: none;
         }
      }
   }
}
</style>
