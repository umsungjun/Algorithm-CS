import axios from "axios";

const remote = axios.create();

export const fakeStoreAPI = {
  get: async (page: number) => {
    const result = await remote.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`
    );
    console.log(result);
  },
};
