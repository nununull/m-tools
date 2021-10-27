<template>
  <div class="main">
    <div class="player">
      <ufun-plyr class="player-item" :play-url="url"></ufun-plyr>
    </div>
    <div style="display:flex;justify-items: center;justify-content: center;padding: 30px;">
      <el-form :inline="true">
        <el-form-item label="M3U8地址">
          <el-input v-model="m3u8Url"/>
        </el-form-item>
        <el-button type="primary" @click="onClickM3u8Url">确定</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import UfunPlyr from "@/components/common/plyr/UfunPlyr";

export default {
  name: "M3u8Play",
  components: {
    "ufun-plyr": UfunPlyr
  },
  data() {
    return {
      url: "",
      m3u8Url: ""
    }
  },
  computed: {},
  methods: {
    onClickM3u8Url() {

      if (!this.m3u8Url) {

        this.$message.warning("地址不能为空！");

        return;
      }

      this.url = this.m3u8Url;
    }
  },
  mounted() {

  },
  created() {
  }
}
</script>

<style scoped>
.main {
  padding: 10px;
}

.player {
  display: flex;
  justify-items: center;
  justify-content: center;
}

</style>