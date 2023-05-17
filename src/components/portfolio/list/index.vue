<template>
  <div
    class="h-full w-full bg-[#E5E5E5] grid xl:grid-rows-2 xl:grid-flow-col gap-2 py-12 px-2"
  >
    <div v-for="item in portfolioList" :key="index">
      <PortfolioSingle
        :description="item.description"
        :title="item.title"
        :thumb="item.thumb"
        :slug="item.slug"
      />
    </div>
  </div>
</template>

<script setup>
import PortfolioSingle from "../single/index.vue";

const props = defineProps({
  portfolioList: {
    type: Array,
    required: true,
  },
});
</script>
