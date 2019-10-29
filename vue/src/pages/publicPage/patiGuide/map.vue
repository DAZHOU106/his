<template>
    <div clas="map-wrapper">
        <div class="map-title clearfix">
             <div class="line"></div>
            <div class="title">医院地图</div>
        </div>
           <!-- <div class="search-bar">
               <el-form  :inline="true" ref="form" label-width="80px">
                   <el-form-item label="">
                       <el-input placeholder="输入要搜索的地名或者建筑" v-model="keyword"></el-input>
                   </el-form-item>
                   <el-form-item>
                       <el-button type="primary">立即创建</el-button>
                   </el-form-item>
               </el-form>
              
           </div> -->
               <baidu-map 
               class="map-view" 
               :center="center" 
               :zoom="zoom"
               :scroll-wheel-zoom="false"
               :dragging="false"   
               click          
               >
                 <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                <bm-view style="width: 100%; height:100%; flex: 1"></bm-view>
                <bm-scale anchor="BMAP_ANCHOR_TOP_LEFT"></bm-scale>
                
                <bm-geolocation 
                anchor="BMAP_ANCHOR_BOTTOM_RIGHT" 
                :showAddressBar="false"
                 :autoLocation="true"
                 :forceLocal = "true"
                 ></bm-geolocation>
                <!-- <bm-local-search :keyword="keyword" :auto-viewport="true" :location="center"></bm-local-search> -->
                <!-- <bm-control class="control-back">
                    <el-button type="primary" @click="back">
                        回到医院
                    </el-button>
                </bm-control> -->
               </baidu-map>
           
    </div>
  
</template>

<script>
export default {
    name: "",
    data(){
        return{
             location: '芜湖',
             keyword:'',
        center: {lng:118.3625374572,lat:31.2869853448},
        zoom:25,
        }
    },
    mounted() {

    },
    methods:{
        back(){
            this.zoom = 25;
        }
    }
}
</script>