<script>
  // import app from "../main.js";
  import { marked } from 'marked';
  
  
  export default {
    name: 'textRE',
    props: {
      id: Number,
      text: String,
    },
    data() {
      return {
        html: ""
      }
    },
    created() {
      this.html = marked.parse((this.text==undefined)?"# 错误 获取文本失败 01":this.text,{
        async: false
      })
      console.log(this.html);

      
    },
    methods:{
      checker(dom){
        console.log(dom.srcElement.innerText);
      }
    },
    watch: {
      text: {
        handler(newState, oldState) {
          this.html = marked.parse((this.text==undefined)?"# 错误 获取文本失败 01":this.text,{
            async: false
          })
        }
      },
      
      html: {
        handler(newState, oldState) {
          console.log(newState);
        }
      }
    }
  }
</script>

<template>
  <div contenteditable="true" @keydown="checker" v-html="html" class="textMarkDownRender" />

</template>

<style scoped>
  .textMarkDownRender {
    outline: none;
  }
</style>