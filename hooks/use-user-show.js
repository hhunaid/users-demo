import UseUserShowQuery from "../queries/use-user-show-query";

const useUserShow = (userId) => {
  const { data, isLoading } = UseUserShowQuery(userId);

  return {
    user: data?.data,
    isLoading
  }
}

export default useUserShow;
