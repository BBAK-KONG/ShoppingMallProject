<template>
    <div class="banner">
        <slot></slot>
        <button @click="next" class="next">Next</button>
        <button @click="prev" class="prev">Prev</button>
    </div>
</template>

<script>
export default {
    data(){  //데이터 보관함
        return {
        }
    },
    methods: {
        next(){
            this.$emit('next')
        },
        prev(){
            this.$emit('prev')
        }
    }
}
</script>

<style>
    .banner{
        position: relative;
        width: 1200px;
        overflow: hidden;
    }
    button{
        position: absolute;
        height: 40px;
        width: 50px;
        top: calc(50% - 20px);
    }
    .next{
        background: white;
        width: 50px;
        height: 50px;
        right:0;
    }
    .prev{
        background-image: url("@/assets/leftArrow.png");
        background: white;
        width: 50px;
        height: 50px;
        left:0;
    }
</style>