<template>
    <div>
        <div class='block' @mouseover="mouseOver($event);" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
            <div class='box-color transparent'><p class="tag-text">{{color}}</p></div>
            <div class='box-name transparent'>{{name}}</div>
            <div class='box-price transparent'>{{pricing}}</div>
            <div class='block-copyed' :class="rotated" v-show="isMouseOver">
                <div class='box-color not-transparent'><p>{{color}}</p></div>
                <div class='box-name not-transparent'>{{name}}</div>
                <div class='box-price not-transparent'>{{pricing}}</div>
            </div>
        </div>
    </div>
</template>

<script scoped>
export default {
    name:'BlockDefault',
    data:function(){
        return {
            isMouseOver:false,
        }
    },
    props:{
        color:String,
        name:String,
        price:Number,
        isRotated:String,
    },
    computed:{
        pricing:function(){
            return (this.price) ? '$'+this.price : '' ;      
        },
        rotated:function(){
            console.log(this.isRotated);
            if(this.isRotated=='down'){
                return 'rotate-down';
            }
            else if(this.isRotated=='left'){
                return 'rotate-left';
            }
            else if(this.isRotated=='up'){
                return 'rotate-up';
            }
            else if(this.isRotated=='right'){
                return 'rotate-right';
            }
        }
    },   
    methods:{
        mouseEnter:function(e){
            this.isMouseOver=true;
            console.log("isMouseOver : "+this.isMouseOver);
        },
        mouseLeave:function(e){
            this.isMouseOver=false;
            console.log("isMouseOver : "+this.isMouseOver);
        },
        mouseOver: function(e){
            console.log("mouse over");
            //console.log(e);
            // console.log(this.color);
            // console.log(this.name);
            // console.log(this.price);
            this.sendData(this.color, this.name, this.price);
        },
        sendData: function(color, name, price){
            //console.log("send");
            this.$emit("sendData", {
                color, name, price
            });
        }
    }
}
</script>

<style scoped>
    .rotate-down{
        transform:scale(2);
        /* transform:scale(2) rotate(90deg); */
    }
    .block{
        position:relative;
        width:100px;
        height:150px;
        border: 1px solid red;
        margin:1px;
        /* overflow:hidden; */
        float:left;
        /* z-index 는 형제요소에만 적용됨 */
        /* z-index:2; */
    }
    /* .block:hover{
        transform:scale(2);
    } */
    .block-copyed{
        position:relative;
        top:-2px;
        left:-2px;
        width:100px;
        height:150px;
        border: 1px solid red;
        margin:1px;
        overflow:hidden;
        float:left;
    }
    .transparent{
        opacity: 0.5;
    }
    .not-transparent{
        opacity: 1;
    }
    .tag-text{
        opacity:1;
    }
    .box-color{
        position:absolute;
        width:100%;
        height:49px;
        border: 1px solid white;
        /* background-color: rgba(0,0,255, 0.5); */
        background-color: blue;     
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
        /* background-color: rgba(255,0,0, 0.5); */
        background-color: red;    
        box-sizing: border-box;
    }
    .box-price{
        position:absolute;
        top:101px;
        width:100%;
        height:49px;
        border: 1px solid white;
        /* background-color: rgba(0,255,0, 0.5); */
        background-color: green;      
        box-sizing: border-box;
    }

</style>
