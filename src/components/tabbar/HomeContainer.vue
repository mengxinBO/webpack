<template>
    <div>
        <mt-swipe :auto="4000">


        <mt-swipe-item v-for="(item,index) in imgs" :key="index">
            <img :src="item.src" class="img">
        </mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/photolist">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>

		        </ul> 
    </div>
</template>

<script>
export default{
    data(){
        return{
            imgs:[
                {
                    index:1,
                    src:require("./imges/1.jpg")
                },
                {
                    index:2,
                    src:require("./imges/2.jpg")
                },
                {
                    index:3,
                    src:require("./imges/3.jpg")
                },
            ]
        }
    },
    created(){

    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;

    .mint-swipe-item:nth-child(1){
        background-color: red;
    }

    .mint-swipe-item:nth-child(2){
        background-color: palevioletred;
    }

    .mint-swipe-item:nth-child(3){
        background-color: cyan;
    }
    
}
.img{
    width: 100%;
    height: 100%;
}

.mui-grid-view.mui-grid-9{
    background-color: #fff;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
</style>