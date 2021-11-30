<template>
  <div>
      <div>
          <input type="file"/>
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
      photo: '',
    }
  },
  methods: {
    ...mapMutations('registration',['setPhoto']),
    next(){
      this.setPhoto(this.photo);
      this.$router.push('/register/summary');
    },
    prev(){
      this.$router.back();
    },
  },
}
</script>

<style>

</style>