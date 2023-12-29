<script setup>
// import flexColumnRow from '../../components/flexColumnRow.vue';
// import musicCard from '../../components/musicCard.vue';
import textRE from '../../components/textRE.vue';


import { useRouter, useRoute } from 'vue-router'

// const router = useRouter()
// const route = useRoute()
</script>

<template>
    <textRE :text="'# 你好\n # 你好\n # 你好\n # 你好\n # 你好\n # 你好\n # 你好\n # 你好\n # 你好\n # 你好\n # 你好\n # 你好\n # 你好\n # 你好\n  ### 欢迎使用EffiNote'" :id="0"></textRE>
    <!-- <h1>a</h1> -->
</template>

<style scoped>
    .buttom{
        height: 34px;
        width: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 7px;
    }
    .buttom:hover{
        background-color: #00000008;
    }
</style>