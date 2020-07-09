<template>
  <div>
    <div style="margin-left: 25px">
      <h4 style="font-size: 18px; margin-bottom: 8px">公司福利</h4>
      <span style="color: #8d92a1; font-size: 13px">标准时间和公司福利仅为求职者参考，不代表公司所有职位状况</span>
    </div>
    <div style="margin-top: 30px; width: 500px">
      <el-form style="margin-top: 30px; width: 800px" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="加班情况:" prop="name">
          <el-radio-group v-model="radio1">
            <el-radio label="1">不加班</el-radio>
            <el-radio label="2">偶尔加班</el-radio>
            <el-radio label="3">弹性工作</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="休息时间:" prop="name">
          <el-radio-group v-model="radio2">
            <el-radio label="1">双休</el-radio>
            <el-radio label="2">单休</el-radio>
            <el-radio label="3">大小周</el-radio>
            <el-radio label="4">排班轮休</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <div class="welfare">
      <add-button v-for="item in welfarelist" :key="item.id" :title="item.title" :det="item.det" :imgUrl="item.url"></add-button>
    </div>
    <el-button style="margin-top: 30px; margin-left: 550px;" type="primary" @click="submitForm('ruleForm')">&#12288;&#12288;保&#12288;存&#12288;&#12288;</el-button>
    <el-button style="margin-top: 30px; margin-left: 550px;" type="primary" @click="centerDialogVisible = true">&#12288;&#12288;新&#12288;增&#12288;&#12288;</el-button>
    <el-dialog
      style="height: 800px"
      title="选择福利"
      :visible.sync="centerDialogVisible"
      :close-on-click-modal=false
      width="50%">
      <div>
        <com-welfare-type></com-welfare-type>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import AddButton from "@/components/AddButton"
  import ComWelfareType from "./ComWelfareType";
  export default {
    name: 'ComWelfare',
    components: {
      ComWelfareType,
      AddButton
    },
    data() {
      return {
        centerDialogVisible: false,
        welfarelist: [
          {
            id: 1,
            title: '五险一金',
            det: '缴纳养老保险、医疗保险、失业保险、工伤保险、生育保险和住房公积金',
            url: 'https://img.bosszhipin.com/beijin/icon/93b81ebe528998ade6a24b3055a4e76bafa7fcceaa24b8ea28f56f1bb14732c0.png'
          },
          {
            id: 2,
            title: '加班补助',
            det: '加班补贴，换休',
            url: 'https://img.bosszhipin.com/beijin/icon/2baa9de88c36cafa88193b5597f37219afa7fcceaa24b8ea28f56f1bb14732c0.png'
          },
          {
            id: 3,
            title: '带薪年假',
            det: '为员工提供带薪年休假',
            url: 'https://img.bosszhipin.com/beijin/icon/b06d12eaafeb8b29c3c5f4f4d4d90bb4afa7fcceaa24b8ea28f56f1bb14732c0.png'
          },
          {
            id: 4,
            title: '员工旅游',
            det: '组织员工旅游活动',
            url: 'https://img.bosszhipin.com/beijin/icon/b06d12eaafeb8b29c3c5f4f4d4d90bb4afa7fcceaa24b8ea28f56f1bb14732c0.png'
          },
          {
            id: 5,
            title: '添加福利',
            det: '如：五险一金、定期体检等',
            url: 'https://img.bosszhipin.com/beijin/icon/b06d12eaafeb8b29c3c5f4f4d4d90bb4afa7fcceaa24b8ea28f56f1bb14732c0.png'
          }
        ],
        radio2: '1',
        radio1: '1'
      }
    }
  }
</script>

<style>
.welfare {
  width: 800px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
