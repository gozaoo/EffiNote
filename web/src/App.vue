<script>
    import topBar from './components/topBar.vue'
    import rightBlock from './components/rightBlock.vue'
    import leftBar from './components/leftBar.vue'




    export default {
        name: 'app',
        components: {
            topBar,
            leftBar,
            rightBlock
        },
        data() {
            return {
                leftBarState: 'short',
                cache: [],
            }
        },
        methods:{
            getPassege(id){
                if(this.cache[id] != undefined){
                    return this.cache[id]
                } else {
                    return "#无法找到这篇文章\n\n可以向管理员反馈"
                }
            }
        }
    }
</script>

<template>
<topBar @leftBarChange="(newState)=>{leftBarState = newState}" :leftBarState="leftBarState"></topBar>
<div class="bottom">
    <leftBar :leftBarState="leftBarState" @leftBarChange="(newState)=>{leftBarState = newState}"></leftBar>
    <rightBlock :leftBarState="leftBarState"></rightBlock> 
</div>


</template>

<style scoped>
    .bottom{
        margin-top: 5px;
        display: flex;
        height: calc(100vh - 38px - 10px);
        width: calc(100% + 14px);
        margin-left: -7px;
    }
</style>
