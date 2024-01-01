<script>
  // import app from "../main.js";
  import {
    marked
  } from 'marked';
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
        lex: [],
        cursorPosition: null
      }
    },
    components: {
      lexRender
    },
    created() {
      this.$nextTick(() => {
        this.rende()
      })
      console.log(this.html, this.lex);
    },
    methods: {
      checker(dom) {
        // console.log(this.$refs.textMarkDownEditor.innerText);
        this.nowText = this.$refs.textMarkDownEditor.innerText
        this.rende()
        console.log(this.$refs.textMarkDownEditor.innerText, this.html, this.lex);


      },
      rende() {
        this.lex = marked.lexer((this.nowText == undefined) ? "# 错误 获取文本失败 01" : this.nowText, {
          async: false,
          gfm: false
        })
        this.$nextTick(() => {
          this.$refs.textMarkDownEditor.innerHTML = this.$refs.textMarkDownRender.innerHTML
          this.restoreCursorPosition()
        })
      },
      handleBeforeInput(event) {
        // 保存光标位置
        this.cursorPosition = event.target.selectionStart;
        console.log(event);
        // 你可以在这里添加其他逻辑，例如更新数据等
      },
      restoreCursorPosition() {
        // 恢复光标位置
        if (this.cursorPosition !== null) {
          const editor = this.$refs.textMarkDownEditor;
          console.log(editor);
          editor.setSelectionRange(this.cursorPosition, this.cursorPosition);
        }
      },
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
  <div :onKeyup="checker" @beforeinput="handleBeforeInput" ref="textMarkDownRenderBox" class="textMarkDownRenderBox">
    <div ref="textMarkDownEditor" contenteditable="true" class="textMarkDownEditor">
    </div>
    <div ref="textMarkDownRender" class="textMarkDownRender">

      <lexRender v-for="(item, index) in lex" :key="index" :lexObject="item" />
    </div>

  </div>



</template>

<style scoped>
  .textMarkDownRenderBox {
    outline: none;
    position: relative;
  }

  .textMarkDownRenderBox * {
    outline: none;
    white-space: nowrap;
  }

  .textMarkDownEditor {
    outline: none;
    position: absolute;
    display: block;
    z-index: 1;
    /* top:-22px; */
    left: 0;
    /* visibility: hidden; */

  }

  .textMarkDownRender {
    position: relative;
    z-index: 0;
    visibility: hidden;

  }
</style>