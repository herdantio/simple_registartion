<template>
  <div>
      <div>
          <input type="date" v-model="date"/>
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
      date: '',
    }
  },
  methods: {
    ...mapMutations('registration',['setDate']),
    next(){
      this.setDate(this.date);
      this.$router.push('/register/photo');
    },
    prev(){
      this.$router.back();
    },
  },
}
</script>

<style>

</style>