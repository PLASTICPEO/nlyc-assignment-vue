import { onMounted, ref } from "vue";
import { PortfolioItem } from "../../../api/portfolio/portfolio.types";
import { getPortfolioList } from "../../../api/portfolio";
import { portfolioPhotos } from "./portfolioPhotos";

export const usePortfolio = () => {
  const portfolioList = ref<PortfolioItem[]>([]);

  onMounted(() => {
    getPortfolioList().then((res) => {
      const modifiedPortfolioList = res.data.data.items.map((item) => {
        const photoObj = portfolioPhotos.find((photo) => {
          return photo.slug == item.slug;
        });

        return { ...item, thumb: photoObj!.img };
      });
      portfolioList.value = modifiedPortfolioList;
    });
  });

  return {
    portfolioList,
  };
};
