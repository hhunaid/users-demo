import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const useUserShowQuery = (userId) => {
  return useQuery(['users', userId], async () => {
    const { data } = await axios.get(
      `https://reqres.in/api/users/${userId}`
    )

    return data;
  })
}

export default useUserShowQuery;
