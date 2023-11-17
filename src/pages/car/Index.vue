<script >
export default {

  methods: {
    showCar() {
      this.$router.push('/show')
    }
  }
}
</script>

<template>
<div class="cars">

  <div class="cars_card" @click.prevent="showCar">
    <div class="cars_card-img"></div>
    <div class="about">
      <h3 class="cars_card-name">Mercedes</h3>
      <p class="cars_card-price">от 1 900 000 ₽</p>
    </div>
  </div>
  <div class="cars_card">
    <div class="cars_card-img"></div>
    <div class="about">
      <h3 class="cars_card-name">Lada</h3>
      <p class="cars_card-price">от 5 900 000 ₽</p>
    </div>
  </div>
  <div class="cars_card">
  <div class="cars_card-img"></div>
  <div class="about">
    <h3 class="cars_card-name">BMW</h3>
    <p class="cars_card-price">от 900 000 ₽</p>
  </div>
</div>
  <div class="cars_card">
  <div class="cars_card-img"></div>
  <div class="about">
    <h3 class="cars_card-name">KIA</h3>
    <p class="cars_card-price">от 2 300 000 ₽</p>
  </div>
</div>


</div>
</template>

<style scoped>
.cars{
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.cars_card{
  border: 1px solid #c3c3c3;
}
.cars_card:hover{
  cursor: pointer;
}
.cars_card-img{
  width: 300px;
  height: 300px;
  background-color: #c3c3c3;
}
.about{
  text-align: center;
}


</style>