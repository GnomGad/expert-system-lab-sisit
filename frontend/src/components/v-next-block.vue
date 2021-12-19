<template>
  <div class="v-next-block">
    <h3>{{text}}</h3>
  </div>
</template>

<script>
export default {
  name: "v-next-block",
  props:{
    text:{
      type:String,
      default(){
        return "";
      }
    },
  }
}
</script>

<style >
.v-next-block{
  width: 80%;
  border: 4px solid green;
  padding: 2px;
  margin-bottom: 5px;
  border-radius: 5px
}
.v-next-block:hover{
  border: 4px solid #413f3f; /* Ширина, вид и цвет рамки */
  cursor: pointer;
}
h3{
  font-size: 26px;
  text-transform: capitalize;
  margin: 0px;
}
</style>
