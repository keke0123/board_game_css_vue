<template>
    <div class='block'>
        <div class='box-color'>{{color}}</div>
        <div class='box-name'>{{name}}</div>
        <div class='box-price'>{{pricing}}</div>
    </div>
</template>

<script scoped>
export default {
    name:'BlockDefault',
    props:{
        color:String,
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
    .box-color{
        position:absolute;
        width:100%;
        height:49px;
        border: 1px solid white;
        background-color: rgba(0,0,255, 0.5);
        /* 박스 사이징을 주면 left:-1px 할필요가 없다 */
        box-sizing: border-box;
        /* padding:10px; */
        
        
    }
    .box-name{
        position:absolute;
        top:50px;
        width:100%;
        height:49px;
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
