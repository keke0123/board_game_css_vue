<template>

    <div class="box">
        <h3>home page</h3>
        <div class="block-column block-down">
            <BlockDefaultVue color="red" name="Korea" :price="100"/>
            <BlockDefaultVue/>
            <BlockRare/>
            <BlockDefaultVue/>
            <BlockDefaultVue/>
            <BlockSpecial/>
        </div>
        <div class="block-column block-left">
            <BlockDefaultVue color="red" name="Korea" :price="100"/>
            <BlockDefaultVue/>
            <BlockRare/>
            <BlockDefaultVue/>
            <BlockDefaultVue/>
            <BlockSpecial/>
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
    }
}
</script>

<style scoped>
    .box{
        position:relative;
        width:1000px;
        margin: 200px auto;
        
    }
    .block-column{
        /* position:absolute; */
        width: 680px;
        display:block;
        
    }
    .block-left{
        position:absolute;
        width:100%;
        /* transform-origin: 0% 0%; */
        transform: rotate(90deg) translateX(121px) translateY(170px) scale(0.5);
    }
    .block-right{
        position:absolute;
        width:100%;
        /* transform-origin: 0% 0%; */
        transform: rotate(180deg) translateX(121px) translateY(170px) scale(0.5);
    }
    .block-up{
        position:absolute;
        width:100%;
        /* transform-origin: 0% 0%; */
        transform: rotate(270deg) translateX(121px) translateY(170px) scale(0.5);
    }
    .block-down{
        position:absolute;
        width:100%;
        /* transform-origin: 0% 0%; */
        transform: translateX(121px) translateY(170px) scale(0.5);
    }
</style>
