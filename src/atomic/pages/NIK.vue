<template>
  <div>
      <div>
          <input type="text" placeholder="NIK" v-model="nik"/>
      </div>
      <div class="flex justify-between mt-24">
        <button class="bg-yellow-500" @click="prev">Prev</button>
        <button class="bg-blue-500" @click="next">Next</button>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data(){
    return {
      nik: '',
    }
  },
  methods: {
    ...mapMutations('registration',['setNIK']),
    next(){
      this.setNIK(this.nik);
      this.$router.push('/register/address');
    },
    prev(){
      this.$router.back();
    },
  },
}
</script>

<style>

</style>