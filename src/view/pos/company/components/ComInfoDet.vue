<template>
  <div>
    <div style="margin-left: 25px">
      <h4 style="font-size: 18px; margin-bottom: 8px">公司基本信息</h4>
      <span style="color: #8d92a1; font-size: 13px">丰富的公司介绍，能获得更多求职者的青睐，为你的职位带来更多查看与沟通</span>
    </div>
    <div  style="margin-top: 30px; width: 500px">
      <el-input
        style="margin-left: 25px;"
        type="textarea"
        placeholder="请输入内容"
        v-model="textarea"
        maxlength="30"
        :rows="10"
        show-word-limit
      >
      </el-input>
      <el-button style="margin-top: 30px; margin-left: 390px;" type="primary" @click="submitForm('ruleForm')">&#12288;&#12288;保&#12288;存&#12288;&#12288;</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ComInfoDet',
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        textarea: ''
      }
    }
  }
</script>

<style scoped>

</style>
