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
    getStates(num){
      return axios(process.env.VUE_APP_BACKEND + '/states/' + num, {
        method: 'GET'
      })
          .then((res)=>{
            res.data.forEach((el)=>{
              if(el.next_num){
                this.next_cases.push(el);
                return;
              }
                this.text = el.answer;
            });
          })
          .catch((err)=>{
            console.log("ERROR:::"+err)
          })
    },
  },
  mounted() {
    this.getStates(0)
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
