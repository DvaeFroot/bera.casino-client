type TelegramUserData = {
  username: string;
  publicName: string;
}

export const useSearchTelegramUsername = async (username: string, abortController: AbortController): Promise<TelegramUserData | null | any> => {
  const url = `/api/telegram?username=${username}`
  try {
    const { data } = await useFetch<TelegramUserData>(url, {
      signal: abortController.signal
    })
    return { data: data.value }
  } catch (error) {
    return error
  }
}
