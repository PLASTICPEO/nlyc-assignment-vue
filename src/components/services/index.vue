<template>
  <div>
    <div
      class="xl:flex xl:flex-wrap grid grid-cols-1 xl:h-auto h-screen w-full mb-8"
    >
      <div
        class="text-sm xl:w-full xl:h-[20%] xl:pl-[10%] xl:pb-2.5 p-3 flex xl:justify-end justify-center flex-col"
      >
        <p class="font-bold">{{ title }}</p>
        <p>--</p>
        <p>{{ description }}</p>
      </div>
      <div class="bg-[#CDC152] xl:w-[10%] flex jusify-center items-center">
        <p class="xl:rotate-[-90deg] font-bold m-auto">{{ sidebarText }}</p>
      </div>
      <div class="bg-[#161616] p-3 xl:w-[90%] grid xl:grid-cols-3">
        <ul class="relative" v-for="listitems in serviceList" :key="index">
          <li
            class="text-white font-roboto xl:h-32 xl:w-64 leading-4 m-3 flex flex-col tracking-widest"
          >
            <span class="mb-1 text-white text-base leading-7">
              {{ listitems.title }}
            </span>
            <span class="text-xs font-light">
              {{ listitems.description }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  serviceList: {
    type: Array,
    required: true,
  },
  sidebarText: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
