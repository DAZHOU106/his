<template>
    <div class="park-wraper">
            <div class="park-title clearfix">
                <div class="line"></div>
                <div class="title">泊车指南</div>
            </div>
            <el-table :data="tableData" border stripe>
                <el-table-column 
                    prop="name"
                   
                    label="停车场类型"
                    >
                </el-table-column>
                <el-table-column 
                    prop="num"
                   
                    label="数量"
                    >
                </el-table-column>
                 <el-table-column 
                    prop="charger"
                   
                    label="收费标准"
                    >
                </el-table-column>
                  <el-table-column 
                    prop="way"
                   
                    label="支付方式"
                    >
                </el-table-column>
            </el-table>
            
    </div>
</template>

<script>
export default {
    name:'',
    data(){
        return {
            tableData:[
                {name:"地下停车场",num:"500",charger:"10元/三小时",way:"支付宝/微信/现金"},
                {name:"地上停车场",num:"202",charger:"前半小时免费,后5元/小时",way:"支付宝/微信/现金"},
                
            ]
        }
    }
}
</script>