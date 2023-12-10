<script>
  import {
    defineProps,
    watch,
    ref,
    computed
  } from 'vue'
  import anime from 'animejs'
  import iconToClick from './iconToClick.vue'

  export default {
    name: 'RightBlock',
    props: {
      leftBarState: String,
    },
    data() {
      return {
        
      dom: null
      }
    },
    created() {
      console.log(this);
      this.$nextTick(()=>{this.dom = document.querySelector('.router')})
    },
    watch: {
      leftBarState: {
        handler(newState, oldState) {
          
          anime({
            targets:  this.dom,
            scale: () => {
              if(newState == "wide"){
                return (document.body.offsetWidth - 200) / this.dom.offsetWidth
              } else {
                return (document.body.offsetWidth - 50) / this.dom.offsetWidth

              }

            },
            borderRadius:()=>{

              if(newState == "wide"){
                return 8 / ( (document.body.offsetWidth - 200) / this.dom.offsetWidth) + "px"
              } else {
                return '8px'

              }
            },
            easing: 'cubicBezier(.5,.3,.2,1)',
            duration: 250
          })
        }
      }
    }
  }
</script>

<template>
  <div class="router">
    {{ leftBarState }}
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .router {
    display: block;
    position: absolute;
    top: 8px;
    right: 8px;
    bottom: 8px;
    background-color: #fff;
    flex: 1;
    height: calc(100% - 16px );
    /* min-width: calc(100% - 108px); */
    width:calc(100% - 106px) ;
    /* max-width: calc(100% - 108px); */
    box-sizing: border-box;
    padding: 10px 16px;
    margin-left: 10px;
    border-radius: 8px;
    box-shadow: 0px 0px 8px #0002;
    position: relative;
    transform-origin: 100% 100%
  }
</style>