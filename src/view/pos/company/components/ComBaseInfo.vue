<template>
  <div>
    <div style="margin-left: 25px">
      <h4 style="font-size: 18px; margin-bottom: 8px">公司基本信息</h4>
      <span style="color: #8d92a1; font-size: 13px">丰富的公司介绍，能获得更多求职者的青睐，为你的职位带来更多查看与沟通</span>
    </div>
    <div>
      <el-form style="margin-top: 30px; width: 500px" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="公司Logo:" prop="name">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="公司简称:" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="公司全称:" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="所在行业:" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="融资阶段:" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择" style="width: 100%">
            <el-option label="未融资" value="shanghai"></el-option>
            <el-option label="天使轮" value="beijing"></el-option>
            <el-option label="A轮" value="shanghai"></el-option>
            <el-option label="B轮" value="beijing"></el-option>
            <el-option label="C轮" value="shanghai"></el-option>
            <el-option label="D轮及以上" value="beijing"></el-option>
            <el-option label="已上市" value="shanghai"></el-option>
            <el-option label="不需要融资" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="人员规模:" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择" style="width: 100%">
            <el-option label="0-20人" value="shanghai"></el-option>
            <el-option label="20-99人" value="beijing"></el-option>
            <el-option label="100-499人" value="shanghai"></el-option>
            <el-option label="500-999人" value="beijing"></el-option>
            <el-option label="1000-9999人" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="公司官网:" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button  style=" margin-left: 260px;"  type="primary" @click="submitForm('ruleForm')">&#12288;&#12288;保&#12288;存&#12288;&#12288;</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ComBaseInfo',
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        imageUrl: '',
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style scoped>
  .avatar-uploader{
    width: 100px;
    height: 100px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>
