<!-- 招聘数据列表 -->
<template>
  <div class="app-container">
    <!--  操作台  -->
    <el-card class="box-card">
      <div class="pos_hearder">
        <el-button type="primary" @click="addPosition()">发布宣讲计划</el-button>
        <div class="textview">
          <el-input
            class="input-position"
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            v-model="inputs">
          </el-input>
          <el-select v-model="value" placeholder="全部状态">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
    </el-card>
    <!--  数据列表  -->
    <el-card class="box-card" style="margin-top: 10px">
      <div>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="num"
            label="序号"
            align="center"
            width="50">
          </el-table-column>
          <el-table-column
            fixed
            prop="date"
            label="日期"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="宣讲主题"
            align="center" >
          </el-table-column>
          <el-table-column
            prop="province"
            label="状态"
            align="center"
            width="90">
          </el-table-column>
          <el-table-column
            prop="city"
            label="宣讲人"
            align="center"
            width="80">
          </el-table-column>
          <el-table-column
            prop="address"
            label="宣讲地址"
            align="center"
            width="300">
          </el-table-column>
          <el-table-column
            prop="bm"
            label="宣讲xxx"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="type"
            label="宣讲xxx"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            align="center"
            label="操作" >
            <template slot-scope="scope" >
              <el-button @click="handleViewOrder()" type="danger" size="small">查看</el-button>
              <el-button @click="handleChangerPositionInfo()" type="success" size="small">编辑</el-button>
              <el-button @click="handleClosePositionInfo()" type="warning" size="small">关闭</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="text-align: right; margin-top: 30px">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          layout="total, sizes, prev, pager, next, jumper"
          :current-page.sync="listQuery.pageNum"
          :page-size="listQuery.pageSize"
          :page-sizes="[5,10,15]"
          :total="total">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>

  const defaultListQuery = {
    pageNum: 1,
    pageSize: 10,
    name: null,
    type: null
  };

  export default {
    data() {
      return {
        listQuery: Object.assign({},defaultListQuery),
        options: [
          {
            value: '选项1',
            label: '全部职类'
          }, {
            value: '选项2',
            label: '全部状态'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
        tableData: [
          {
            num: 1,
            date: '2016-05-02',
            name: '2020年校园招聘 - 川大',
            province: '进行中',
            city: '张三',
            address: '成都市武侯区四川大学 会议室',
            bm: 'xxx',
            type: 'xxx',
            seeNum: 'xxx',
            gz_add: 'xxx',
            zip: 200333
          },{
            num: 2,
            date: '2016-05-02',
            name: '2020年校园招聘 - 川大',
            province: '进行中',
            city: '张三',
            address: '成都市武侯区四川大学 会议室',
            bm: 'xxx',
            type: 'xxx',
            seeNum: 'xxx',
            gz_add: 'xxx',
            zip: 200333
          },{
            num: 3,
            date: '2016-05-02',
            name: '2020年校园招聘 - 川大',
            province: '进行中',
            city: '张三',
            address: '成都市武侯区四川大学 会议室',
            bm: 'xxx',
            type: 'xxx',
            seeNum: 'xxx',
            gz_add: 'xxx',
            zip: 200333
          },{
            num: 4,
            date: '2016-05-02',
            name: '2020年校园招聘 - 川大',
            province: '进行中',
            city: '张三',
            address: '成都市武侯区四川大学 会议室',
            bm: 'xxx',
            type: 'xxx',
            seeNum: 'xxx',
            gz_add: 'xxx',
            zip: 200333
          },{
            num: 5,
            date: '2016-05-02',
            name: '2020年校园招聘 - 川大',
            province: '进行中',
            city: '张三',
            address: '成都市武侯区四川大学 会议室',
            bm: 'xxx',
            type: 'xxx',
            seeNum: 'xxx',
            gz_add: 'xxx',
            zip: 200333
          },{
            num: 6,
            date: '2016-05-02',
            name: '2020年校园招聘 - 川大',
            province: '进行中',
            city: '张三',
            address: '成都市武侯区四川大学 会议室',
            bm: 'xxx',
            type: 'xxx',
            seeNum: 'xxx',
            gz_add: 'xxx',
            zip: 200333
          },{
            num: 7,
            date: '2016-05-02',
            name: '2020年校园招聘 - 川大',
            province: '进行中',
            city: '张三',
            address: '成都市武侯区四川大学 会议室',
            bm: 'xxx',
            type: 'xxx',
            seeNum: 'xxx',
            gz_add: 'xxx',
            zip: 200333
          },{
            num: 8,
            date: '2016-05-02',
            name: '2020年校园招聘 - 川大',
            province: '进行中',
            city: '张三',
            address: '成都市武侯区四川大学 会议室',
            bm: 'xxx',
            type: 'xxx',
            seeNum: 'xxx',
            gz_add: 'xxx',
            zip: 200333
          }, {
            num: 9,
            date: '2016-05-02',
            name: '2020年校园招聘 - 川大',
            province: '进行中',
            city: '张三',
            address: '成都市武侯区四川大学 会议室',
            bm: 'xxx',
            type: 'xxx',
            seeNum: 'xxx',
            gz_add: 'xxx',
            zip: 200333
          }, {
            num: 10,
            date: '2016-05-02',
            name: '2020年校园招聘 - 川大',
            province: '进行中',
            city: '张三',
            address: '成都市武侯区四川大学 会议室',
            bm: 'xxx',
            type: 'xxx',
            seeNum: 'xxx',
            gz_add: 'xxx',
            zip: 200333
          }],
        currentPage4: 1,
        total: 11,
        value: '',
        inputs: ''
      }
    },
    created() {
      // this.total = this.tableData.length
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.listQuery.pageNum = 1;
        this.listQuery.pageSize = val;
      },
      handleCurrentChange(val) {
        this.listQuery.pageNum = val;
        console.log(`当前页: ${val}`);
      },
      addPosition(){
        console.log('添加职位')
        this.$router.push({path: '/pos/talk-add'})
      },
      handleChangerPositionInfo(){
        console.log('修改职位信息')
        this.$router.push({path: '/pos/talk-update'})
      },
      handleClosePositionInfo() {
        console.log('关闭该职位信息')
        this.$message({
          message: '该职位招聘信息已关闭',
          type: 'success'
        });
      },
      handleViewOrder() {
        console.log('输出路径');
        this.$router.push({path: '/pos/talk-info'})
      }
    },
  }
</script>

<style lang="scss" scoped>
  .pos_hearder {
    display: flex;
    justify-content: space-between;
    .textview {
      width: 33%;
      display: flex;
      justify-content: space-between;
      .input-position {
        width: 260px;
      }
    }
  }
</style>

