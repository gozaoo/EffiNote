<script>
  // import app from "../main.js";
  import { marked } from 'marked';
  import lexRender from './lexRender.vue'
  
  export default {
    name: 'textRE',
    props: {
      id: Number,
      text: String,
    },
    data() {
      return {
        html: "",
        nowText: this.text,
        lex: []
      }
    },
    components:{
      lexRender
    },
    created() {
      this.$nextTick(()=>{
        this.rende()
      })
      console.log(this.html,this.lex);
    },
    methods:{
      checker(dom){
          console.log(this.$refs.textMarkDownRender.innerText);
          this.nowText = this.$refs.textMarkDownRender.innerText

          this.rende()
          console.log(this.lex);

      },
      rende(){
          this.lex = marked.lexer((this.nowText==undefined)?"# 错误 获取文本失败 01":this.nowText,{
            async: false,
            gfm: false
          })
      }
    },
    watch: {
      text: {
        handler(newState, oldState) {
          this.rende()
        }
      },
      
      html: {
        handler(newState, oldState) {
          
          this.rende()
        }
      }
    }
  }
</script>

<template>
  <div @keyup="checker" contenteditable="true"  ref="textMarkDownRender" class="textMarkDownRender" >

      <lexRender  v-for="(item, index) in lex" :key="index" :lexObject="item"/>
  </div>
  


</template>

<style scoped>
.textMarkDownRender{
  outline: none;

  position: relative;
}
.textMarkDownRender *{
  outline: none;
  white-space:nowrap;
}
  .textMarkDownEditor {
    outline: none;
    position: absolute;
    z-index: 1;
  }
  .textMarkDownDisplayer {
    position: absolute;
    /* visibility: hidden; */
    visibility: hidden;

    z-index: 0;
  }
</style>