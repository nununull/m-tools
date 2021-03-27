<template>
  <div class="main">
    <div class="player">
      <el-row>
        <el-col :span="10">
          <div class="player-desc">
            <div style="color: #DEB984;font-size: 35px;">{{ title }}</div>
            <div style="margin-top: 30px">
              <van-grid :column-num="4" :border="false">
                <van-grid-item
                    v-for="(playVO,playVOIndex) in movieVO.playVOList" :key="playVOIndex"
                    :text="playVO.title"
                    @click="switchMovie(playVO)"
                />
              </van-grid>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <ufun-plyr class="player-item" :play-url="playVO.url"></ufun-plyr>
        </el-col>
      </el-row>
    </div>
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
    return {}
  },
  computed: {
    title() {

      return this.movieVO.vodName + "-" + this.playVO.title;
    },
    playUrl() {

      return this.playVO.url;
    },
    playVO() {

      let playVO = this.$store.state.playVO;

      if (!playVO) {
        playVO = JSON.parse(localStorage.getItem("playVO"));
      }

      return playVO;
    },
    movieVO() {

      let movieVO = localStorage.getItem("movieVO")

      return JSON.parse(movieVO);
    }
  },
  methods: {
    switchMovie(playVO) {

      if (this.playVO.url === playVO.url) {
        return;
      }

      this.$store.commit("updatePlayVO", playVO);
    }
  },
  mounted() {

  },
  created() {

    let movieVO = JSON.parse(localStorage.getItem("movieVO"));

    if (!movieVO) {
      this.$router.push({name: "Home"})
      return;
    }

    if (!this.$store.state.playVO) {
      this.$store.commit("updatePlayVO", movieVO.playVOList[0]);
    }
  }
}
</script>

<style scoped>
.main {

}

.player {
  width: 100vw;
  position: absolute;
  top: 20%;
}

.player-desc {
  padding-right: 30px;
  text-align: center;
  color: #00B3FF;
}
</style>