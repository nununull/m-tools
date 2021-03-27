<template>
  <div>
    <mp4-plyr v-if="isMp4" :play-url="playUrl"/>
    <m3u8-plyr v-if="!isMp4" :play-url="playUrl" />
  </div>
</template>

<script>
import Mp4Plyr from "@/components/common/plyr/Mp4Plyr";
import M3u8Plyr from "@/components/common/plyr/M3u8Plyr";

export default {
  name: "UfunPlyr",
  props: ["playUrl"],
  components: {
    "mp4-plyr": Mp4Plyr,
    "m3u8-plyr": M3u8Plyr
  },
  computed: {
    isMp4() {

      if (this.playUrl && (-1 < this.playUrl.indexOf("mp4") || -1 < this.playUrl.indexOf("MP4"))) {

        return true;
      }

      return false;
    }
  }
};
</script>

<style scoped>

</style>