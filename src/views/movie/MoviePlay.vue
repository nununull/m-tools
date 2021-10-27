<template>
  <div class="main">
    <el-page-header title="返回" @back="goBack"/>
    <el-card class="body">
      <el-form :model="movieVO" inline>
        <el-form-item label="地址">
          <el-input v-model="movieVO.url" clearable/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="goPlay">播放</el-button>
        </el-form-item>
      </el-form>

      <div class="player">
        <ufun-plyr :play-url="movieVO.playUrl"/>
      </div>
    </el-card>
  </div>
</template>

<script>
import UfunPlyr from "@/components/common/plyr/UfunPlyr";

export default {
  name: "MoviePlay",
  components: {
    "ufun-plyr": UfunPlyr
  },
  data() {
    return {
      movieVO: {
        url: "",
        playUrl: "http://womlive.cloud.wo.cn/tvlive/100002/otpzod_otpzod,100002_hls_pull_2000K_live.m3u8"
      }
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    goPlay() {

      let reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;

      if (!this.movieVO.url || !reg.test(this.movieVO.url)) {

        this.$message.warning("链接地址有误！");

        return;
      }

      this.movieVO.playUrl = this.movieVO.url;
    }
  }
}
</script>

<style scoped>
.main {
  padding: 30px;
}

.body {
  margin-top: 20px;
}

.player {
  width: 50%;
  height: 50%;
}
</style>