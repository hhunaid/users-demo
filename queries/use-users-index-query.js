import {useInfiniteQuery} from "@tanstack/react-query";
import axios from "axios";

const useUsersIndexQuery = () => {
  return useInfiniteQuery(['users'], async ({pageParam = 1}) => {
    const {data} = await axios.get(
      "https://reqres.in/api/users", {
        params: {page: pageParam, per_page: 10}
      }
    );

    return data;
  }, {
    getNextPageParam: (lastPage, allPages) => {
      if (allPages.length >= lastPage.total_pages) {
        return
      }

      return lastPage.page + 1
    }
  })
}

export default useUsersIndexQuery;
