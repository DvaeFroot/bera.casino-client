type TwitterUserData = {
  username: string;
  publicName: string;
}

export const useSearchTwitterUsername = async (username: string, abortController: AbortController) => {
  const url = `/api/twitter?username=${username}`
  const { data } = await useFetch(url, { signal: abortController.signal })
  return { data: data.value }
}
