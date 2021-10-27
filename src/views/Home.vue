<template>
  <div class="main">
    <el-tabs tab-position="left" style="height: 90vh;">
      <el-tab-pane label="PotPlayer">
        <van-grid square>
          <van-grid-item icon="exchange" text="M3U8转换" to="pot-player-m3u8-change" />
          <van-grid-item icon="play-circle-o" text="电影搜索" to="pot-player-movie-search" />
        </van-grid>
      </el-tab-pane>
      <el-tab-pane label="播放工具">
        <van-grid square>
          <van-grid-item icon="play-circle" text="M3U8播放" to="movie-play" />
        </van-grid>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {}
  },
  methods: {
    to(modelName) {
      this.$router.push({name: modelName});
    }
  }
}
</script>

<style scoped>
.main {
  padding: 20px;
  text-align: center;
}
</style>