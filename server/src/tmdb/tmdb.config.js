const baseUrl = "https://api.themoviedb.org/3/";
const key = "a7286d592a026a75e47beca432e3552e";

const getUrl = (endpoint, params) => {
  const qs = new URLSearchParams(params);

  return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getUrl };
