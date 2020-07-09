<template>
  <div>
    <div style="height: 500px;">
      <el-scrollbar style="height: 100%;">
        <section-title v-for="item in section" :key="item.value" :titleStr="item.value" :itemArr="item.date" >
        </section-title>
      </el-scrollbar>
    </div>
    <div>
      <el-button type="success">确认添加</el-button>
    </div>
  </div>
</template>

<script>
  import SectionTitle from "@/components/SectionTitle"
  export default {
    name: 'ComWelfareType',
    components: {
      SectionTitle
    },
    data() {
      return {
          section:[
            {
              value: "保险",
              date: [
                {
                  id: 1,
                  title: '五险一金',
                  det: '缴纳养老保险、医疗保险、失业保险、工伤保险、生育保险和住房公积金',
                  url: 'https://img.bosszhipin.com/beijin/icon/93b81ebe528998ade6a24b3055a4e76bafa7fcceaa24b8ea28f56f1bb14732c0.png'
                },
                {
                  id: 2,
                  title: '补充医疗保险',
                  det: '补充医疗保险、商业医疗保险、社会互助和社区医疗保险等多种形式',
                  url: 'https://img.bosszhipin.com/beijin/icon/4f8557852c6cd836f4d36d3750dd57d9afa7fcceaa24b8ea28f56f1bb14732c0.png'
                },
                {
                  id: 3,
                  title: '定期体检',
                  det: '阶段性职业健康检查',
                  url: 'https://img.bosszhipin.com/beijin/icon/dbfa8a0414226b0acd160348ebe30577afa7fcceaa24b8ea28f56f1bb14732c0.png'
                }
              ]
            },
            {
              value: "薪资期权",
              date: [
                {
                  id: 1,
                  title: '加班补助',
                  det: '加班补贴，换休',
                  url: 'https://img.bosszhipin.com/beijin/icon/93b81ebe528998ade6a24b3055a4e76bafa7fcceaa24b8ea28f56f1bb14732c0.png'
                },
                {
                  id: 2,
                  title: '全勤奖',
                  det: '对于全勤员工给予全勤奖',
                  url: 'https://img.bosszhipin.com/beijin/icon/a99d50c070583f5862d5fbdc005c18faafa7fcceaa24b8ea28f56f1bb14732c0.png'
                },
                {
                  id: 3,
                  title: '年终奖',
                  det: '年末给予员工年终奖励，对一年来的工作业绩给予肯定',
                  url: 'https://img.bosszhipin.com/beijin/icon/2baa9de88c36cafa88193b5597f37219afa7fcceaa24b8ea28f56f1bb14732c0.png'
                },
                {
                  id: 4,
                  title: '股票期权',
                  det: '对优秀员工提供股票期权',
                  url: 'https://img.bosszhipin.com/beijin/icon/93ab7493ae7a61684a96c59c58235ec5afa7fcceaa24b8ea28f56f1bb14732c0.png'
                }
              ]
            },
            {
              value: "度假休假",
              date: [
                {
                  id: 1,
                  title: '带薪年假',
                  det: '为员工提供带薪休假',
                  url: 'https://img.bosszhipin.com/beijin/icon/93b81ebe528998ade6a24b3055a4e76bafa7fcceaa24b8ea28f56f1bb14732c0.png'
                },
                {
                  id: 2,
                  title: '员工旅游',
                  det: '组织员工旅游活动',
                  url: 'https://img.bosszhipin.com/beijin/icon/a99d50c070583f5862d5fbdc005c18faafa7fcceaa24b8ea28f56f1bb14732c0.png'
                }
              ]
            },
            {
              value: "生活补贴",
              date: [
                {
                  id: 1,
                  title: '节日福利',
                  det: '法定或者特定节日时提供礼物',
                  url: 'https://img.bosszhipin.com/beijin/icon/93b81ebe528998ade6a24b3055a4e76bafa7fcceaa24b8ea28f56f1bb14732c0.png'
                },
                {
                  id: 2,
                  title: '餐补',
                  det: '工作餐的额外补贴',
                  url: 'https://img.bosszhipin.com/beijin/icon/a99d50c070583f5862d5fbdc005c18faafa7fcceaa24b8ea28f56f1bb14732c0.png'
                }
              ]
            },
            {
              value: "自定义添加",
              date: [
                {
                  id: 1,
                  title: '服装补贴',
                  det: '提供服装补助',
                  url: 'https://img.bosszhipin.com/beijin/icon/93b81ebe528998ade6a24b3055a4e76bafa7fcceaa24b8ea28f56f1bb14732c0.png'
                }
              ]
            }
          ]

      }
    }
  }
</script>

<style>

</style>
