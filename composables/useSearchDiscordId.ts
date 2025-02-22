import { useFetch } from "#app";

export const useSearchDiscordId = async (userId: string, abortController: AbortController) => {
  const { data, error, pending }: { data: any, error: any, pending: any } = await useFetch(`https://discordlookup.mesalytic.moe/v1/user/${userId}`, {
    signal: abortController.signal
  });
  return { data: data.value, error, pending };
}
