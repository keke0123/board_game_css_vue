<template>
    <div class="block-line">
        <h3>BlockLine</h3>
        <Button @click="clickBtn">click</Button>
        <template v-for="(temp, key, index) in sample">
            <div v-if="temp.type==1" :key="index">type 1</div>
            <div v-else-if="temp.type==2" :key="index">type 2</div>
            <div v-else-if="temp.type==3" :key="index">type 3</div>
        </template>
        <hr/>
        <template v-for="(temp, key, index) in sample">
            <template v-if="temp.type==1" >
                <BlockDefault :key="index" :color="temp.color" :name="temp.name" :price="100" @sendData="sended"/>
            </template>
            <template v-if="temp.type==2" >
                <BlockDefault :key="index" :color="temp.color" :name="temp.name" :price="100" @sendData="sended"/>
            </template>
            <template v-if="temp.type==3" >
                <BlockDefault :key="index" :color="temp.color" :name="temp.name" :price="100" @sendData="sended"/>
            </template>
        </template>
    </div>
</template>

<script>
// array 갯수는 splice 로 맞춘다.
const sample = [
    {
        type:1,
        color:'blue',
        name:'American',
        price:100,
    },
    {
        type:2,
        color:'red',
        name:'한국',
        price:100,
    },
    {
        type:3,
        color:'green',
        name:'중국',
        price:4,
    },

]

import BlockDefault from '@/components/BlockDefault';
import BlockRare from '@/components/BlockRare';
import BlockSpecial from '@/components/BlockSpecial';

export default {
    name:'BlockLine',
    components:{
        BlockDefault,
        BlockRare,
        BlockSpecial
    },
    data:function(){
        // sample 은 위에 있는 const sample
        // this.sample 은 data의 sample
        console.log(sample);
        return {
            sample:sample,
        };
    },
    methods:{
        clickBtn:function(){
            console.log('click!');
            console.log(this.sample);
        },
        sended:function(e){
            console.log("sended");
            console.log(e);
        }
    }
}
</script>

<style scoped>
    .block-line{
        position: relative;
        width: 680px;
        display:block;
        /* margin-bottom:100px; */
    }
        
</style>
