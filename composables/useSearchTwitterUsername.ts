type TwitterUserData = {
  username: string;
  publicName: string;
}

export const useSearchTwitterUsername = async (username: string, abortController: AbortController) => {
  const url = `/api/twitter?username=${username}`
  try {
    const { data } = await useFetch<TwitterUserData>(url, {
      signal: abortController.signal
    })
    return { data: data.value }
  } catch (error) {
    return error
  }
}
