<template>
  <div>
    <el-card style="margin: 10px">
      <!--   1.职位基本信息   -->
      <div class="base-info">
        <h1>1</h1>
        <div class="hearder">
          <div>
            <h3>职位基本信息</h3>
            <span>加 * 内容，在确认发布成功后，将无法修改</span>
          </div>
          <div>
            <span class="title">*名&#12288;&#12288;称：</span>
            <span class="det">四川华西绿舍建材有限公司</span>
          </div>
          <div>
            <span class="title">*招聘类型：</span>
            <el-select style="width: 380px" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div>
            <span class="title">*职位名称：</span>
            <el-input
              style="width: 380px"
              placeholder="请输入内容"
              v-model="input"
              clearable>
            </el-input>
          </div>
          <div>
            <span class="title">*工作城市：</span>
            <el-cascader style="width: 380px" :options="addoptions" clearable></el-cascader>
          </div>
          <div>
            <span class="title">工作地点：</span>
            <el-select style="width: 500px" v-model="value" filterable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <!--   2.职位要求   -->
      <div class="base-info">
        <h1>2</h1>
        <div class="hearder">
          <div>
            <h3>职位要求</h3>
            <span>我们将通过以下条件，为您精确推荐合适的牛人，请尽量详细填写</span>
          </div>
          <div>
            <span class="title">经验和学历：</span>
            <el-select style="width: 120px;" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select style="width: 120px; margin-left: 20px;" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div>
            <span class="title">&#12288;薪资范围：</span>
            <el-select style="width: 120px;" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span>-</span>
            <el-select style="width: 120px;" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span>x</span>
            <el-select style="width: 120px;" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div>
            <span class="title">&#12288;邮&#12288;&#12288;箱：</span>
            <el-select style="width: 280px" v-model="value" filterable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div>
            <span class="title">职位关键词：</span>
            <el-select
              style="width: 400px"
              v-model="gjc_value"
              multiple
              filterable
              allow-create
              default-first-option
              placeholder="请选择输入职位关键词">
              <el-option
                v-for="item in gjc_options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div style="display: flex; align-items: flex-start;">
            <span class="title">&#12288;职位描述：</span>
            <el-input style="width: 450px; margin-left: 6px;"
                      type="textarea"
                      placeholder="请输入内容"
                      v-model="textarea"
                      maxlength="300"
                      show-word-limit
            >
            </el-input>
          </div>
          <div style="display: flex; justify-content: flex-end; width: 550px;">
            <el-button style="width: 200px; margin-top: 30px;" type="primary" round>发&#12288;布</el-button>
          </div>
        </div>
      </div>

    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'PositionBaseInfo',
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        gjc_options: [
          {
          value: 'HTML',
          label: '关键词1'
        }, {
          value: 'CSS',
          label: '关键词2'
        }, {
          value: 'JavaScript',
          label: '关键词3'
        }],
        gjc_value: [],
        options: [
          {
          value: '选项1',
          label: '社招'
        }, {
          value: '选项2',
          label: '实习生'
        }, {
          value: '选项3',
          label: '应届校招'
        }],
        addoptions: [
          {
            value: 'zhinan',
            label: '四川',
            children: [{
              value: 'shejiyuanze',
              label: '成都',
            }, {
              value: 'daohang',
              label: '重庆',
            }]
          },
          {
            value: 'zujian',
            label: '北京',
          },
          {
            value: 'data',
            label: '上海',
            children: [{
              value: 'table',
              label: '新川'
            }]
          }],
        value: '',
        input: '',
        textarea: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .base-info{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    h1{
      color: #0c8918;
    }
    .hearder{
      margin-left: 20px;
      margin-top: 10px;
      width: 80%;
      div {
        margin-top: 10px;
      }
      h3 {
        font-size: 16px;
        font-weight: normal;
      }
      span {
        font-size: 12px;
        line-height: 20px;
        color: #9fa4b0;
      }
      .title{
        color: rgb(159, 163, 175);
        font-size: 14px;
      }
      .det{
        color: #414a60;
        line-height: 26px;
        font-size: 14px;
      }
    }
  }
</style>
