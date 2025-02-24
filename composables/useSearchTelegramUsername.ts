type TelegramUserData = {
  username: string;
  publicName: string;
}

export const useSearchTelegramUsername = async (username: string, abortController: AbortController): Promise<TelegramUserData | null | any> => {
  const url = `/api/telegram?username=${username}`
  const { data } = await useAsyncData<TelegramUserData>("telegramUserData", (): Promise<TelegramUserData> => $fetch(url, { signal: abortController.signal })
  )
  return { data: data.value }
}
