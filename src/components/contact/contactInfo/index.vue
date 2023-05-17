<template>
  <div
    class="text-end font-roboto xl:absolute xl:right-[2%] xl:bottom-[10%] xl:bottom-[5%] m-5 mt-2"
  >
    <p class="text-5xl font-bold flex flex-col">
      Just be <span>Yourself!</span>
    </p>
    <div>
      <p class="w-full mt-5">
        Contact us: +1 (533) 6454 45454 12/53 Towers Ave., 19726, California,
        USA
      </p>
      <p class="font-bold">info@booreykoo.com</p>
      <div class="flex justify-end items-center w-full mt-5">
        <a href="https://www.facebook.com/">
          <img :src="facebookicon" class="mr-6" />
        </a>
        <a href="https://www.instagram.com/">
          <img :src="instagramicon" />
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import FacebookIcon from "../../../assets/img/facebookIcon.svg";
import InstagramIcon from "../../../assets/img/instagramIcon.svg";
</script>
