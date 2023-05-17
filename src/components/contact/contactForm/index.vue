<template>
  <div class="xl:pt-[0] xl:pt-12 pt-7">
    <form
      @submit.prevent="handleSubmit"
      class="flex flex-col justify-center xl:w-1/2 xl:absolute xl:top-[10%] xl:left-[3%]"
    >
      <input
        v-model="formData.name"
        class="border-2 border-neutral-950 p-1.5 outline-none m-1.5 placeholder-gray-900 placeholder:roboto bg-transparent"
        type="text"
        placeholder="Name*"
      />
      <input
        v-model="formData.company"
        class="border-2 border-neutral-950 p-2.5 outline-none m-1.5 placeholder-gray-900 placeholder:roboto bg-transparent"
        type="text"
        placeholder="Company*"
      />
      <input
        v-model="formData.number"
        class="border-2 border-neutral-950 p-2.5 outline-none m-1.5 placeholder-gray-900 placeholder:roboto bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        type="number"
        placeholder="Mobile*"
      />
      <input
        v-model="formData.email"
        class="border-2 border-neutral-950 p-2.5 outline-none m-1.5 placeholder-gray-900 placeholder:roboto bg-transparent"
        type="text"
        placeholder="Email*"
      />
      <textarea
        v-model="formData.question"
        class="border-2 border-neutral-950 p-2.5 outline-none m-1.5 placeholder-gray-900 placeholder:roboto resize-none bg-transparent overflow-hidden"
        placeholder="Question*"
      />
      <button
        type="submit"
        class="border-2 border-neutral-950 p-2.5 outline-none m-1.5 mr-[60%]"
      >
        SEND
      </button>
    </form>
  </div>
</template>

<script setup>
import { useContact } from "../../../pages/contact/composables/useContact";

const { formData, handleSubmit } = useContact();
</script>
