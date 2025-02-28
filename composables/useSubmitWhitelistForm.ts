export const useSubmitWhitelistForm = async (formData: any) => {
  const SERVER_DOMAIN = useRuntimeConfig().public.serverDomain;
  const SERVER_PORT = useRuntimeConfig().public.serverPort;
  const SERVER_TOKEN = useRuntimeConfig().public.serverToken;
  const url = `http://${SERVER_DOMAIN}:${SERVER_PORT}/api/v1/whitelist`
  const response = await useFetch(url, {
    method: "post",
    body: formData,
    headers: {
      "Authorization": `Bearer ${SERVER_TOKEN}`,
    }
  })
  return { response }
}
