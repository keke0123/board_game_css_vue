<template>
    <div class='block'>
        <div class='box-name'>{{name}}</div>
        <div class='box-price'>{{pricing}}</div>
    </div>
</template>

<script scoped>
export default {
    name:'BlockRare',
    props:{
        name:String,
        price:Number,
    },
    computed:{
        pricing:function(){
            return (this.price) ? '$'+this.price : '' ;      
        }
    }   
}
</script>

<style scoped>
    .block{
        position:relative;
        width:100px;
        height:150px;
        border: 1px solid red;
        margin:1px;
        overflow:hidden;
        float:left;
        /* z-index 는 형제요소에만 적용됨 */
        /* z-index:2; */
    }
    .box-name{
        position:absolute;
        top:0px;
        width:100%;
        height:100px;
        border: 1px solid white;
        background-color: rgba(255,0,0, 0.5);;
        box-sizing: border-box;
    }
    .box-price{
        position:absolute;
        top:101px;
        width:100%;
        height:49px;
        border: 1px solid white;
        background-color: rgba(0,255,0, 0.5);
        box-sizing: border-box;
    }

</style>
