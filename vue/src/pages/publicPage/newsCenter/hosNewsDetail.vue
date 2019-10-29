<template>
    <div class="detail-wrapper">
        <div class="-detail-title">
            <div class="line"></div>
            <div class="title">新闻详情</div>
            <el-button type="primary" class="fr" @click="fanhui"><i class="iconfont iconfanhui" ></i></el-button>
        </div>
    </div>
</template>

<script>
export default {
    name:"",
    data(){
        return{

        }
    },
    methods:{
        fanhui(){
            this.$router.go(-1)
        }
    }
}
</script>