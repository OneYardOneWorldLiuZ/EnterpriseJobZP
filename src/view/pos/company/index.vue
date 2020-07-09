<!-- 招聘公司信息展示 -->
<template>
  <div>
    <el-card style="margin: 10px; height: 80%" >
      <el-tabs tab-position="left" style="height: 100%;">
        <el-tab-pane label="公司基本信息">
          <com-base-info></com-base-info>
        </el-tab-pane>
        <el-tab-pane label="公司介绍">
          <com-info-det></com-info-det>
        </el-tab-pane>
        <el-tab-pane label="公司福利">
          <com-welfare></com-welfare>
        </el-tab-pane>
        <el-tab-pane label="公司相册">
          <com-photo></com-photo>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
  import ComBaseInfo from "./components/ComBaseInfo";
  import ComInfoDet from "./components/ComInfoDet";
  import ComWelfare from  "./components/ComWelfare";
  import ComPhoto from "./components/ComPhoto";
  export default {
    components: {
      ComBaseInfo,
      ComInfoDet,
      ComWelfare,
      ComPhoto
    },
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
