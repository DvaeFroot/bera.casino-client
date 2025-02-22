type TwitterUserData = {
  username: string;
  publicName: string;
}

export const useSearchTwitterUsername = async (username: string, abortController: AbortController): Promise<TwitterUserData | null | any> => {
  const url = `/api/twitter?username=${username}`
  try {
    const { data } = await useFetch<TwitterUserData>(url, {
      signal: abortController.signal
    })
    return { data }
  } catch (error) {
    console.log(error)
    return error
  }
}
