<template>
  <div>
      <div>
          <input type="text" placeholder="Nama" v-model="name"/>
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
      name: '',
    }
  },
  methods: {
    ...mapMutations('registration',['setName']),
    next(){
      this.setName(this.name);
      this.$router.push('/register/nik');
    },
    prev(){
      this.$router.back();
    },
  },
}
</script>

<style>

</style>