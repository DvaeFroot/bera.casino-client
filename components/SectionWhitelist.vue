<template>
  <!-- DESKTOP VIEW -->
  <div id="section-desktop-whitelist"
    class="relative hidden flex-row justify-between overflow-hidden bg-light-peach px-16 pb-12 pt-[100px] sm:flex">
    <!-- Decorations -->
    <div class="absolute  left-[400px] top-[50px] -z-0 h-[300px]  w-[1200px] max-w-full border border-black"></div>
    <div class="absolute  left-[-400px] top-[400px] -z-0 h-[300px]  w-[1200px] max-w-full border border-black"> </div>
    <div class="absolute  bottom-[-100px] right-[-400px] -z-0 h-[300px]  w-[1200px] border border-black"> </div>

    <!-- Left Section -->
    <div class="flex w-[800px] items-center justify-center">
      <div class="relative flex h-full w-[400px] items-center justify-center">
        <div class="absolute z-10">
          <div class="z-10 border border-black bg-white p-8">
            <img src="/bear.png" class="w-[300px]" />
            <div><i>./bear.gif</i></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div class="relative w-[800px]">
      <!-- Decoration -->
      <div class="absolute bottom-[70px] left-[15px] z-10 w-full">
        <div class="h-[560px] border border-black bg-light-peach-100 p-8 font-medium ">
        </div>
      </div>

      <!-- FORM -->
      <div class="relative z-10">
        <form @submit.prevent="onSubmit">
          <div class="border border-black bg-light-peach-100 p-8 font-[Lexend] text-[32px] font-medium">
            <div class="pb-2">Whitelist Application</div>
            <div class="pb-4 text-[23px] font-light">
              <div class="pb-2">
                What is your Twitter/X username?
              </div>
              <div>
                <input v-model="xUsername" v-bind="xUsernameAttrs" type="text"
                  class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your Twitter/X username" />
                <div name="xusername" class="mt-3 text-sm text-red-500"> {{ errors.xUsername }}</div>
                <div v-if="isSearchingXUsername" class="align-center flex flex-row items-center text-sm text-blue-900">
                  Searching Twitter/X Username...
                  <LoaderSpinner class="scale-[0.3]" />
                </div>
                <div v-if="xDetails.username != ''" class="mt-3 text-sm text-green-900">
                  [USERNAME: {{ xDetails.username }}] [PUBLIC NAME: {{ xDetails.publicName }}]</div>
              </div>
            </div>
            <div class="pb-4 text-[23px] font-light">
              <div class="pb-2">
                What is your Discord ID?
              </div>
              <div>
                <input v-model="discordId" v-bind="discordidAttrs" type="text"
                  class="w-full border border-black px-6 py-2 outline-none" placeholder="Enter your Discord username" />
                <div class="mt-3 text-sm text-red-500">{{ errors.discordId }}
                </div>
                <div v-if="isSearchingDiscordId" class="align-center flex flex-row items-center text-sm text-blue-900">
                  Searching Discord ID...
                  <LoaderSpinner class="scale-[0.3]" />
                </div>
                <div v-if="discordDetails.username != ''" class="mt-3 text-sm text-green-900">
                  [USERNAME: {{ discordDetails.username }}] [GLOBAL NAME: {{ discordDetails.globalName }}]</div>
              </div>
            </div>
            <div class="pb-4 text-[23px] font-light">
              <div class="pb-2">
                What is your Telegram @?
              </div>
              <div>
                <input v-model="telegramUsername" v-bind="telegramUsernameAttrs" type="text"
                  class="w-full border border-black px-6 py-2 outline-none" placeholder="Enter your Telegram @" />
                <div class="mt-3 text-sm text-red-500">{{ errors.telegramUsername }} </div>
                <div v-if="isSearchingTelegramUsername"
                  class="align-center flex flex-row items-center text-sm text-blue-900">
                  Searching Telegram Username...
                  <LoaderSpinner class="scale-[0.3]" />
                </div>
                <div v-if="telegramDetails.username != ''" class="mt-3 text-sm text-green-900">
                  [USERNAME: {{ telegramDetails.username }}] [GLOBAL NAME: {{ telegramDetails.publicName }}]</div>
              </div>
            </div>
            <div class="pb-4 text-[23px] font-light">
              <div class="pb-2">
                What is your BeraChain address?
              </div>
              <div>
                <input v-model="berachainAdd" v-bind="berachainAddAttrs" type="text"
                  class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your BeraChain address" />
                <div class="text-sm text-red-500"> {{ errors.berachainAdd }}</div>
              </div>
            </div>
          </div>
          <div class="mt-8 flex flex-row-reverse">
            <button
              class="border border-black bg-light-yellow px-8 py-2 font-[Lexend] text-[24px] font-normal hover:bg-light-brown">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- MOBILE VIEW -->
  <div id="section-mobile-whitelist"
    class="relative flex flex-col justify-between overflow-hidden bg-light-peach px-4 pb-12 pt-[25px] sm:hidden">
    <!-- Decorations -->
    <div class="absolute left-[100px] top-[400px] -z-0 h-[300px]  w-[1200px] max-w-full border border-black">
    </div>
    <div class="absolute left-[50px] top-[800px] -z-0 h-[300px]  w-[1200px] max-w-full border border-black">
    </div>
    <div class="absolute  bottom-[-100px] right-[-100px] -z-0 h-[300px]  w-[1200px] border border-black">
    </div>

    <!-- TOP  SECTION -->
    <div class="flex">
      <div class="relative flex h-full w-full items-center justify-center">
        <div class="border border-black bg-white p-2">
          <img src="/bear.png" class="mx-auto w-[100px]" />
          <div><i>./bear.gif</i></div>
        </div>
      </div>
    </div>

    <!-- BOTTOM SECTION -->
    <div class="relative mt-5">
      <!-- FORM -->
      <div class="relative z-10">
        <Form @submit="onSubmit">
          <div class="border border-black bg-light-peach-100 p-8 font-[Lexend] text-[25px] font-medium">
            <div class="pb-2">Whitelist Application</div>
            <div class="pb-4 text-[15px] font-light">
              <div class="pb-2">
                What is your Twitter/X username?
              </div>
              <div>
                <Field name="xusername" type="text" class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your Twitter/X username" />
                <ErrorMessage name="xusername" class="text-sm text-red-500" />
              </div>
            </div>
            <div class="pb-4 text-[15px] font-light">
              <div class="pb-2">
                What is your Discord ID?
              </div>
              <div>
                <Field name="discordusername" type="text" class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your Discord username" />
                <ErrorMessage name="discordusername" class="text-sm text-red-500" />
                <div v-if="discordDetails.username != ''" class="text-sm text-green-900">
                  Username: {{ discordDetails.username }} Global Name: {{ discordDetails.globalName }}</div>
              </div>
            </div>
            <div class="pb-4 text-[15px] font-light">
              <div class="pb-2">
                What is your Telegram @?
              </div>
              <div>
                <Field name="telegramusername" type="text" class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your Telegram @" />
                <ErrorMessage name="telegramusername" class="text-sm text-red-500" />
              </div>
            </div>
            <div class="pb-4 text-[15px] font-light">
              <div class="pb-2">
                What is your BeraChain address?
              </div>
              <div>
                <Field name="berachainaddress" type="text" class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your BeraChain address" />
                <ErrorMessage name="berachainaddress" class="text-sm text-red-500" />
              </div>
            </div>
          </div>
          <div class="mt-4 flex flex-row-reverse">
            <button
              class="border border-black bg-light-yellow px-8 py-2 font-[Lexend] text-[18px] font-normal hover:bg-light-brown">Submit</button>
          </div>
        </Form>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { useForm, Form, Field, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup';


const { errors, handleSubmit, defineField, setErrors } = useForm({
  validationSchema: toTypedSchema(yup.object({
    xUsername: yup.string().required('Twitter/X Username is required').test('check-x-username', 'Username does not exist!', async (value) => {
      try {
        await validateXUsername(value);
        return true;
      } catch (error) {
        return false;
      }
    }),
    discordId: yup.string().required("Discord ID is required").test('check-discord-id', 'Discord ID does not exist!', async (value) => {
      try {
        await validateDiscordId(value);
        return true;
      } catch (error) {
        return false;
      }
    }),
    telegramUsername: yup.string().required("Telegram Username is required").test('check-telegram-username', 'Telegram Username does not exist!', async (value) => {
      try {
        await validateTelegramUsername(value);
        return true;
      } catch (error) {
        return false;
      }
    }),
    berachainAdd: yup.string().required()
  }))
});

const [xUsername, xUsernameAttrs] = defineField('xUsername', { validateOnBlur: true, validateOnChange: false, validateOnInput: false, validateOnModelUpdate: false })
const [discordId, discordidAttrs] = defineField('discordId', { validateOnBlur: true, validateOnChange: false, validateOnInput: false, validateOnModelUpdate: false })
const [telegramUsername, telegramUsernameAttrs] = defineField('telegramUsername', { validateOnBlur: true, validateOnChange: false, validateOnInput: false, validateOnModelUpdate: false })
const [berachainAdd, berachainAddAttrs] = defineField('berachainAdd', { validateOnBlur: true, validateOnChange: false, validateOnInput: false, validateOnModelUpdate: false })

const onSubmit = handleSubmit(values => {
  console.log("This just fucking works lol")
  return;
})

let currentAbortControllerX: null | AbortController = null
let currentAbortControllerDiscord: null | AbortController = null
let currentAbortControllerTelegram: null | AbortController = null

// TWITTER/X
const xDetails = ref<{ username: string, publicName: string }>({
  username: "",
  publicName: ""
})
const isSearchingXUsername = ref<Boolean>(false);
let prevXUsername = ""
const validateXUsername = async (username: string) => {
  if (prevXUsername == username && (errors.value.xUsername == "" || errors.value.xUsername == undefined)) return
  else prevXUsername = username
  setErrors({ xUsername: "" })

  if (currentAbortControllerX != null) {
    currentAbortControllerX.abort()
  }
  currentAbortControllerX = new AbortController()

  if (username == "") throw new Error("Error")
  xDetails.value = { username: "", publicName: "" }

  isSearchingXUsername.value = true
  const { data } = await useSearchTwitterUsername(username, currentAbortControllerX)
  if (data.value != null) {
    isSearchingXUsername.value = false
  }

  if ('error' in data.value) throw new Error("Error")
  xDetails.value = { username: data.value.username, publicName: data.value.publicName }
  setErrors({ xUsername: "" })
}


// DISCORD
const discordDetails = ref<{ username: string, globalName: string }>({
  username: "",
  globalName: ""
});
const isSearchingDiscordId = ref<Boolean>(false);
let prevDiscordId = ""
const validateDiscordId = async (id: string) => {
  if (prevDiscordId == id && (errors.value.discordId == "" || errors.value.discordId == undefined)) return
  else prevDiscordId = id
  setErrors({ discordId: "" })

  if (currentAbortControllerDiscord != null) {
    currentAbortControllerDiscord.abort()
  }
  if (id == "") throw new Error("Error");
  currentAbortControllerDiscord = new AbortController()
  discordDetails.value = { username: "", globalName: "" }

  isSearchingDiscordId.value = true
  const { data } = await useSearchDiscordId(id, currentAbortControllerDiscord)
  isSearchingDiscordId.value = false

  if ('message' in data) setErrors({ discordId: "Discord ID does not exist!" });
  discordDetails.value = { username: data.username, globalName: data.raw.global_name }
  setErrors({ discordId: "" })
}


// TELEGRAM
const telegramDetails = ref<{ username: string, publicName: string }>({
  username: "",
  publicName: ""
});
const isSearchingTelegramUsername = ref<Boolean>(false);
let prevTelegramUsername = ""
const validateTelegramUsername = async (username: string) => {
  if (prevTelegramUsername == username && (errors.value.telegramUsername == "" || errors.value.discordId == undefined)) return
  else prevTelegramUsername = username
  setErrors({ telegramUsername: "" })

  if (currentAbortControllerTelegram != null) {
    currentAbortControllerTelegram.abort()
  }
  if (username == "") return
  currentAbortControllerTelegram = new AbortController()
  telegramDetails.value = { username: "", publicName: "" }

  isSearchingTelegramUsername.value = true
  const { data, error } = await useSearchTelegramUsername(username, currentAbortControllerTelegram)
  if (data.value != null) {
    isSearchingTelegramUsername.value = false
  }

  if ('error' in data.value) throw new Error("Error");
  telegramDetails.value = { username: data.value.username, publicName: data.value.publicName }
  setErrors({ telegramUsername: "" })
}
</script>
