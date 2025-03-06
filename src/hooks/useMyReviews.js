import { useMe } from "./useMe";
export const useMyReviews = () => {
  const { data, ...result } = useMe(true);

  return {
    ...result,
    reviews: data?.me.reviews.edges.map((review) => review.node) ?? [],
  };
};
