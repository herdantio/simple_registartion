<template>
  <div>
      <div>
          <textarea type="text" placeholder="Address" v-model="address"/>
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
      address: '',
    }
  },
  methods: {
    ...mapMutations('registration',['setAddress']),
    next(){
      this.setAddress(this.address);
      this.$router.push('/register/birthdate');
    },
    prev(){
      this.$router.back();
    },
  },
}
</script>

<style>

</style>