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
                <div v-if="formFieldProps.xUsername.isSearching"
                  class="align-center flex flex-row items-center text-sm text-blue-900">
                  Searching Twitter/X Username...
                  <LoaderSpinner class="scale-[0.3]" />
                </div>
                <div v-if="formFieldProps.xUsername.details.username != ''" class="mt-3 text-sm text-green-900">
                  [USERNAME: {{ formFieldProps.xUsername.details.username }}] [PUBLIC NAME: {{
                    formFieldProps.xUsername.details.publicName }}]</div>
              </div>
            </div>
            <div class="pb-4 text-[23px] font-light">
              <div class="pb-2">
                What is your Discord ID?
              </div>
              <div>
                <input v-model="discordId" v-bind="discordIdAttrs" type="text"
                  class="w-full border border-black px-6 py-2 outline-none" placeholder="Enter your Discord username" />
                <div class="mt-3 text-sm text-red-500">{{ errors.discordId }}
                </div>
                <div v-if="formFieldProps.discordId.isSearching"
                  class="align-center flex flex-row items-center text-sm text-blue-900">
                  Searching Discord ID...
                  <LoaderSpinner class="scale-[0.3]" />
                </div>
                <div v-if="formFieldProps.discordId.details.username != ''" class="mt-3 text-sm text-green-900">
                  [USERNAME: {{ formFieldProps.discordId.details.username }}] [GLOBAL NAME: {{
                    formFieldProps.discordId.details.publicName }}]</div>
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
                <div v-if="formFieldProps.telegramUsername.isSearching"
                  class="align-center flex flex-row items-center text-sm text-blue-900">
                  Searching Telegram Username...
                  <LoaderSpinner class="scale-[0.3]" />
                </div>
                <div v-if="formFieldProps.telegramUsername.details.username != ''" class="mt-3 text-sm text-green-900">
                  [USERNAME: {{ formFieldProps.telegramUsername.details.username }}] [GLOBAL NAME: {{
                    formFieldProps.telegramUsername.details.publicName }}]</div>
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
        <form @submit="onSubmit">
          <div class="border border-black bg-light-peach-100 p-8 font-[Lexend] text-[25px] font-medium">
            <div class="pb-2">Whitelist Application</div>
            <div class="pb-4 text-[15px] font-light">
              <div class="pb-2">
                What is your Twitter/X username?
              </div>
              <div>
                <input v-model="xUsername" v-bind="xUsernameAttrs" type="text"
                  class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your Twitter/X username" />
                <div v-if="formFieldProps.xUsername.isSearching"
                  class="align-center flex flex-row items-center text-sm text-blue-900">
                  Searching Twitter/X Username...
                  <LoaderSpinner class="scale-[0.3]" />
                </div>
                <div class="mt-3 text-sm text-red-500">{{ errors.xUsername }}</div>
                <div v-if="formFieldProps.xUsername.details.username != ''" class="mt-3 text-sm text-green-900">
                  [USERNAME: {{ formFieldProps.xUsername.details.username }}]<br>[PUBLIC NAME: {{
                    formFieldProps.xUsername.details.publicName }}]</div>
              </div>
            </div>
            <div class="pb-4 text-[15px] font-light">
              <div class="pb-2">
                What is your Discord ID?
              </div>
              <div>
                <input v-model="discordId" v-bind="discordIdAttrs" type="text"
                  class="w-full border border-black px-6 py-2 outline-none" placeholder="Enter your Discord username" />
                <div v-if="formFieldProps.discordId.isSearching"
                  class="align-center flex flex-row items-center text-sm text-blue-900">
                  Searching Discord ID...
                  <LoaderSpinner class="scale-[0.3]" />
                </div>
                <div class="mt-3 text-sm text-red-500">{{ errors.discordId }}</div>
                <div v-if="formFieldProps.discordId.details.username != ''" class="mt-3 text-sm text-green-900">
                  [USERNAME: {{ formFieldProps.discordId.details.username }}]<br>[GLOBAL NAME: {{
                    formFieldProps.discordId.details.publicName }}]</div>
              </div>
            </div>
            <div class="pb-4 text-[15px] font-light">
              <div class="pb-2">
                What is your Telegram @?
              </div>
              <div>
                <input v-model="telegramUsername" v-bind="telegramUsernameAttrs" type="text"
                  class="w-full border border-black px-6 py-2 outline-none" placeholder="Enter your Telegram @" />
                <div v-if="formFieldProps.telegramUsername.isSearching"
                  class="align-center flex flex-row items-center text-sm text-blue-900">
                  Searching Telegram Username...
                  <LoaderSpinner class="scale-[0.3]" />
                </div>
                <div class="mt-3 text-sm text-red-500">{{ errors.telegramUsername }}</div>
                <div v-if="formFieldProps.telegramUsername.details.username != ''" class="mt-3 text-sm text-green-900">
                  [USERNAME: {{ formFieldProps.telegramUsername.details.username }}]<br>[PUBLIC NAME: {{
                    formFieldProps.telegramUsername.details.publicName }}]</div>
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
        </form>
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
    xUsername: yup
      .string()
      .required('Twitter/X Username is required')
      .test('check-x-username', 'Twitter/X username does not exist!', async (value) => {
        try {
          formFieldProps.value.xUsername.fieldValue = value
          const result = await validationFunction(formFieldProps.value.xUsername, useSearchTwitterUsername);
          if (!result) throw new Error()
          return true;
        } catch (error) {
          return false;
        }
      }),
    discordId: yup
      .string()
      .required("Discord ID is required")
      .test('check-discord-id', 'Discord ID does not exist!', async (value) => {
        try {
          formFieldProps.value.discordId.fieldValue = value
          const result = await validationFunction(formFieldProps.value.discordId, useSearchDiscordId);
          if (!result) throw new Error()
          return true;
        } catch (error) {
          return false;
        }
      }),
    telegramUsername: yup
      .string()
      .required("Telegram Username is required")
      .test('check-telegram-username', 'Telegram username does not exist!', async (value) => {
        try {
          formFieldProps.value.telegramUsername.fieldValue = value
          const result = await validationFunction(formFieldProps.value.telegramUsername, useSearchTelegramUsername);
          if (!result) throw new Error()
          return true;
        } catch (error) {
          return false;
        }
      }),
    berachainAdd: yup
      .string()
      .required()
  }))
});

