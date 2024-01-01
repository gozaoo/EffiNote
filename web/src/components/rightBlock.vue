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

        dom: null,
        scrollAnime: undefined,
        top: 0
      }
    },
    created() {
      // console.log(this);
      this.$nextTick(() => {
        this.dom = document.querySelector('.router')
        this.$refs.router.addEventListener('wheel', (event) => {
          event.preventDefault()
          // console.log(event);

          let dom = this.$refs.routerText
          let currTop = this.top + (event.wheelDeltaY * 0.7);
          this.top = currTop
          let currDomTop = Number(dom.style.top.slice(-dom.style.top.length,-2))
          // console.log(dom);
          if (currTop > 0) {
            this.scrollAnime = anime({
              targets: dom,
              top: [currTop, '0px'],
              update:(anime)=>{
                this.top = Number(dom.style.top.slice(-dom.style.top.length,-2))
              },
              easing: 'spring(1, 100, 30, ' + (-currTop) + ')',
            })
            // console.log((-currTop));
          } else if (-currTop  > dom.offsetHeight - (this.$refs.router.offsetHeight - 100) ) {
            
            this.scrollAnime = anime({
              targets: dom,
              top: [currTop, -dom.offsetHeight + this.$refs.router.offsetHeight - 100 ],
              update:(anime)=>{
                this.top = Number(dom.style.top.slice(-dom.style.top.length,-2))
              },
              easing: 'spring(1, 100, 30, ' + (2 * ( dom.offsetHeight - this.$refs.router.offsetHeight + 100 + currTop )) + ')',
            })
            // this.top = - dom.offsetHeight + 300
            // console.log ( dom.offsetHeight -this.$refs.router.offsetHeight + 100 + currTop ) ;
          } else {
            this.scrollAnime = anime({
              targets: dom,
              top: (currTop>0)?100:currTop,
              duration: 100,
              easing: 'linear',
              update:(anime)=>{
                this.top = Number(dom.style.top.slice(-dom.style.top.length,-2))
              },
            })
            
          }


        })
      })

    },
    watch: {
      leftBarState: {
        handler(newState, oldState) {

          anime({
            targets: this.dom,
            scale: () => {
              if (newState == "wide") {
                return (document.body.offsetWidth - 200) / this.dom.offsetWidth
              } else {
                return 1

              }

            },
            borderRadius: () => {

              if (newState == "wide") {
                return 8 / ((document.body.offsetWidth - 200) / this.dom.offsetWidth) + "px"

                // return 8 / ( (document.body.offsetWidth - 200) / this.dom.offsetWidth) + "px"
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
  <div ref="router" class="router">
    <!-- {{ leftBarState }} -->
    <div ref="routerText" class="text">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
  .router {
    display: block;
    position: absolute;
    top: 8px;
    left: 0px;
    right: 8px;
    bottom: 8px;
    background-color: #fff;
    flex: 1;
    height: calc(100% - 16px);
    /* min-width: calc(100% - 108px); */
    width: calc(100% - 106px);
    /* max-width: calc(100% - 108px); */
    box-sizing: border-box;
    padding: 10px 16px;
    margin: 0 6px;
    border-radius: 8px;
    box-shadow: 0px 0px 8px #0002;
    position: relative;
    overflow: hidden;
    transform-origin: 100% 100%
  }

  .text {
    position: absolute;
    left: 0;
    top: 0;
    min-width: calc(100% - 106px);
    max-width: calc(100% - 106px);
    padding: 10px 16px;
    word-break: break-all;
    line-break: anywhere;
    height: fit-content;
    min-height:  calc(100% - 120px)
;
    transition: 0.2s;
  }
</style>