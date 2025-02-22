type TelegramUserData = {
  username: string;
  publicName: string;
}

export const useSearchTelegramUsername = async (username: string, abortController: AbortController): Promise<TelegramUserData | null | any> => {
  const url = `/api/telegram?username=${username}`
  try {
    const { data, error } = await useFetch<TelegramUserData>(url, {
      signal: abortController.signal
    })
    return { data, error }
  } catch (error) {
    console.log(error)
    return error
  }
}
