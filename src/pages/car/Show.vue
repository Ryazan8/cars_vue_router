<script setup>

</script>

<template>
  <div class="cars">
    <div class="cars_card">
      <div class="cars_card-img"></div>
      <div class="about">
        <h3 class="cars_card-name">Mercedes</h3>
        <p class="cars_card-price">от 1 900 000 ₽</p>
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
.cars_card-img{
  width: 300px;
  height: 300px;
  background-color: #c3c3c3;
}
.about{
  text-align: center;
}
</style>