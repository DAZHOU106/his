<template>
    <div style="leader-wrapper">
        <div class="leader-title clearfix">
            <div class="line"></div>
            <div class="title">领导介绍</div>
        </div>
        <div 
        class="leader-intro-card" 
        v-for="(item, index) in 10" 
        :key="index"
        @click="checkDetail"
        >
            <div class="leader-avatar">
                <img src="@/assets/images/kaipao.jpg" alt="">
            </div>
            <div class="leader-name">
               李云龙
            </div>
            <div class="leader-detail">
                李云龙（1910年12月14日～1968年），
                都梁小说《亮剑》及由原著改编电视剧的主人公，
                原型是中将王近山将军（融合了一些钟伟等人的性格和事迹。
                以攻打平安县城最为出名
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    methods:{
        checkDetail(){
            this.$router.push({name:"leaderDetail"})
        }
    }
}
</script>