import axios from "axios";

const ACCESS_KEY = "husrsXO_ggqFkAekbNv1TQXso7HgZRGfT7S3DFIAYyg";

export const fetchFotos = async (query, page) => {
  const { data } = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return data;
};
