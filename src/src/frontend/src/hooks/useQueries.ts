import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { DownloadLinks, Review, ReviewInput } from "../backend.d.ts";
import { useActor } from "./useActor";

const FALLBACK_DOWNLOAD_LINKS: DownloadLinks = {
  androidApk: "https://ziboplay.buzz",
  androidTv: "https://ziboplay.buzz",
  fireTv: "https://ziboplay.buzz",
  appStore: "https://ziboplay.buzz",
  googlePlay: "https://ziboplay.buzz",
};

export function useDownloadLinks() {
  const { actor, isFetching } = useActor();
  return useQuery<DownloadLinks>({
    queryKey: ["downloadLinks"],
    queryFn: async () => {
      if (!actor) return FALLBACK_DOWNLOAD_LINKS;
      try {
        const links = await actor.getDownloadLinks();
        return links;
      } catch {
        return FALLBACK_DOWNLOAD_LINKS;
      }
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 60 * 10,
  });
}

export function useAllReviews() {
  const { actor, isFetching } = useActor();
  return useQuery<Review[]>({
    queryKey: ["allReviews"],
    queryFn: async () => {
      if (!actor) return [];
      try {
        const reviews = await actor.getAllReviews();
        return reviews;
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 60 * 2,
  });
}

export function useSubmitReview() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation<string, Error, ReviewInput>({
    mutationFn: async (input: ReviewInput) => {
      if (!actor) throw new Error("Backend not available");
      return actor.submitReview(input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allReviews"] });
    },
  });
}
