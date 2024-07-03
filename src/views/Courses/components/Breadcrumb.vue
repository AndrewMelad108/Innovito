<template>
  <div class="Breadcrumbs my-2 text-[16px]">
    <ol class="flex font-semibold dark:text-white-dark capitalize">
      <li>
        <router-link
          :class="{ 'text-gray-300': $route.name === 'courses-info' }"
          :to="{
            name: 'courses-page',
          }"
          >All Course</router-link
        >
      </li>
      <li class="before:content-['/'] before:px-1.5">
        <button :class="{ 'text-black': $route.name === 'courses-info' }">
          Course details
        </button>
      </li>
    </ol>
  </div>
</template>
