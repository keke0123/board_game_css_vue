<template>

    <div class="box">
        <div class="block-column block-down" >
            <BlockDefaultVue color="red" name="Korea" isRotated="down" :price="100" @sendData="sended"/>
            <BlockDefaultVue isRotated="down"/>
            <BlockRare isRotated="down"/>
            <BlockDefaultVue isRotated="down"/>
            <BlockDefaultVue isRotated="down"/>
            <BlockSpecial isRotated="down"/>
        </div>
        <div class="block-column block-left">
            <BlockDefaultVue color="red" name="Korea" isRotated="left" :price="100"/>
            <BlockDefaultVue isRotated="left"/>
            <BlockRare isRotated="left"/>
            <BlockDefaultVue isRotated="left"/>
            <BlockDefaultVue isRotated="left"/>
            <BlockSpecial isRotated="left"/>
        </div>
        <div class="block-column block-up">
            <BlockDefaultVue color="red" name="Korea" :price="100"/>
            <BlockDefaultVue/>
            <BlockRare/>
            <BlockDefaultVue/>
            <BlockDefaultVue/>
            <BlockSpecial/>
        </div>
        <div class="block-column block-right">
            <BlockDefaultVue color="red" name="Korea" :price="100"/>
            <BlockDefaultVue/>
            <BlockRare/>
            <BlockDefaultVue/>
            <BlockDefaultVue/>
            <BlockSpecial/>
        </div>
    </div>
</template>

<script>
import BlockDefaultVue from '@/components/BlockDefault.vue';
import BlockRare from '@/components/BlockRare.vue';
import BlockSpecial from '@/components/BlockSpecial.vue';
export default {
    name:'home',
    components:{
        BlockDefaultVue,
        BlockRare,
        BlockSpecial,
    },
    methods:{
        sended:function(e){
            console.log("sended");
            console.log(e);
        }
    }
}
</script>

<style scoped>
    .box{
        position:relative;
        display: flex;
        width:700px;
        height:700px;
        margin: 100px auto;
        border: 3px solid black;
        
    }
    .block-column{
        position:absolute;
        width: 680px;
        display:block;
        top:250px;
        
    }
    .block-left{
        position:absolute;
        width:100%;
        /* transform-origin: 0% 0%; */
        transform: rotate(90deg) translateX(46px) translateY(170px) scale(0.5);
    }
    .block-right{
        position:absolute;
        width:100%;
        /* transform-origin: 0% 0%; */
        transform: rotate(180deg) translateX(46px) translateY(170px) scale(0.5);
    }
    .block-up{
        position:absolute;
        width:100%;
        /* transform-origin: 0% 0%; */
        transform: rotate(270deg) translateX(46px) translateY(170px) scale(0.5);
    }
    .block-down{
        position:absolute;
        width:100%;
        /* transform-origin: 0% 0%; */
        transform: translateX(46px) translateY(170px) scale(0.5);
    }
</style>
