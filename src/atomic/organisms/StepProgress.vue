<template>
  <div class="flex flex-row justify-around">
      <StepCurrentStatus status="CURRENT" stepName="Nama"/>
      <StepCurrentStatus status="NOT" stepName="NIK"/>
      <StepCurrentStatus status="NOT" stepName="Alamat"/>
      <StepCurrentStatus status="NOT" stepName="Tanggal Lahir"/>
      <StepCurrentStatus status="NOT" stepName="Foto"/>
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