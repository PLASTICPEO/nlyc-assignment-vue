<template>
  <div>
    <PortfolioDetails :portfolioDetails="portfolioDetails" />
  </div>
</template>
<script setup>
import PortfolioDetails from "../../components/portfolio/details/index.vue";
import { usePortfolioDetails } from "../../pages/portfolioDetails/composables/usePortfolioDetail";

const { portfolioDetails } = usePortfolioDetails();
</script>
