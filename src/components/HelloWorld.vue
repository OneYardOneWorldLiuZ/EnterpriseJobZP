<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>{{this.$store.state.count}}</h2>
    <h2>我叫{{name}},{{age}}岁,性别{{gender}} 显示数量{{count}}</h2>
    <h2>我是页面上获取：{{count}}</h2>
    <h2>我是从Getters的计算属性的值：{{this.$store.getters.getStateCount}}</h2>
    <p>count的值:{{this.$store.state.count}}</p>
    <button @click="addFun">+</button>
    <button @click="reductionFun">-</button>
    <el-button type="primary" onclick="goPath('/login')">主要按钮</el-button>
  </div>
</template>

<script>

  import {mapState} from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // 方式一
  // computed: mapState({
  //   count: 'count'
  // }),
  // 方式二
  computed: mapState(['count','name','age','gender']),
  methods:{
    //页面跳转
    goPath(url){
      this.$router.push({path:url})
    },
    addFun(){
      // this.$store.commit("add")
      this.$store.dispatch("addFun")
    },
    reductionFun(){
      // this.$store.commit("reduction")
      this.$store.dispatch("reductionFun")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
