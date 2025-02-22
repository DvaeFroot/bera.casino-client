import { useFetch } from "#app";

export const useSearchDiscordId = async (userId: string, abortController: AbortController) => {
  try {
    const { data }: { data: any, error: any, pending: any } = await useFetch(`https://discordlookup.mesalytic.moe/v1/user/${userId}`, {
      signal: abortController.signal
    });
    return { data: { username: data.value.username, publicName: data.value.global_name } };

  } catch (error) {
    return error
  }
}
