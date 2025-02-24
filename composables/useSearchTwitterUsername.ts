type TwitterUserData = {
  username: string;
  publicName: string;
}

export const useSearchTwitterUsername = async (username: string, abortController: AbortController) => {
  const url = `/api/twitter?username=${username}`
  const { data } = await useAsyncData<TwitterUserData>("twitterUserData", (): Promise<TwitterUserData> => $fetch(url, { signal: abortController.signal }))
  return { data: data.value }
}
