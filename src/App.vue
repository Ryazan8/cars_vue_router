<template>
  <div class="container">
    <div class="navigation">
      <router-link class="nav" to="/">Главная</router-link>
      <router-link class="nav" to="/index">Машины</router-link>
      <router-link class="nav" to="/create">Добавить</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

</script>

<style>

.container{
  width: 100%;
  max-width: 1440px;
  margin: 50px auto;
  background: url("img/");
}
.navigation{
  display: flex;
  justify-content: center;
  margin-right: 20px;
}

.nav{
  color: #000;
  text-decoration: none;
  font-size: 25px;
  padding-right: 30px;
}
.nav:hover{
  opacity: 0.6;
}
</style>
