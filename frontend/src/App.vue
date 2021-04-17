<template>
  <div class="p-3">
    <div class="mx-auto max-w-screen-lg flex items-center justify-center">
      <router-link to="/" class="mx-2 btn">Home</router-link>
      <router-link to="/all" class="mx-2 btn">All Quotes</router-link>
    </div>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.btn{
  @apply border-2 border-transparent bg-green-500 ml-3 py-2 px-4 font-bold uppercase text-white rounded transition-all hover:border-green-500 hover:bg-transparent hover:text-green-500
}
</style>

<script>
import { useStore } from 'vuex';
import { onMounted } from 'vue';
export default {
  setup () {
    const store = useStore();
    onMounted(() => {
      store.commit('GetAllQuotes');
    });
  }
}
</script>