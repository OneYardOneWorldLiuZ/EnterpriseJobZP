<template>
  <div class="welfare-card">
    <div class="welfare-icon">
      <img :src="imgUrl">
    </div>
    <div class="welfare-container">
      <div class="welfare-name">{{title}}</div>
      <span class="welfare-content">{{det}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      det: {
        type: String
      },
      imgUrl: {
        type: String
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
.welfare-card{
  width: 334px;
  height: 104px;
  margin: 0 19px 20px 0;
  padding: 17px;
  box-sizing: border-box;
  border: 1px solid #e3e7ed;
  display: flex;
  flex-direction: row;
  .welfare-icon{
    margin-right: 12px;
    line-height: 50px;
    img {
      width: 50px;
      height: 50px;
      justify-content: center;
      align-items: center;
      position: relative;
      text-align: center;
    }
  }
  .welfare-container {
    .welfare-name {
      line-height: 25px;
      color: #414a60;
      font-size: 14px;
      font-weight: 400;
    }
    .welfare-content{
      max-height: 42px;
      color: #898e9d;
      font-size: 13px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
