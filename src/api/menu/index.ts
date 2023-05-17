import api from "..";
import { MENU } from "./menu.enum.js";
import { MenuList } from "./menu.types.js";

export const getMenuList = () => {
  return api.get<MenuList>(MENU.list);
};
