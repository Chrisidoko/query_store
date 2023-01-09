import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getPostById = async (id) => {
  try {
    const { data } = await axios.get(
      `https://api.unsplash.com/photos/${id}?client_id=t9xaOpzHDCYTxq_6ekdXzdHQlyBrzxUmlO7plPj8nvA`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export default function usePost(id) {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostById(id),
  });
}
