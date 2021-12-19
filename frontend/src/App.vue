<template>
  <div id="app">
    <v-answer-block
        :text="text"
    />

    <div class="answers-block"
        v-for="next in next_cases"
        :key="next.id"
        @click="setState(next.next_num)">
      <v-next-block
          :text="next.answer"
      />
    </div>

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
    setState(num){
      return axios(process.env.VUE_APP_BACKEND + '/states/' + num, {
        method: 'GET'
      })
          .then((res)=>{
            this.next_cases=[];
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
    this.setState(0)
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
.answers-block{
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
