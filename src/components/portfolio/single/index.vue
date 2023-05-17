<template>
  <RouterLink
    :to="`/portfolio/${slug}`"
    class="relative"
    :onmouseenter="handleMouseEnter"
    :onmouseleave="handleMouseLeave"
  >
    <img :src="thumb" class="object-fill w-full h-full" />

    <div
      v-if="isHovered"
      className="absolute bg-black/70 text-white flex flex-col justify-center top-0 left-0 w-full h-full px-5"
    >
      <h2 className="text-xl">{{ title }}</h2>
      <p>--</p>
      <p className="text-xs">{{ description }}</p>
    </div>
  </RouterLink>
</template>
<script setup>
import { ref } from "vue";
const isHovered = ref(false);

const handleMouseEnter = () => {
  isHovered.value = true;
};
const handleMouseLeave = () => {
  isHovered.value = false;
};

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumb: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});
</script>
