<template>
  <div>
    <div
      class="absolute right-0 top-0 xl:h-screen h-screen xl:w-80 w-full bg-[#CDC152] z-40"
      v-if="menuToggle"
    >
      <button @click="isClosed">
        <img :src="closeBtn" class="absolute right-1 top-1" />
      </button>
      <div class="flex flex-col">
        <ul class="absolute top-[20%] left-[50%] -translate-x-1/2">
          <RouterLink
            :key="index"
            :to="`${item.href === 'contact' ? '/contact' : item.href}`"
            v-for="item in menuItems"
          >
            <li
              @click="isClosed"
              class="font-roboto active:font-bold text-3xl mt-5"
            >
              {{ item.label }}
            </li>
          </RouterLink>
        </ul>
        <p
          class="font-roboto text-xs mt-24 absolute bottom-[20%] left-[50%] -translate-x-1/2"
        >
          {{ menuText }}
        </p>
        <div class="text-center">
          <div
            class="flex absolute bottom-[5%] left-[50%] -translate-x-1/2"
            v-for="socialItem in socialItems"
          >
            <a :href="socialItem.href" v-for="socialItem in socialItems">
              <img
                class="m-2.5"
                :src="
                  socialItem.icon === 'facebook' ? facebookIcon : instagramIcon
                "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="absolute top-1 right-2 border-yellow-300">
      <button @click="isOpen">
        <span
          :class="`material-symbols-outlined ${
            props.isWhite ? 'text-white' : 'text-black'
          } text-4xl`"
        >
          drag_handle
        </span>
      </button>
    </div>
  </div>
</template>
<script setup>
import closeBtn from "../../assets/img/menuCloseBtn.svg";
import facebookIcon from "../../assets/img/facebookIcon.svg";
import instagramIcon from "../../assets/img/instagramIcon.svg";
import { useMenu } from "./composables/useMenu";
const { menuToggle, isOpen, isClosed, menuItems, socialItems, menuText } =
  useMenu();

const props = defineProps({
  isWhite: {
    type: String,
    required: true,
  },
});
</script>
