<script setup>
import iconToClick from './iconToClick.vue'

defineProps({
  leftBarState: String,
})

const emit = defineEmits(['leftBarChange'])



import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

  function newState(newState){
    emit('leftBarChange', newState); // 触发一个自定义事件input，并将inputText的值作为参数传递给父组件
  }


</script>

<template>
  <div class="topbar">
    <iconToClick @click="this.$router.go(-1)">
      <i class="bi bi-chevron-left"></i>
    </iconToClick>
    <div data-tauri-drag-region class="drag" >
      <div  data-tauri-drag-region :style="(leftBarState == 'short')?'margin-left:18px':null" class="title">EffiNote</div> 
    </div>
    <div>
      <div>
        
    <iconToClick @click="newState((leftBarState=='short')?'wide':'short')">
      <i class="bi bi-list"></i>
    </iconToClick>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .topbar{
    height: 34px;
    display: flex;
    align-items: center;
    gap: 7px;
    user-select: none;
  }

  .drag{
    -webkit-app-drag:drag;
    display: block;
    height: 34px;
    flex: 1;
    display: flex;
    align-items: center;

  }
  .title{
    font-size: 15px;
    transition: 0.25s cubic-bezier(.5,.3,.2,1);
  }
</style>
