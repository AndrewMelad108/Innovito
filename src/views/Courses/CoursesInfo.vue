<template>
  <div>
    <Breadcrumb class="pl-4" />
    <div
      class="course-details min-h-[600px] md:p-4 p-2 shadow-md border border-gray-300 rounded-md mt-4"
    >
      <CourseData :Course="Course" />
      <div
        class="course-lists mt-4 grid lg:grid-cols-3 grid-cols-1 gap-2 md:w-[92%] mx-auto p-2 min-h-96"
      >
        <CourseVideos />
        <InstructorData :Course="Course" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import Courses from "../../Courses.json";
import { ref, type Ref } from "vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import CourseData from "./components/CourseData.vue";
import CourseVideos from "./components/CourseVideos.vue";
import InstructorData from "./components/InstructorData.vue";

interface CourseTime {
  hours: number;
  minutes: number;
}
interface Course {
  id: number;
  rate: number;
  title: string;
  content1: string;
  content2: string;
  time: CourseTime;
  lessons: number;
  level: string;
}

const route = useRoute();
const Course: Ref<Course | any> = ref({});
Course.value = Courses.find(
  (c) => c.id === parseInt(route.params.coursesId as string)
);
</script>
