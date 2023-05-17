<template>
  <div className="h-screen">
    <PortfolioList :portfolioList="portfolioList" />
  </div>
</template>

<script setup>
import PortfolioList from "../../components/portfolio/list/index.vue";
import { usePortfolio } from "../../pages/portfolio/composables/usePortfolio";

const { portfolioList } = usePortfolio();
</script>
