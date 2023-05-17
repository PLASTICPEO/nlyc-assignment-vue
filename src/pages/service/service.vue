<template>
  <div className="min-h-screen  bg-[#E5E5E5] flex justify-center items-center">
    <ServiceList
      :serviceList="serviceList"
      :sidebarText="sidebarText"
      :title="title"
      :description="description"
    />
  </div>
</template>

<script setup>
import ServiceList from "../../components/services/index.vue";
import { useServices } from "../service/composables/useService";

const { serviceList, sidebarText, title, description } = useServices();
</script>
