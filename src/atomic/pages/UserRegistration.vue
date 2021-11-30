<template>
  <div>
      <div>
          <StepProgress></StepProgress>
      </div>
      <div>
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