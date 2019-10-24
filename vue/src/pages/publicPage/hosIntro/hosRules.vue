<template>
    <div class="rules-wrapper">
        <div class="rules-title clearfix">
            <div class="line"></div>
            <div class="title">规章制度</div>
        </div>
        <div class="rules-item clearfix" v-for="(item, index) in 10" :key="index">
            <div class="pub-time fl">
                <p class="year">2019</p>
                <p class="date">09-10</p>
            </div>
            <div class="pub-content fl">
                <div class="rule-name">值班制度</div>
                <div class="rule-detail">ns值班制度ec值班制度值班制度teturoc  Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae molestias dignissimos quisquam nostrum est nisi, quibusdam ipsa atque qui libero quidem commodi hic totam sint, fuga voluptatibus rerum animi. psum dolor, sit amet consectetur adipisicing elit. Explicabo eius, doloribus, exercitationem adipisci, nemo libero necessitatibus dolore omnis ipsa obcaecati natus vero cupiditate illum autem quibusdam praesentium? Temporibus, aperiam pariatur.</div>
            </div>
            <div class="check-now fr">
               <span>查看详情</span> 
               <i class="iconfont iconxiangyou"></i>
            </div>
        </div>
    </div>
</template>