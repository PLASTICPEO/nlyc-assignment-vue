<template>
  <Menu :isWhite="route.meta?.isWhite" />
  <ContactButton
    :isWhite="route.meta?.isWhite"
    :withContact="route.meta?.withContact"
  />
  <router-view></router-view>
</template>

<script setup>
import Menu from "../components/menu/menu.vue";
import ContactButton from "../components/contact/contactButton/contactButton.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
