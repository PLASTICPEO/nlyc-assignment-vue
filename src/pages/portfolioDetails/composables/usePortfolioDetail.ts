import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getPortfolio } from "../../../api/portfolio";
import { PortfolioItem } from "../../../api/portfolio/portfolio.types";
import { portfolioPhotos } from "../../portfolio/composables/portfolioPhotos";

export const usePortfolioDetails = () => {
  const route = useRoute();
  const portfolioDetails = ref<PortfolioItem>({
    title: "",
    description: "",
    thumb: "",
    slug: "",
  });

  onMounted(() => {
    getPortfolio(route.params.slug! as string).then((res) => {
      const portfolioPhoto = portfolioPhotos.find((photo) => {
        return photo.slug == res.data.data.slug;
      });
      portfolioDetails.value = { ...res.data.data, thumb: portfolioPhoto!.img };
    });
  });

  return { portfolioDetails };
};
