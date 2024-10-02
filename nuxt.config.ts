// https://nuxt.com/docs/api/configuration/nuxt-config

import path from 'path';
import fs from 'fs';

const imagesDirectory = path.join(__dirname, 'assets/images');

function getPreloadLinks(
   directory: string,
): Array<{ rel: string; as: 'image'; href: string }> {
   return fs
      .readdirSync(directory)
      .filter((file: string) => /\.(png|jpe?g|gif|webp)$/.test(file))
      .map((file: string) => ({
         rel: 'preload',
         as: 'image',
         href: `/images/${file}`,
      }));
}

export default defineNuxtConfig({
   app: {
      head: {
         link: [
            {
               rel: 'preload',
               href: 'https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner:wght@400..700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap',
               as: 'style',
               onload: "this.onload=null;this.rel='stylesheet'",
            },
            {
               rel: 'stylesheet',
               href: 'https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner:wght@400..700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap',
               media: 'print',
               onload: "this.media='all'",
            },
            {
               rel: 'preload',
               as: 'image',
               href: '../assets/images/dragon-figure.webp',
            },
            ...getPreloadLinks(imagesDirectory),
         ],
         title: "Bedirhan Doğan's personal website",
         meta: [
            {
               name: 'google-site-verification',
               content: 'JqVtbTr52TN2dp72YsTmh0r17MD69XqMSo-SeU5Ve28',
            },
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
