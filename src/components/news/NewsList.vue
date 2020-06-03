<template>
    <div>
        
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://apic.douyucdn.cn/upload/avanew/face/201610/14/12/e412a765cdf16a7fc447c4210b80b3e5_middle.jpg">
						<div class="mui-media-body">
							<h1>{{item.name}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.latitude}}</span>
                                <span>点击：{{item.sort}}次</span>
                            </p>
						</div>
					</a>
				</li>


			</ul>


    </div>
</template>

<script>
import { Toast } from "mint-ui"

export default{
    data(){
        return{
            newslist:[] //新闻列表
        }
    },
    created(){
        this.getNewsList();
    },
    methods:{
        getNewsList(){
            // 获取新闻列表
            this.$http.get('https://elm.cangdu.org/v1/cities?type=hot').then(result => {
                
                    // 如果没有失败，应该把数据保存到data上
                    this.newslist = result.body;
                
            }).catch(function(){
                Toast("获取新闻列表失败")
            });
            ;
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{font-size: 14px;}
    }
    .mui-ellipsis{
        font-size: 12px;
        color: blue;
        display: flex;
        justify-content: space-between;
    }
}
</style>