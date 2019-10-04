<template>
  <div>
    <el-header>
      <el-carousel class="lunbo" height="183px">
        <el-carousel-item v-for="item in trueUrl" :key="item">
          <img :src="item" />
        </el-carousel-item>
      </el-carousel>
    </el-header>
    <el-main>
      <!-- 路由显示内容 -->
      <router-view></router-view>
    </el-main>
    <el-footer>
      <ul>
        <li
          :class="{'active':activeIdx===idx}"
          :index="item.path"
          v-for="(item,idx) in menus"
          :key="item.name"
          @click="goto(item.path),active(idx)"
        >
          <i :class="item.iconClass" :key="item.iconClass"></i>
          <h4>{{item.text}}</h4>
        </li>
      </ul>
      <!-- <el-button type="text" @click="goto('/reg')">注册</el-button>
      <el-button type="text" @click="goto('/login')">登录</el-button>-->
    </el-footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      activeIdx: 0,
      lunbo: ["lunbo1", "lunbo2", "lunbo3"],
      trueUrl: [],
      menus: [
        {
          name: "search",
          path: "/search",
          text: "探索",
          iconClass: "el-icon-search"
        },
        {
          name: "wish",
          path: "/wish",
          text: "心愿单",
          iconClass: "el-icon-goods"
        },
        {
          name: "story",
          path: "/story",
          text: "故事",
          iconClass: "el-icon-edit-outline"
        },
        {
          name: "message",
          path: "/message",
          text: "收件箱",
          iconClass: "el-icon-chat-dot-round"
        },
        {
          name: "login",
          path: "/login",
          text: "登录",
          iconClass: "el-icon-user"
        }
      ]
    };
  },
  methods: {
    active(idx) {
      this.activeIdx = idx;
    },
    goto(path) {
      this.$router.push(path);
    }
  },
  created() {
    // console.log(this)
    this.activeIndex = this.$route.path;
    this.lunbo.forEach(item => {
      this.trueUrl.push(require(`./assets/${item}.jpg`));
    });
    // console.log(this.trueUrl);
  },
  components: {}
};
</script>

<style lang="scss" scoped>
ul,
li {
  list-style: none;
}
.active {
  color: #f00;
}
.price {
  del {
    &::before {
      content: "￥";
    }
  }
  span {
    color: #ff5a5f;
    margin-left: 5px;
    &::before {
      content: "￥";
    }
  }
}
.el-header {
  height: 183px !important;
  padding: 0 !important;
  width: 100%;
  .lunbo {
    width: 100%;
    height: 183px;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
.el-footer {
  height: 80px !important;
  background-color: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  ul {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      h4 {
        margin-top: 5px;
        font-size: 12px;
        font-weight: normal;
      }
      i {
        font-size: 26px;
      }
    }
  }
}
</style>


