<template>
  <div
    id="loader"
    class="layout backdrop-blur-lg z-[999999999] fixed inset-0 hidden justify-center items-center"
  >
    <span
      class="animate-[spin_0.35s_linear_infinite] border-2 border-[#f1f2f3] border-l-primary border-r-primary rounded-full w-10 h-10 inline-block align-middle"
    ></span>
  </div>
  <div
    id="App"
    class="main-section antialiased relative font-nunito text-sm font-normal"
    :class="[
      store.sidebar ? 'toggle-sidebar' : '',
      store.menu,
      store.layout,
      store.rtlClass,
    ]"
  >
    <component :is="mainLayout"></component>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import appLayout from "./layouts/app-layout.vue";
import authLayout from "./layouts/auth-layout.vue";
import { useAppStore } from "./stores/index";
const store = useAppStore();
// meta
const mainLayout = computed(() => {
  return store.mainLayout === "auth" ? authLayout : appLayout;
});
</script>
