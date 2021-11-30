<template>
  <div class="flex flex-row justify-around">
      <StepCurrentStatus :isDone="false" stepName="Nama"/>
  </div>
</template>

<script>
import StepCurrentStatus from "../atoms/StepCurrentStatus.vue";
export default {
    components: { StepCurrentStatus }
}
</script>

<style>

</style>