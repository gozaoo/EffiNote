<script>
  // import app from "../main.js";
  import { handleError } from 'vue'
import './skin.css'
  let typeMap = {
    heading:(depth)=>{
        let text = ""
        for (let i = 0; i < depth; i++) {
            text += "#"
        }
        return {type:'h'+depth,text}
    }
  }

  export default {
    name: 'lexRender',
    props: {
      lexObject: Object,
    },
    data() {
      return {
        head: {
            type: '',
            text: ''
        },
        content: ""
      }
    },
    created() {
        
        this.rende()
    },
    methods:{
        rende(){
            if(this.lexObject !=undefined){
            this.head = (typeMap[this.lexObject.type] != undefined)?typeMap[this.lexObject.type](this.lexObject.depth):this.lexObject.type;
            this.content = this.lexObject.text||""
        }
        }
    },
    watch: {
        lexObject: {
        handler(newState, oldState) {
          
          this.rende()
        }
      }
    }
  }
</script>

<template>
  <span :class="head.type">
    <span :class="['tag','tag'+head.type]">{{ head.text + ' ' }}</span>
    <span>{{ content }}</span>
  </span>


</template>

<style>
  
</style>