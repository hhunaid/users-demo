import useUsersIndexQuery from "../queries/use-users-index-query";

const useUsersIndex = () => {
  const { data, fetchNextPage, isFetching, isInitialLoading } = useUsersIndexQuery();

  if (isInitialLoading) {
    return [[], fetchNextPage, isFetching]
  }

  const users = data.pages.map(page => page.data).flat()

  return [users, fetchNextPage, isFetching]
}

export default useUsersIndex;
