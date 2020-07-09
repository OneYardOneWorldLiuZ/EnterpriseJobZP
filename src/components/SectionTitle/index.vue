<template>
  <div >
    <div class="section">
      <h4>{{titleStr}}</h4>
    </div>
    <div class="main">
      <add-button class="add-button" v-for="item in itemArr" :key="item.id" :title="item.title" :det="item.det" :imgUrl="item.url"></add-button>
    </div>
  </div>
</template>

<script>
  import AddButton from "@/components/AddButton"
  export default {
    name: 'SectionTitle',
    components: {
      AddButton
    },
    props: {
      titleStr: {
        type: String,
        required: true
      },
      itemArr: {
        type: Array,
        required: true
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
.section{
  background-color: white;
  width: 100%;
  max-height: 45px;
  line-height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  h4 {
    line-height: 45px;
    white-space: nowrap;
    position: relative;
    margin-bottom: 7px;
    padding-left: 8px;
    font-size: 14px;
    font-weight: 400;
    clear: both;
  }
  h4::before {
    content: "";
    left: 0px;
    top: 15px;
    bottom: 15px;
    width: 3px;
    position: absolute;
    background-color: #53cac3;
    border-radius: 1px;
  }
}
  .main {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-flow: wrap;
    .add-button {
      margin-left: 20px;
    }
  }
</style>
