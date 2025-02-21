import { useFetch } from "#app";

export const useSearchDiscordId = async (userId: string) => {
  const { data, error, pending }: { data: any, error: any, pending: any } = await useFetch(`https://discordlookup.mesalytic.moe/v1/user/${userId}`);
  return { data, error, pending };
}
