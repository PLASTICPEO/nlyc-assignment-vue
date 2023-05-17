import api from "..";
import { SERVICE } from "./service.enum";
import { ServiceList } from "./service.types";

export const getServiceList = () => {
  return api.get<ServiceList>(SERVICE.list);
};
