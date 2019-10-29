<template>
    <div class="outpatient-wrapper">
       <div class="outpatient-title clearfix">
            <div class="line"></div>
            <div class="title">
                门诊指南
                </div>
        </div>
         <div class="info-preview-card clearfix" @click="checkDetail" >         
            <div class="card-content fl">
                <div class="card-name">医生出诊表</div>
                <div class="card-detail">点击查看医生出诊表</div>
            </div>
            <div class="check-now fr">
               <span>查看详情</span> 
               <i class="iconfont iconxiangyou"></i>
            </div>
        </div>
    </div>
</template>

<script>
// import InfoPreviewCard from '@/components/pubDetail/infoPreview'
export default {
    name:'',
    components:{
        // InfoPreviewCard
    },
    data(){
       return{

       }
    },
    methods:{
checkDetail(){
    this.$router.push(
        {name:"guideDetail",params:{type:"outpati"}}
    )
}
    },
    watch:{
    }
}
</script>