<template>
  <div class="guide-wrapper">
    <top-logo></top-logo>
    <top-nav></top-nav>
    <div class="top-banner"></div>
    <div class="detail-wrapper">
      <div class="detail-wrapper-inner">
        <div class="detail-title">
          <span class="detail-title-name">{{detailTitle}}</span>
          <el-button type="primary" @click="back" class="fr">
            <i class="iconfont iconfanhui"></i>
          </el-button>
        </div>
        <div class="detail-main-con">
          <!-- 门诊页面 -->
          <div class="outpati-detail" v-if="type=='outpati'">
            <el-form :inline="true" class="demo-form-inline">
            

              <el-form-item label="就诊时间">
                <el-date-picker v-model="outDate" type="date" placeholder="选择日期"></el-date-picker>
              </el-form-item>
              <el-form-item label="就诊科室">
                <el-select placeholder="活动区域" value="shanghai">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="small">查询</el-button>
              </el-form-item>
            </el-form>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="name" label="职称" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </div>

          <!-- 急诊功能页面 -->
          <div class="emer-detail" v-if="type=='emer'">
            <div class="emer-con">
              <img alt class="emer-img" src="@/assets/images/emer-process.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopLogo from "@/components/pubHome/topLogo";
import TopNav from "@/components/pubHome/topNav";
export default {
  name: "",

  props: {
    type: {
      type: String
    }
  },
  data() {
    return {
      outDate:'',//医生出诊时间
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },

  computed: {
    detailTitle() {
      if (this.type == "outpati") {
        return "医生出诊情况查询";
      } else if (this.type == "emer") {
        return "急诊流程示意图";
      }
    }
  },

  components: {
    TopLogo,
    TopNav
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
// .el-select-dropdown {
//   min-width:600px !important;
//   left: 600px !important;
//   min-height: 200px;
// }
// .popper__arrow {
//   left:277px !important;
// }
// .el-popper{

// }
</style>