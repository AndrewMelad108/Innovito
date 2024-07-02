<template>
  <div
    class="constructor-information border md:col-start-3 md:col-end-4 rounded-md p-2"
  >
    <div class="course-header gap-2">
      <div class="title flex gap-1 items-center">
        <div class="p-2 rounded-md bg-gray-100">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="6" r="4" stroke="black" stroke-width="1.5" />
            <path
              d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <h1 class="capitalize">instructor</h1>
      </div>
      <div class="constructor-location mt-2 flex justify-around">
        <div class="data">
          <h1 class="capitalize flex items-center gap-1">
            mahmound Al-haroon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-check-circle"
            >
              <circle cx="12" cy="12" r="10" fill="yellow"></circle>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
          </h1>
          <p class="text-gray-400 text-xs">cairo Unversity</p>
          <p class="text-gray-400 text-xs">2 Courses . 434.299 learners</p>
        </div>
        <div class="constructor-image">
          <img
            src="../../../assets/images/course-bg.jpg"
            alt="course"
            class="h-12 w-auto rounded-md"
          />
        </div>
      </div>
      <div
        class="constructor-rate mt-4 border p-2 text-sm rounded-md bg-gray-100 flex items-center justify-between"
      >
        <span class="flex items-center gap-1"
          >Instructor ratings
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 17V11"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 11 9)"
              fill="black"
            />
            <path
              d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </span>
        <span
          ><span class="font-bold text-yellow-300">{{ Course.rate }} / 5</span>
          (244 Rating)
        </span>
      </div>
      <div class="constructor-review border p-3 rounded-md mt-4">
        <h1 class="flex items-center text-[18px] gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="6" r="4" stroke="black" stroke-width="1.5" />
            <path
              d="M18 9C19.6569 9 21 7.88071 21 6.5C21 5.11929 19.6569 4 18 4"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M6 9C4.34315 9 3 7.88071 3 6.5C3 5.11929 4.34315 4 6 4"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M17.1973 15C17.7078 15.5883 18 16.2714 18 17C18 19.2091 15.3137 21 12 21C8.68629 21 6 19.2091 6 17C6 14.7909 8.68629 13 12 13C12.3407 13 12.6748 13.0189 13 13.0553"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M20 19C21.7542 18.6153 23 17.6411 23 16.5C23 15.3589 21.7542 14.3847 20 14"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M4 19C2.24575 18.6153 1 17.6411 1 16.5C1 15.3589 2.24575 14.3847 4 14"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          Course Ratings & Reviews
        </h1>
        <div class="grid grid-cols-2 items-center mt-4">
          <div class="rate flex items-center gap-1 text-base font-bold">
            <img
              v-for="star in 5"
              src="../../../assets/images/star-svgrepo-com.svg"
              alt="sta-icon"
              class="h-4 w-auto"
            />
          </div>
          Mohamed
          <span class="col-span-2 text-gray-400">
            Very good course and clear</span
          >
        </div>
        <div class="grid grid-cols-2 items-center mt-2">
          <div class="rate flex items-center gap-1 text-base font-bold">
            <img
              v-for="star in 5"
              src="../../../assets/images/star-svgrepo-com.svg"
              alt="sta-icon"
              class="h-4 w-auto"
            />
          </div>
          Ahmed
          <span class="col-span-2 text-gray-400">
            Very good course and clear</span
          >
        </div>
        <div class="grid grid-cols-2 items-center mt-2">
          <div class="rate flex items-center gap-1 text-base font-bold">
            <img
              v-for="star in 5"
              src="../../../assets/images/star-svgrepo-com.svg"
              alt="sta-icon"
              class="h-4 w-auto"
            />
          </div>
          Mohamed
          <span class="col-span-2 text-gray-400">
            Very good course and clear</span
          >
        </div>
        <div class="grid grid-cols-2 items-center mt-2">
          <div class="rate flex items-center gap-1 text-base font-bold">
            <img
              v-for="star in 5"
              src="../../../assets/images/star-svgrepo-com.svg"
              alt="sta-icon"
              class="h-4 w-auto"
            />
          </div>
          Mohamed
          <span class="col-span-2 text-gray-400">
            Very good course and clear</span
          >
        </div>
        <div class="grid grid-cols-2 items-center mt-2">
          <div class="rate flex items-center gap-1 text-base font-bold">
            <img
              v-for="star in 5"
              src="../../../assets/images/star-svgrepo-com.svg"
              alt="sta-icon"
              class="h-4 w-auto"
            />
          </div>
          Mohamed
          <span class="col-span-2 text-gray-400">
            Very good course and clear</span
          >
        </div>
        <div class="grid grid-cols-2 items-center mt-2">
          <div class="rate flex items-center gap-1 text-base font-bold">
            <img
              v-for="star in 5"
              src="../../../assets/images/star-svgrepo-com.svg"
              alt="sta-icon"
              class="h-4 w-auto"
            />
          </div>
          Mohamed
          <span class="col-span-2 text-gray-400">
            Very good course and clear</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps(["Course"]);
</script>
