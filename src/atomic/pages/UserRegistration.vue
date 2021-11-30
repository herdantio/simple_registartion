<template>
  <div>
      <div class="mt-24 p-3">
          <StepProgress></StepProgress>
      </div>
      <div class="mt-24 flex justify-center">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Name from "./Name.vue";
import StepProgress from "../organisms/StepProgress.vue";
export default {
    components: { Name, StepProgress }
}
</script>

<style>

</style>