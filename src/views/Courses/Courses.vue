<template>
  <div
    class="Courses grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-center md:gap-6 gap-4 p-4 shadow-lg rounded-md"
  >
    <course-card
      v-for="Course in Courses"
      :key="Course.id"
      :Course="Course"
      @CourseInfo="CourseInfo"
    ></course-card>
  </div>
</template>
<script lang="ts" setup>
import CourseCard from "./components/CoursesCard.vue";
import Courses from "../../Courses.json";
import { useRouter } from "vue-router";
const router = useRouter();
const CourseInfo = (id) => {
  router.push({
    name: "courses-info",
    params: {
      coursesId: id,
    },
  });
};
</script>
