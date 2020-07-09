<template>
  <div>
    <div style="margin-left: 25px">
      <h4 style="font-size: 18px; margin-bottom: 8px">公司相册</h4>
      <span style="color: #8d92a1; font-size: 13px">公司照片建议选择近景前台或者其他办公环境，远景门口或者大楼</span>
    </div>
    <div class="photo">
      <el-upload
        style="margin: 15px"
        action="#"
        list-type="picture-card"
        :auto-upload="false">
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{file}">
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" >
          <span class="el-upload-list__item-actions">
            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
             <i class="el-icon-zoom-in"></i>
             </span>
            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)" >
              <i class="el-icon-download"></i>
            </span>
            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)" >
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ComPhoto',
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      };
    },
    methods: {
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
    }
  }
</script>

<style lang="scss" scoped>
.photo{
  margin: 30px;
  width: 660px;
  height: 400px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
}
</style>
