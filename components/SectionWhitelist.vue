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
        <Form @submit="onSubmit" :validation-schema="formSchema">
          <div class="border border-black bg-light-peach-100 p-8 font-[Lexend] text-[32px] font-medium">
            <div class="pb-2">Whitelist Application</div>
            <div class="pb-4 text-[23px] font-light">
              <div class="pb-2">
                What is your Twitter/X username?
              </div>
              <div>
                <Field name="xusername" type="text" class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your Twitter/X username" />
                <ErrorMessage name="xusername" class="text-sm text-red-500" />
              </div>
            </div>
            <div class="pb-4 text-[23px] font-light">
              <div class="pb-2">
                What is your Discord username?
              </div>
              <div>
                <Field name="discordusername" type="text" class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your Discord username" />
                <ErrorMessage name="discordusername" class="text-sm text-red-500" />
              </div>
            </div>
            <div class="pb-4 text-[23px] font-light">
              <div class="pb-2">
                What is your Telegram @?
              </div>
              <div>
                <Field name="telegramusername" type="text" class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your Telegram @" />
                <ErrorMessage name="telegramusername" class="text-sm text-red-500" />
              </div>
            </div>
            <div class="pb-4 text-[23px] font-light">
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
          <div class="mt-8 flex flex-row-reverse">
            <button
              class="border border-black bg-light-yellow px-8 py-2 font-[Lexend] text-[24px] font-normal hover:bg-light-brown">Submit</button>
          </div>
        </Form>
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
      <div class="relative flex items-center justify-center h-full w-full">
        <div class="bg-white border border-black p-2">
          <img src="/bear.png" class="mx-auto w-[100px]" />
          <div><i>./bear.gif</i></div>
        </div>
      </div>
    </div>

    <!-- BOTTOM SECTION -->
    <div class="relative mt-5">
      <!-- FORM -->
      <div class="relative z-10">
        <Form @submit="onSubmit" :validation-schema="formSchema">
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
                What is your Discord username?
              </div>
              <div>
                <Field name="discordusername" type="text" class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your Discord username" />
                <ErrorMessage name="discordusername" class="text-sm text-red-500" />
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
import { Form, Field, ErrorMessage } from 'vee-validate';

// TO DO: Connect submit endpoint here
const onSubmit = (values: any) => {
  console.log(values)
  return;
}

const formSchema = {
  xusername: (value: any) => {
    console.log(value)
    if (!value) {
      return 'This field is required';
    }

    const regex = /^[A-Za-z0-9_]{1,15}$/;
    if (!regex.test(value)) {
      return 'Invalid Twitter/X username'
    }
    return true;

  },
  discordusername: (value: any) => {

    if (!value) {
      return 'This field is required';
    }

    const regex = /^[A-Za-z0-9_-]{2,32}$/;
    if (!regex.test(value)) {
      return 'Invalid Discord username'
    }
    return true;
  },
  telegramusername: (value: any) => {

    if (!value) {
      return 'This field is required';
    }

    const regex = /^[A-Za-z][A-Za-z0-9_]{4,31}$/;
    if (!regex.test(value)) {
      return 'Invalid Telegram username'
    }
    return true;
  },
  berachainaddress: (value: any) => {

    if (!value) {
      return 'This field is required';
    }
    return true;
  },
};
</script>
