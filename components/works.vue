<script setup>
import Tooltip from './tooltip.vue';

const pageIndex = ref(1);
const works = ref([]);

// Pads the works array to ensure its length is a multiple of 3 by adding empty objects.
function padWorks(works) {
   const remainder = works.length % 3;
   if (remainder !== 0) {
      for (let i = 0; i < 3 - remainder; i++) {
         works.push({});
      }
   }
}

// Fetches the user's repositories from GitHub and pads the works array.
const fetchWorks = async () => {
   const username = 'bedirhandogan';
   const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
   );
   works.value = await response.json();
   padWorks(works.value);
};

// Returns the works for the current page based on the pageIndex.
function getWorksForPage() {
   return works.value.slice(3 * pageIndex.value - 3, 3 * pageIndex.value);
}

// Calculates the maximum page index based on the length of the works array.
function calculateMaxPageIndex() {
   return Math.ceil(works.value.length / 3);
}

// Shortens the language name based on a predefined mapping.
function shortenLanguageName(language) {
   const languageMap = {
      TypeScript: 'TS',
      JavaScript: 'JS',
      // Add more mappings as needed
   };

   return languageMap[language] || language;
}

// Formats a date string into a more readable format.
function formatDate(date, shortenMonth = false) {
   const formattedDate = new Date(date).toLocaleDateString('en-US', {
      month: shortenMonth ? 'short' : 'long',
      day: 'numeric',
      year: 'numeric',
   });

   return formattedDate;
}

// Increments the pageIndex if it is not the last page.
function next() {
   if (pageIndex.value !== calculateMaxPageIndex()) {
      pageIndex.value++;
   }
}

// Decrements the pageIndex if it is not the first page.
function previous() {
   if (pageIndex.value !== 1) {
      pageIndex.value--;
   }
}

onMounted(() => {
   fetchWorks();
});
</script>

<template>
   <div class="works">
      <div v-for="item in getWorksForPage()" class="work" :key="item.id">
         <div v-if="item.id !== undefined" class="header">
            <div class="name">
               <img src="../assets/images/github-logo.svg" alt="github logo" />
               <Tooltip text="View on GitHub">
                  <a :href="item.html_url" target="_blank">{{ item.name }}</a>
               </Tooltip>
            </div>

            <Tooltip text="Last update & primary language used.">
               <div class="meta">
                  <div class="updated-date">
                     {{ formatDate(item.updated_at, true) }}
                  </div>
                  •
                  <div class="other">
                     {{ shortenLanguageName(item.language) }}
                  </div>
               </div>
            </Tooltip>
         </div>
         <p v-if="item.id !== undefined" class="description">
            {{ item.description }}
         </p>
         <div v-if="item.id !== undefined" class="stats">
            <div class="stat">
               <img src="../assets/images/star-icon.svg" alt="star icon" /><span
                  >{{ item.stargazers_count }} stars</span
               >
            </div>
            <div class="stat">
               <img src="../assets/images/eye-icon.svg" alt="eye icon" /><span
                  >{{ item.watchers_count }} watchers</span
               >
            </div>
            <div class="stat">
               <img
                  src="../assets/images/repo-forked-icon.svg"
                  alt="repo forked icon"
               /><span>{{ item.forks_count }} forks</span>
            </div>
         </div>
      </div>

      <div class="pagination">
         <Tooltip text="Previous page">
            <div
               class="button"
               @click="previous"
               :style="{
                  opacity: pageIndex === 1 ? 0.5 : 1,
                  pointerEvents: pageIndex === 1 ? 'none' : 'auto',
               }"
            >
               <- Previous
            </div>
         </Tooltip>
         <div class="indicator">
            {{ pageIndex }} <span>/ {{ Math.ceil(works.length / 3) }}</span>
         </div>
         <Tooltip text="Next page">
            <div
               class="button"
               @click="next"
               :style="{
                  opacity: pageIndex === calculateMaxPageIndex() ? 0.5 : 1,
                  pointerEvents:
                     pageIndex === calculateMaxPageIndex() ? 'none' : 'auto',
               }"
            >
               Next ->
            </div>
         </Tooltip>
      </div>
   </div>
</template>

<style>
.works {
   position: relative;
   width: 100%;
   padding: 15px;
   display: flex;
   gap: 15px;
   margin-top: 65px;
   align-items: flex-start;
   flex-wrap: wrap;

   .work {
      width: calc((100% - 15px) / 2);
      height: 135px;
      border: 1px dashed var(--color-border);
      padding: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 15px;

      @media (max-width: 768px) {
         width: 100%;
      }

      .header {
         all: unset; /* previous styles are removed */
         display: flex;
         justify-content: space-between;
         align-items: center;
         font-family: var(--ff-roboto-mono);
         z-index: 1;

         .name {
            font-size: 15px;
            display: flex;
            align-items: center;
            gap: 10px;

            a {
               color: var(--color-gray);
               text-decoration: none;
               white-space: nowrap;
               overflow: hidden;
               text-overflow: ellipsis;
               max-width: 120px;

               &:hover {
                  text-decoration: underline;
               }
            }

            img {
               width: 24px;
               height: 24px;
            }
         }

         .meta {
            font-size: 12px;
            opacity: 0.5;
            display: flex;
            align-items: center;
            gap: 8px;
         }
      }

      .description {
         min-height: 32px;
         margin: 0;
         font-family: var(--ff-roboto-mono);
         font-size: 12px;
         overflow: hidden;
         text-overflow: ellipsis;
         display: -webkit-box;
         -webkit-box-orient: vertical;
         -webkit-line-clamp: 2;
         opacity: 0.75;
      }

      .stats {
         display: flex;
         align-items: center;
         justify-content: space-between;

         .stat {
            opacity: 0.75;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 10px;

            span {
               width: 100%;
               white-space: nowrap;
               overflow: hidden;
               text-overflow: ellipsis;

               @media (max-width: 425px) {
                  width: 55px;
               }
            }

            img {
               width: 15px;
               height: 15px;
            }
         }
      }
   }

   .pagination {
      font-family: var(--ff-roboto-serif);
      font-size: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
      user-select: none;

      .button {
         padding: 7px;
         border: 1px solid var(--color-border);
         border-radius: 100px;
         cursor: pointer;
         transition: 200ms all;

         &:hover {
            background-color: var(--color-border);
         }
      }

      .indicator {
         span {
            opacity: 0.5;
         }
      }
   }
}
</style>
