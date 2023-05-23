<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',

  mounted() {
    axios.get('/api/test/admin')
      .then(resp => {
        this.title = resp.data.title;
      })
  },
  data() {
    return {
      title: ''
    }
  }
}
</script>
