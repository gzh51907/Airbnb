<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="18">
          <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" router>
            <el-menu-item :index="item.path" v-for="item in menus" :key="item.name">
              <!-- 点击进入对应的路由 -->
              <!-- <router-link :to="item.path"> -->
              <!-- ElementUI已经有router-link功能 -->
              {{item.text}}
              <!-- </router-link> -->
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="6" style="height:61px">
          <el-button type="text" @click="goto('/reg')">注册</el-button>
          <el-button type="text" @click="goto('/login')">登录</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <!-- 路由显示内容 -->
      <router-view></router-view>
    </el-main>
    <el-footer>&copy;Ray</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      activeIndex: "/home",
      menus: [
        {
          name: "home",
          path: "/home",
          text: "首页"
        },
        {
          name: "discover",
          path: "/discover",
          text: "发现"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的"
        }
      ]
    };
  },
  methods: {
    handleSelect(index, indexPath) {
      console.log(index, indexPath);
      this.activeIndex = index;
    },
    goto(path){
      this.$router.push(path)
    }
  },
  created() {
    // console.log(this)
    this.activeIndex = this.$route.path;
  },
  components: {}
};
</script>

<style lang="scss">
.price{
        del{
            &::before{
                content:'￥'
            }
        }
        span{
            color:#f00;margin-left:5px;
            &::before{
                content:'￥'
            }
        }
    }
</style>


