<template>
  <div id="app">
    <v-answer-block
        :text="text"
    />

    <v-next-block
        v-for="next in next_cases"
        :key="next.id"
        :text="next.answer"
    />

  </div>
</template>

<script>

import vAnswerBlock from './components/v-answer-block';
import vNextBlock from './components/v-next-block';
import axios from "axios";

export default {
  name: 'App',
  components: {
    vAnswerBlock,
    vNextBlock
  },
  data(){
    return {
      text:"",
      next_cases: [],
    }
  },
  methods:{
    getAnswerData(num){
      // FIXME: В будущем брать из env файла
      let path = 'http://192.168.0.102:3050/states/'
      return axios(path+num, {method: 'GET'})
          .then((res)=>{
            //FIXME: Надо нормально организовать это дерьмо
            this.text = res.data[1].answer;
            this.text = res.data[1].answer;
            this.next_cases = res.data;
      })
          .catch((err)=>{
            console.log("ERROR:::"+err)
          })
    }
  },
  mounted() {
    this.getAnswerData(0)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 15%;
  margin-right: 15%;
  display: flex;
  flex-display: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
