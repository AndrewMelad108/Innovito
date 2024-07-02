<template>
  <div :class="{ 'dark text-white-dark': store.semidark }">
    <nav
      class="sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300"
    >
      <div class="bg-white dark:bg-[#0e1726] h-full">
        <div class="flex items-center px-4 py-3">
          <img
            src="../../assets/images/Innovito.png"
            alt="Innovito"
            class="pt-4"
          />
          <router-link
            to="/courses-page"
            class="main-logo flex items-center shrink-0"
          >
            <span
              class="text-2xl pt-2 ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light"
              ><span class="text-blue-500">Innovito</span></span
            >
          </router-link>
          <a
            href="javascript:;"
            class="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180 hover:text-primary"
            @click="store.toggleSidebar()"
          >
            <svg
              class="w-5 h-5 m-auto"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 19L7 12L13 5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.5"
                d="M16.9998 19L10.9998 12L16.9998 5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <perfect-scrollbar
          :options="{
            swipeEasing: true,
            wheelPropagation: false,
          }"
          class="h-[calc(100vh-80px)] relative grid"
        >
          <ul class="relative font-semibold space-y-0.5 p-4 py-0">
            <li class="nav-item">
              <ul>
                <li class="nav-item">
                  <router-link
                    :to="{ name: 'courses-page' }"
                    class="group"
                    @click="toggleMobileMenu"
                  >
                    <div class="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 21L22 21M2 21L6 21"
                          stroke="#1C274C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M5 9L5 14.5C5 15.4346 5 15.9019 5.20096 16.25C5.33261 16.478 5.52197 16.6674 5.75 16.799C6.09808 17 6.56538 17 7.5 17C8.43462 17 8.90192 17 9.25 16.799C9.47803 16.6674 9.66739 16.478 9.79904 16.25C10 15.9019 10 15.4346 10 14.5L10 5.5C10 4.56538 10 4.09808 9.79904 3.75C9.66739 3.52197 9.47803 3.33261 9.25 3.20096C8.90192 3 8.43462 3 7.5 3C6.56538 3 6.09808 3 5.75 3.20096C5.52197 3.33261 5.33261 3.52197 5.20096 3.75C5.03954 4.0296 5.00778 4.38613 5.00153 5"
                          stroke="#1C274C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M16.5 17C15.5654 17 15.0981 17 14.75 16.799C14.522 16.6674 14.3326 16.478 14.201 16.25C14 15.9019 14 15.4346 14 14.5L14 8.5C14 7.56538 14 7.09808 14.201 6.75C14.3326 6.52197 14.522 6.33261 14.75 6.20096C15.0981 6 15.5654 6 16.5 6C17.4346 6 17.9019 6 18.25 6.20096C18.478 6.33261 18.6674 6.52197 18.799 6.75C19 7.09808 19 7.56538 19 8.5L19 14.5C19 15.4346 19 15.9019 18.799 16.25C18.6674 16.478 18.478 16.6674 18.25 16.799C17.9019 17 17.4346 17 16.5 17Z"
                          stroke="#1C274C"
                          stroke-width="1.5"
                        />
                      </svg>

                      <span
                        class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark"
                        >Courses</span
                      >
                    </div>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </perfect-scrollbar>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useAppStore } from "../../stores/index";
const store = useAppStore();
onMounted(() => {
  const selector = document.querySelector(
    '.sidebar ul a[href="' + window.location.pathname + '"]'
  );
  if (selector) {
    selector.classList.add("active");
    const ul: any = selector.closest("ul.sub-menu");
    if (ul) {
      let ele: any = ul.closest("li.menu").querySelectorAll(".nav-link") || [];
      if (ele.length) {
        ele = ele[0];
        setTimeout(() => {
          ele.click();
        });
      }
    }
  }
});

const toggleMobileMenu = () => {
  if (window.innerWidth < 1025) {
    store.toggleSidebar();
  }
};
</script>
