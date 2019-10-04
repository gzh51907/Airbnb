<template>
  <div>
    <div v-for="category in recommend" :key="category.title">
      <h4>{{category.title}}</h4>
      <el-row :gutter="20">
        <el-col
          :span="6"
          v-for="item in category.item"
          :key="item.goods_id"
          style="height:22rem"
          @click.native="goto(item.goods_id)"
        >
          <el-image style="width:15rem;height:15rem" :src="item.goods_image" fit="contain"></el-image>
          <h4>{{item.goods_name}}</h4>
          <p class="price">
            <del>{{item.goods_price}}</del>
            <span>{{item.goods_promotion_price}}</span>
          </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      adlist: [],
      recommend: []
    };
  },
  methods: {
    goto(id) {
      this.$router.push({ name: "goods", params: { id } });
    }
  },
  async created() {
    let {
      data: { datas }
    } = await this.$axios.get("https://www.nanshig.com/mobile/index.php", {
      params: {
        act: "index"
      }
    });
    console.log(datas);
    // 轮播图数据
    this.adlist = datas[0].adv_list.item;

    // 春夏新品推荐
    this.recommend = datas.slice(1).map(item => {
      return item.goods;
    });
  }
};
</script>

<style lang="scss" scoped>

</style>