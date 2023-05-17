import { onMounted, ref } from "vue";
import { getMenuList } from "../../../api/menu/index";
import { MenuItems, Social } from "../../../api/menu/menu.types";

export const useMenu = () => {
  const menuToggle = ref<boolean>(false);
  const menuItems = ref<MenuItems>([]);
  const menuText = ref<string>("");
  const socialItems = ref<Social>([]);

  onMounted(() => {
    getMenuList().then((res) => {
      menuItems.value = res.data.data.items;
      menuText.value = res.data.data.text;
      socialItems.value = res.data.data.social;
    });
  });

  const isOpen = () => {
    menuToggle.value = true;
  };
  const isClosed = () => {
    menuToggle.value = false;
  };

  return {
    menuToggle,
    menuItems,
    menuText,
    socialItems,
    isOpen,
    isClosed,
  };
};
