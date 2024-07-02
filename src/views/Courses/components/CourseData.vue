<template>
  <div
    class="image-container relative md:w-[90%] w-[100%] md:h-auto h-[420px] mx-auto"
  >
    <img
      src="../../../assets/images/course-bg.jpg"
      alt="course-bg"
      class="w-full md:h-[240px] h-[420px] bg-cover rounded-md"
    />
    <div
      class="bg-text absolute top-2 z-10 left-2 right-2 bottom-5 text-white text-md"
    >
      <div
        style="background-color: rgba(14, 23, 38, 0.4)"
        class="rounded-md p-2"
      >
        <span class="text-lg capitalize flex items-center gap-2">
          category name
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
        </span>
        <br />
        <span class="text-xl"
          >illum provident sapiente error, ipsum magni, illo temporibus</span
        >
        <br />
        repellat beatae fugiat debitis cum, est ipsam esse mollitia itaque
        <br />
        <div
          class="course-time flex md:flex-row flex-col gap-1 md:items-center"
        >
          <p class="flex gap-1 items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 22H21M3 17C3 17.9428 3 18.4142 3.29289 18.7071C3.58579 19 4.05719 19 5 19C5.94281 19 6.41421 19 6.70711 18.7071C7 18.4142 7 17.9428 7 17V11C7 10.0572 7 9.58579 6.70711 9.29289C6.41421 9 5.94281 9 5 9C4.05719 9 3.58579 9 3.29289 9.29289C3 9.58579 3 10.0572 3 11V13"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M10 7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5C12.9428 5 13.4142 5 13.7071 5.29289C14 5.58579 14 6.05719 14 7V17C14 17.9428 14 18.4142 13.7071 18.7071C13.4142 19 12.9428 19 12 19C11.0572 19 10.5858 19 10.2929 18.7071C10 18.4142 10 17.9428 10 17V7Z"
                stroke="white"
                stroke-width="1.5"
              ></path>
              <path
                d="M21 11V17C21 17.9428 21 18.4142 20.7071 18.7071C20.4142 19 19.9428 19 19 19C18.0572 19 17.5858 19 17.2929 18.7071C17 18.4142 17 17.9428 17 17V4C17 3.05719 17 2.58579 17.2929 2.29289C17.5858 2 18.0572 2 19 2C19.9428 2 20.4142 2 20.7071 2.29289C21 2.58579 21 3.05719 21 4V7"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
            {{ Course.level }}
            |
          </p>
          <p class="flex gap-1 items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 13L12 13M12 13L9 13M12 13L12 10M12 13L12 16"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M3.5 4.5L7.50002 2"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M20.5 4.5L16.5 2"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M7.5 5.20404C8.82378 4.43827 10.3607 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 11.3607 3.43827 9.82378 4.20404 8.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
            {{ Course.time.hours + " h " + Course.time.minutes + " m" }}
            |
          </p>
          <p class="flex gap-1 items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12H9M16 12H12"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M16 8H15M12 8H8"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M8 16H13"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C20.4816 3.82476 20.7706 4.69989 20.8985 6M21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3.51839 20.1752 3.22937 19.3001 3.10149 18"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
            {{ Course.lessons + " lessons" }}
            |
          </p>
          <p class="text-yellow-400 flex items-center gap-2">
            <img
              src="../../../assets/images/star-svgrepo-com.svg"
              alt="star-icon"
              class="w-auto h-4"
            />
            <span
              >{{ Course.rate }}/5
              <span class="text-white">(244 rating) |</span></span
            >
          </p>
          <p class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M5 12.55C6.02 11.53 7.26 10.99 8.57 11c3.32.03 6.65.03 9.98 0 .88-.01 1.72.38 2.45 1 .62.6 1.1 1.36 1.34 2.2.01.02-.01.05-.02.07-.03.05-.06.1-.09.15-.03.05-.06.11-.09.17-.15.29-.34.56-.57.8-.22.23-.47.43-.75.58-.29.15-.6.26-.91.34-.33.08-.67.12-1.02.13-3.3.02-6.61.02-9.91 0-1.48-.01-2.95-.1-4.43-.28-.53-.13-1.1-.25-1.65-.38-.55-.9-.99-1.49-1.32a3.5 3.5 0 0 0-2.24-.12c-.51.17-.96.49-1.31.91-.34.42-.58.93-.7 1.47-.11.54-.1 1.1-.1 1.66 0 .35.07.7.18 1.04a3.51 3.51 0 0 0 .59 1.11c.26.33.58.61.94.83z"
              ></path>
              <path d="M12 2v10M7 5l5-3 5 3M2 13h20"></path>
            </svg>
            EN |
          </p>
          <p class="flex items-center gap-1">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C20.1752 21.4816 19.3001 21.7706 18 21.8985"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M7 4V2.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M17 4V2.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M21.5 9H16.625H10.75M2 9H5.875"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z"
                fill="white"
              />
              <path
                d="M18 13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12C17.5523 12 18 12.4477 18 13Z"
                fill="white"
              />
              <path
                d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
                fill="white"
              />
              <path
                d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z"
                fill="white"
              />
              <path
                d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z"
                fill="white"
              />
              <path
                d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z"
                fill="white"
              />
            </svg>
            2024-06-09/2024-6-4
          </p>
        </div>
      </div>
      <button class="btn btn-primary capitalize lg:mt-2 md:mt-6 mt-6">
        enroll course
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps(["Course"]);
</script>