const [xUsername, xUsernameAttrs] = defineField('xUsername', { validateOnBlur: true, validateOnChange: false, validateOnInput: false, validateOnModelUpdate: false })
const [discordId, discordIdAttrs] = defineField('discordId', { validateOnBlur: true, validateOnChange: false, validateOnInput: false, validateOnModelUpdate: false })
const [telegramUsername, telegramUsernameAttrs] = defineField('telegramUsername', { validateOnBlur: true, validateOnChange: false, validateOnInput: false, validateOnModelUpdate: false })
const [berachainAdd, berachainAddAttrs] = defineField('berachainAdd', { validateOnBlur: true, validateOnChange: false, validateOnInput: false, validateOnModelUpdate: false })

const onSubmit = handleSubmit(values => {
  return;
})

interface IformFieldProp {
  fieldValue: string;
  prevFieldValue: string;
  details: {
    username: string;
    publicName: string;
  }
  abortController: AbortController | null;
  errorName: string;
  isSearching: boolean;
  searchErrorValue: string
}

interface IformFieldProps {
  xUsername: IformFieldProp;
  discordId: IformFieldProp;
  telegramUsername: IformFieldProp;
}

const formFieldProps = ref<IformFieldProps>(
  {
    xUsername: {
      fieldValue: "",
      prevFieldValue: "",
      details: {
        username: "",
        publicName: ""
      },
      abortController: null,
      errorName: "xUsername",
      isSearching: false,
      searchErrorValue: "Twitter/X username does not exist!"
    },
    discordId: {
      fieldValue: "",
      prevFieldValue: "",
      details: {
        username: "",
        publicName: ""
      },
      abortController: null,
      errorName: "discordId",
      isSearching: false,
      searchErrorValue: "Discord ID does not exist!"

    },
    telegramUsername: {
      fieldValue: "",
      prevFieldValue: "",
      details: {
        username: "",
        publicName: ""
      },
      abortController: null,
      errorName: "telegramUsername",
      isSearching: false,
      searchErrorValue: "Telegram username does not exist!"
    }
  }
)


const validationFunction = async (props: IformFieldProp, apiFunction: (value: string, abortController: AbortController) => Promise<any>): Promise<boolean | null> => {
  // PREFETCH 
  // OUT OF BLUR WITH NO CHANGE IN THE FIELD INPUT
  const didFieldChange = !(props.prevFieldValue == props.fieldValue)
  const hasError = !(errors.value[props.errorName as keyof typeof errors.value] == "" || errors.value[props.errorName as keyof typeof errors.value] == undefined)
  if (!didFieldChange) {
    if (hasError) {
      return false
    } else {
      return true
    }
  }             // If it did not change then do nothing

  // OUT OF BLUR WITH CHANGE IN THE FIELD INPUT
  else props.prevFieldValue = props.fieldValue    // Otherwise store remember the new username
  setErrors({ [props.errorName]: "" })     // And clear errors
  if (props.abortController != null) props.abortController.abort() // Cancel previous fetch requests
  if (props.fieldValue == "") {
    props.details = { username: "", publicName: "" }// Clear the values of the details
    props.isSearching = false             // Then signal that the fetch is done
    return true                           // If the input field is empty then do nothing
  }

  // PREPARE FOR FETCH REQUEST
  props.abortController = new AbortController()  // Create Abort Controller for the new fetch request
  props.details = { username: "", publicName: "" }// Clear the values of the details

  // PERFORM FETCH REQUEST
  props.isSearching = true                // Signal that the fetch is ongoing
  const { data } = await apiFunction(props.fieldValue, props.abortController)
  if (data != null) {                               // If the fetch wasn't aborted (Which means that there wasn't another fetch request)
    props.isSearching = false             // Then signal that the fetch is done
  }

  // POST FETCH
  const containsError = 'error' in data || data.publicName == undefined
  if (containsError) {
    setErrors({ [props.errorName]: props.searchErrorValue }) // Apply errors immediately without waiting for other async validators
    return false
  } // If there was an error field, then the user doesn't exist
  props.details = {                               // If the fetch was successful and the user exists, then record it
    username: data.username,
    publicName: data.publicName
  }

  // CLEAN UP
  setErrors({ [props.errorName]: "" })                     // Clear error fields immediately without waiting for other async validators
  return true
}
</script>
