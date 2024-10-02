// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
      head: {
         title: "Bedirhan Doğan's personal website",
         meta: [
            {
               property: 'og:title',
               content: "Bedirhan Doğan's personal website",
            },
            {
               property: 'og:description',
               content:
                  "Hi, I'm Bedirhan. I'm 21 years old and I got acquainted with the world of programming when I was 12. My interest in drawings eventually triggered my interest in front-end development and this hobby eventually turned into my job. I'm currently creating user-friendly and aesthetic web applications by combining design and coding.",
            },
            {
               property: 'og:image',
               content: 'https://bedirhandogan.dev/og-image.png',
            },
            {
               property: 'og:url',
               content: 'https://bedirhandogan.dev',
            },
            {
               property: 'og:type',
               content: 'website',
            },
            {
               name: 'keywords',
               content:
                  'Bedirhan Doğan, Bedirhan, Doğan, personal website, personal, website, portfolio, blog, software, developer, software developer, software engineer, engineer, developer, programmer, programming, coding, code, software development, web development, web developer, web, development, developer, software, engineer, software engineer, software developer, developer, programmer, programming, coding, code, software development, web development, web developer, web, development, developer, software, engineer, software engineer, software developer, developer, programmer, programming, coding, code, software development, web development, web developer, web, development, developer, software, engineer, software engineer, software developer, developer, programmer, programming, coding, code, software development, web development, web developer, web, development, developer',
            },
            {
               name: 'description',
               content:
                  "Hi, I'm Bedirhan. I'm 21 years old and I got acquainted with the world of programming when I was 12. My interest in drawings eventually triggered my interest in front-end development and this hobby eventually turned into my job. I'm currently creating user-friendly and aesthetic web applications by combining design and coding.",
            },
            {
               name: 'author',
               content: 'Bedirhan Doğan',
            },
         ],
      },
   },

   devtools: {
      enabled: true,
   },

   compatibilityDate: '2024-09-29',
});
