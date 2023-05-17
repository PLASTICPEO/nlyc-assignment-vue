<template>
  <div v-if="props.withContact">
    <RouterLink to="/contact">
      <button
        style=""
        :class="`hidden xl:inline-block text-xs ${
          props.isWhite ? 'text-white' : 'text-black'
        } font-roboto w-28 h-10 absolute left-1/2 -translate-x-1/2 xl:bottom-2.5 bottom-4 max-sm opacity-100 border-[#CDC152] border-2`"
      >
        contact us
      </button>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  isWhite: {
    type: String,
    required: true,
  },
  withContact: {
    type: String,
    required: true,
  },
});
</script>
