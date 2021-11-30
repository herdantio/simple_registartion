<template>
  <div class="flex flex-row justify-around">
      <StepCurrentStatus :status="nameStatus" stepName="Nama"/>
      <StepCurrentStatus :status="nikStatus" stepName="NIK"/>
      <StepCurrentStatus :status="addressStatus" stepName="Alamat"/>
      <StepCurrentStatus status="NOT" stepName="Tanggal Lahir"/>
      <StepCurrentStatus status="NOT" stepName="Foto"/>
  </div>
</template>

<script>
import StepCurrentStatus from "../atoms/StepCurrentStatus.vue";
export default {
    components: { StepCurrentStatus },
    computed: {
        nameStatus() {
            return this.$route.path === '/register/name' ? 'CURRENT' : 'DONE';
        },
        nikStatus() {
          if (this.$route.path === '/register/nik') {
            return 'CURRENT';
          }else if (
            this.$route.path === '/register/address' 
            || this.$route.path === '/register/birthdate'
            || this.$route.path === '/register/photo'
            ) {
            return 'DONE';
          }else {
            return 'NOT';
          }
        },
        addressStatus() {
          if (this.$route.path === '/register/address') {
            return 'CURRENT';
          }else if (this.$route.path === '/register/birthdate' || this.$route.path === '/register/photo') {
            return 'DONE';
          }else {
            return 'NOT';
          }
        },
    },
}
</script>

<style>

</style>