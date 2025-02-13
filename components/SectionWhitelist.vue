<template>
  <div class="relative flex flex-row justify-between bg-light-peach px-16 pb-12 pt-[100px]">
    <!-- Decorations -->
    <div class="absolute left-[400px] top-[50px] -z-0 h-[300px] w-[1200px] border border-black"></div>
    <div class="absolute left-[-400px] top-[400px] -z-0 h-[300px] w-[1200px] border border-black"></div>
    <div class="absolute bottom-[-100px] right-[-400px] -z-0 h-[300px] w-[1200px] border border-black"></div>

    <!-- Left Section -->
    <div class="relative z-10 w-[800px]">
      <div class="bg-red absolute left-[225px] top-[100px] rounded-b-[25px] border border-black">
        <div class="flex h-[50px] w-full flex-row-reverse border-b border-black bg-egg-white p-2">
          <div class="flex items-center justify-center border border-black p-2 text-[25px] font-bold">
            <p>X</p>
          </div>
          <div class="mr-2 border border-black px-3 pb-4 text-center text-[25px] font-bold">-</div>
        </div>
        <div class="rounded-b-[25px] bg-white p-16">
          <img src="/bear.png" class="w-[300px]" />
        </div>
      </div>
      <div class="bg-red absolute left-[200px] top-[75px] rounded-b-[25px] border border-black">
        <div class="flex h-[50px] w-full flex-row-reverse border-b border-black bg-egg-white p-2 ">
          <div class="flex items-center justify-center border border-black p-2 text-[25px] font-bold">
            <p>X</p>
          </div>
          <div class="mr-2 border border-black px-3 pb-4 text-center text-[25px] font-bold">-</div>
        </div>
        <div class="rounded-b-[25px] bg-white p-16">
          <img src="/bear.png" class="w-[300px]" />
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
      <div class="relative z-20">
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
                <ErrorMessage name="xusername" class="text-red-500 text-sm" />
              </div>
            </div>
            <div class="pb-4 text-[23px] font-light">
              <div class="pb-2">
                What is your Discord username?
              </div>
              <div>
                <Field name="discordusername" type="text" class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your Discord username" />
                <ErrorMessage name="discordusername" class="text-red-500 text-sm" />
              </div>
            </div>
            <div class="pb-4 text-[23px] font-light">
              <div class="pb-2">
                What is your Telegram @?
              </div>
              <div>
                <Field name="telegramusername" type="text" class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your Telegram @" />
                <ErrorMessage name="telegramusername" class="text-red-500 text-sm" />
              </div>
            </div>
            <div class="pb-4 text-[23px] font-light">
              <div class="pb-2">
                What is your BeraChain address?
              </div>
              <div>
                <Field name="berachainaddress" type="text" class="w-full border border-black px-6 py-2 outline-none"
                  placeholder="Enter your BeraChain address" />
                <ErrorMessage name="berachainaddress" class="text-red-500 text-sm" />
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
