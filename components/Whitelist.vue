<template>
  <div class="flex flex-row justify-between px-28 pt-[100px] bg-red-100">
    <div class="bg-green-700 w-[800px]">Left Section</div>
    <div class="bg-pink-600 w-[800px]">
      <form @submit.prevent="submitForm">
        <div class="bg-green-600">
          <div>Whitelist Application</div>
          <div>
            <div>
              What is your Twitter/X username?
            </div>
            <div>
              <input type="text" placeholder="Enter your Twitter/X username">
            </div>
          </div>
          <div>
            <div>
              What is your Discord username?
            </div>
            <div>
              <input type="text" placeholder="Enter your Discord username">
            </div>
          </div>
          <div>
            <div>
              What is your Telegram @?
            </div>
            <div>
              <input type="text" placeholder="Enter your Telegram @">
            </div>
          </div>
        </div>
        <div class="flex flex-row-reverse">
          <button>Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
const submitForm = () => {
  return;
}
</script>
