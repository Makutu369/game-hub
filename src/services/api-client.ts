import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "640f016d0a0b4799a0e8d64d236e6b6b",
  },
});
