<template>
    <div class="emergency-wrapper">
        <div class="emer-title clearfix">
            <div class="line"></div>
            <div class="title">急诊指南</div>
        </div>
         <div class="info-preview-card clearfix" @click="checkDetail">         
            <div class="card-content fl">
                <div class="card-name">急诊流程</div>
                <div class="card-detail">点击查看急诊流程图</div>
            </div>
            <div class="check-now fr">
               <span>查看详情</span> 
               <i class="iconfont iconxiangyou"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"emer",
    data(){
        return{
            
        }
    },
    methods:{
        checkDetail(){
            this.$router.push({name:"guideDetail",params:{type:"emer"}})
        }
    }
}
</script>