<template>
  <div class="main">
    <el-page-header title="返回" @back="goBack"/>
    <el-card class="body">
      <el-form :model="movieVO" inline>
        <el-form-item>
          <el-select v-model="movieVO.preUrl" placeholder="解析源" clearable>
            <el-option
                v-for="(item,index) in iframeUrlPrefixList"
                :key="item.value"
                :label="'线路' + (index + 1)"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="movieVO.playUrl" placeholder="请注意输入正确连接" clearable/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="goPlay">播放</el-button>
        </el-form-item>
      </el-form>

      <div>
        <iframe class="player" :src="playUrl"
                allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
                frameSpacing="0" marginHeight="0" frameBorder="0" scrolling="no" vspale="0" noResize>
        </iframe>
      </div>
      <div class="player-icon">
        <div v-for="platform in supportPlatformList" :key="platform.platform" class="block">
          <el-image
              style="width: 50px; height: 50px;margin: 5px;"
              :src="platform.img"
          />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import VIP_PARSE_CONSTANT from "@/constant/vip-parse-constant";

export default {
  name: "VipParse",
  data() {
    return {
      movieVO: {
        preUrl: "https://okjx.cc/?url=",
        playUrl: "https://v.qq.com/x/page/z33041o1lem.html"
      },
      playUrl: "https://okjx.cc/?url=https://v.qq.com/x/page/z33041o1lem.html",
      iframeUrlPrefixList: VIP_PARSE_CONSTANT.PARSE_PREFIX_LIST,
      supportPlatformList: VIP_PARSE_CONSTANT.SUPPORT_PLATFORM_LIST
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    goPlay() {

      // let reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;
      //
      // if (!this.movieVO.playUrl || !reg.test(this.movieVO.playUrl)) {
      //
      //   this.$message.warning("链接地址有误！");
      //
      //   return;
      // }

      if (!this.movieVO.playUrl) {

        this.$message.warning("链接地址不能为空！");

        return;
      }

      this.$message.success("开始解析并播放，错误链接可能导致解析失败！");

      this.playUrl = this.movieVO.preUrl + this.movieVO.playUrl;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onMakeSure() {

      if (!this.playUrl) {

        this.$toast.fail("不能为空！");

        return;
      }

      this.iframeUrl = this.playUrl;
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

@media only screen and (max-width: 600px) {

  .player {
    width: 100%;
    height: 18rem;
  }
}

@media only screen and (min-width: 800px) {

  .player {
    width: 40%;
    height: 30rem;
  }
}

.player-icon {
  display: flex;
  justify-items: first;
}
</style>