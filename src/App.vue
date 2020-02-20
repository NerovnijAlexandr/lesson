<template>
  <div class="text-center" id="app">
      <router-link to='/' active-class="font-bold" exact>Home</router-link> 
      <router-link to='/Users' active-class="font-bold">Users List</router-link> 
      <router-link to='/Employees' active-class="font-bold">Employees List</router-link> 

      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },

  data() {
    return {
             
          }
      }
}
</script>

<style src='./assets/css/tailwind.css'></style>
