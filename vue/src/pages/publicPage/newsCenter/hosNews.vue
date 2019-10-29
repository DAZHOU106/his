<template>
    <div class="hos-news-wrapper">
        <div class="news-title clearfix">
            <div class="line"></div>
            <div class="title">院内新闻</div>
        </div>
        <div class="info-preview-card clearfix" @click="checkDetail">         
            <div class="card-content fl">
                <div class="card-name">今日我院开创了就医先锋</div>
                <div class="card-detail">先锋网</div>
            </div>
            <div class="check-now fr">
               <span>查看详情</span> 
               <i class="iconfont iconxiangyou"></i>
            </div>
        </div>
        <el-pagination
          
            :current-page="currentPage"
            :page-sizes="[20, 40, 80, 100]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalNum" background
            style="margin-top:50px"
            >
        </el-pagination>
        
    </div>
</template>
<script>
export default {
    name:"",
    data(){
        return{
            currentPage:1,
            pageSize: 20,
            totalNum:200,
        }
    },
    methods:{
        checkDetail(){
            this.$router.push({name:"hosNewsDetail"})
        }
    }
}
</script>