<template>
  <div>
    <div class="flex justify-center mt-48">
      <p class="text-3xl">Start Page</p>
    </div>
    <div class="flex justify-center mt-8">
      <router-link to="/register/name">
        <RButton>Start</RButton>
      </router-link>
    </div>
  </div>
</template>

<script>
import RButton from "../atoms/RButton.vue";
export default {
    components: { RButton }
}
</script>

<style>

</style>