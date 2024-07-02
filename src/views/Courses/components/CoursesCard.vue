<template>
  <div class="Course relative h-auto">
    <img
      src="../../../assets/images/images.jpeg"
      alt="course-image"
      class="w-full rounded-lg"
    />
    <div
      class="course-info bg-white shadow-lg h-auto absolute z-2 bottom-14 left-2 right-2 p-2 rounded-md"
    >
      <div
        class="course-rate text-yellow-400 font-bold flex gap-4 items-center"
      >
        <span>{{ props.Course.rate }}/5</span>
        <div class="star-icon flex gap-2">
          <img
            v-for="star in props.Course.rate"
            src="../../../assets/images/star-svgrepo-com.svg"
            alt="star-icon"
            class="w-auto h-4"
          />
        </div>
      </div>
      <p class="course-title text-gray-500 text-2xl">
        {{ props.Course.title }}
      </p>
      <p class="flex gap-2 items-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.4825 19C21.4436 19.9362 21.3183 20.5101 20.9142 20.9142C20.3284 21.5 19.3856 21.5 17.5 21.5C15.6144 21.5 14.6716 21.5 14.0858 20.9142C13.5 20.3284 13.5 19.3856 13.5 17.5V15.5C13.5 13.6144 13.5 12.6716 14.0858 12.0858C14.6716 11.5 15.6144 11.5 17.5 11.5C19.3856 11.5 20.3284 11.5 20.9142 12.0858C21.4458 12.6173 21.495 13.4428 21.4995 15"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M2 8.5C2 10.3856 2 11.3284 2.58579 11.9142C3.17157 12.5 4.11438 12.5 6 12.5C7.88562 12.5 8.82843 12.5 9.41421 11.9142C10 11.3284 10 10.3856 10 8.5V6.5C10 4.61438 10 3.67157 9.41421 3.08579C8.82843 2.5 7.88562 2.5 6 2.5C4.11438 2.5 3.17157 2.5 2.58579 3.08579C2 3.67157 2 4.61438 2 6.5V8.5Z"
            stroke="#1C274C"
            stroke-width="1.5"
          />
          <path
            d="M15.5 2.51343C15.1727 2.53017 14.9385 2.56777 14.7346 2.65224C14.2446 2.85522 13.8552 3.24457 13.6522 3.73463C13.5 4.10217 13.5 4.56811 13.5 5.49999C13.5 6.43188 13.5 6.89782 13.6522 7.26536C13.8552 7.75542 14.2446 8.14477 14.7346 8.34775C15.1022 8.49999 15.5681 8.49999 16.5 8.49999H18.5C19.4319 8.49999 19.8978 8.49999 20.2654 8.34775C20.7554 8.14477 21.1448 7.75542 21.3478 7.26536C21.5 6.89782 21.5 6.43188 21.5 5.49999C21.5 4.56811 21.5 4.10217 21.3478 3.73463C21.1448 3.24457 20.7554 2.85522 20.2654 2.65224C20.0615 2.56777 19.8273 2.53017 19.5 2.51343"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M2 18.5C2 19.4319 2 19.8978 2.15224 20.2654C2.35523 20.7554 2.74458 21.1448 3.23463 21.3478C3.60218 21.5 4.06812 21.5 5 21.5H7C7.93188 21.5 8.39782 21.5 8.76537 21.3478C9.25542 21.1448 9.64477 20.7554 9.84776 20.2654C10 19.8978 10 19.4319 10 18.5C10 17.5681 10 17.1022 9.84776 16.7346C9.64477 16.2446 9.25542 15.8552 8.76537 15.6522C8.39782 15.5 7.93188 15.5 7 15.5H5C4.06812 15.5 3.60218 15.5 3.23463 15.6522C2.74458 15.8552 2.35523 16.2446 2.15224 16.7346C2 17.1022 2 17.5681 2 18.5Z"
            stroke="#1C274C"
            stroke-width="1.5"
          />
        </svg>

        {{ props.Course.content1 }}
      </p>
      <p class="flex gap-2 items-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.66789 5.34961C2.55868 5.71394 2.5 6.10012 2.5 6.5C2.5 8.70914 4.29086 10.5 6.5 10.5C8.70914 10.5 10.5 8.70914 10.5 6.5C10.5 4.29086 8.70914 2.5 6.5 2.5C6.10012 2.5 5.71394 2.55868 5.34961 2.66789"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M21.8321 19.1504C21.9413 18.7861 22 18.3999 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22C18.3999 22 18.7861 21.9413 19.1504 21.8321"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M2.5 17.5C2.5 15.6144 2.5 14.6716 3.08579 14.0858C3.67157 13.5 4.61438 13.5 6.5 13.5C8.38562 13.5 9.32843 13.5 9.91421 14.0858C10.5 14.6716 10.5 15.6144 10.5 17.5C10.5 19.3856 10.5 20.3284 9.91421 20.9142C9.32843 21.5 8.38562 21.5 6.5 21.5C4.61438 21.5 3.67157 21.5 3.08579 20.9142C2.5 20.3284 2.5 19.3856 2.5 17.5Z"
            stroke="#1C274C"
            stroke-width="1.5"
          />
          <path
            d="M13.5 6.5C13.5 4.61438 13.5 3.67157 14.0858 3.08579C14.6716 2.5 15.6144 2.5 17.5 2.5C19.3856 2.5 20.3284 2.5 20.9142 3.08579C21.5 3.67157 21.5 4.61438 21.5 6.5C21.5 8.38562 21.5 9.32843 20.9142 9.91421C20.3284 10.5 19.3856 10.5 17.5 10.5C15.6144 10.5 14.6716 10.5 14.0858 9.91421C13.5 9.32843 13.5 8.38562 13.5 6.5Z"
            stroke="#1C274C"
            stroke-width="1.5"
          />
        </svg>

        {{ props.Course.content2 }}
      </p>
      <div class="course-time flex flex-wrap gap-4 items-center mt-2">
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
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M16 8H15M12 8H8"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M8 16H13"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C20.4816 3.82476 20.7706 4.69989 20.8985 6M21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3.51839 20.1752 3.22937 19.3001 3.10149 18"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          {{ props.Course.lessons + "lessons" }}
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
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3.5 4.5L7.50002 2"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.5 4.5L16.5 2"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 5.20404C8.82378 4.43827 10.3607 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 11.3607 3.43827 9.82378 4.20404 8.5"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>

          {{ props.Course.time.hours + "h " + props.Course.time.minutes + "m" }}
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
              d="M3 22H21"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 17C3 17.9428 3 18.4142 3.29289 18.7071C3.58579 19 4.05719 19 5 19C5.94281 19 6.41421 19 6.70711 18.7071C7 18.4142 7 17.9428 7 17V11C7 10.0572 7 9.58579 6.70711 9.29289C6.41421 9 5.94281 9 5 9C4.05719 9 3.58579 9 3.29289 9.29289C3 9.58579 3 10.0572 3 11V13"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M10 7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5C12.9428 5 13.4142 5 13.7071 5.29289C14 5.58579 14 6.05719 14 7V17C14 17.9428 14 18.4142 13.7071 18.7071C13.4142 19 12.9428 19 12 19C11.0572 19 10.5858 19 10.2929 18.7071C10 18.4142 10 17.9428 10 17V7Z"
              stroke="#1C274C"
              stroke-width="1.5"
            />
            <path
              d="M21 11V17C21 17.9428 21 18.4142 20.7071 18.7071C20.4142 19 19.9428 19 19 19C18.0572 19 17.5858 19 17.2929 18.7071C17 18.4142 17 17.9428 17 17V4C17 3.05719 17 2.58579 17.2929 2.29289C17.5858 2 18.0572 2 19 2C19.9428 2 20.4142 2 20.7071 2.29289C21 2.58579 21 3.05719 21 4V7"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          {{ props.Course.level }}
        </p>
      </div>
    </div>
    <button
      @click="CourseInfo(props.Course.id)"
      class="capitalize block w-full p-2 mt-16 rounded-md text-center bg-blue-100 hover:bg-blue-200 hover:text-blue-500 text-blue-400 font-bold"
    >
      perview
    </button>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
const emits = defineEmits(["CourseInfo"]);
const props = defineProps(["Course"]);
const CourseInfo = (id) => {
  emits("CourseInfo", id);
};
</script>
<style></style>
