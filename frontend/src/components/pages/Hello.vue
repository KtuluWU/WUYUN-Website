<template>
  <div class="search">
    <form v-on:submit.prevent="getPics()">
      <input type="text" placeholder="query" v-model="query">
    </form>
    <div class="results" v-if="results">
      <div v-for="result in results">
        {{result}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'search',
  props: [],
  data() {
    return {
      query: '',
      results: ''
    }
  },
  methods: {
    getPics() {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
