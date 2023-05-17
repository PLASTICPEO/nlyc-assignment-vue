import { onMounted, ref } from "vue";
import { getServiceList } from "../../../api/service";
import { ServiceItems } from "../../../api/service/service.types";

export const useServices = () => {
  const serviceList = ref<ServiceItems>([]);
  const title = ref<string>("");
  const sidebarText = ref<string>("");
  const description = ref<string>("");

  onMounted(() => {
    getServiceList().then((response) => {
      serviceList.value = response.data.data.items;
      title.value = response.data.data.title;
      sidebarText.value = response.data.data.sidebar_text;
      description.value = response.data.data.description;
    });
  });

  return { serviceList, title, sidebarText, description };
};
