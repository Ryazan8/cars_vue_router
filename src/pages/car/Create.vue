<script >

</script>

<template>
  <p class="p">
    <input class="input" type="text" placeholder="Название">
  </p>
  <p>
    <input class="input" type="number" placeholder="Цена">
  </p>
  <button class="btn">Добавить</button>
</template>

<style scoped>
.p{
  margin-top: 50px;
}
.input{
  font-size: 20px;
  border: none;
  background-color: #C3C3C3;
  padding: 10px 15px;
  border-radius: 10px;
}
.btn {
  font-size: 20px;
  border: none;
  background-color: #C3C3C3;
  padding: 10px 15px;
  border-radius: 10px;
  color: #6A6A6A;
  transition: all 0.2s ease-in-out;
}
.btn:hover{
  cursor: pointer;
  color: #000;
}
</style>