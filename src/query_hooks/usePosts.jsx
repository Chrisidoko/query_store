import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.unsplash.com/photos?client_id=t9xaOpzHDCYTxq_6ekdXzdHQlyBrzxUmlO7plPj8nvA`
      );
      return data;
    },
  });
}
