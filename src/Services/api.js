import axios from "axios";

const getData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export { getData };
