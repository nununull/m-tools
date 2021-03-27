<template>
  <div>
    <video id="plyr" ref="plyr" controls crossorigin playsinline autoplay :poster="require('@/assets/poster.png')" />
  </div>
</template>

<script>
import Hls from "hls.js";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import i18n from "@/components/common/plyr/plyr-i18n";

export default {
  name: "M3u8Plyr",
  props: ["playUrl"],
  data() {
    return {
      player: {},
      hls: {}
    }
  },
  computed: {
    videoOption() {
      return {
        debug: false,
        i18n: i18n,
        tooltips: {
          controls: false,
          seek: true
        },
        controls: [
          "play-large", // The large play button in the center
          "rewind", // Rewind by the seek time (default 10 seconds)
          "play", // Play/pause playback
          "fast-forward", // Fast forward by the seek time (default 10 seconds)
          "progress", // The progress bar and scrubber for playback and buffering
          "current-time", // The current time of playback
          "duration", // The full duration of the media
          "mute", // Toggle mute
          "volume", // Volume control
          "settings", // Settings menu
          "pip", // Picture-in-picture (currently Safari only)
          "airplay", // Airplay (currently Safari only)
          "fullscreen" // Toggle fullscreen
        ]
      }
    }
  },
  mounted() {

    let video = document.getElementById("plyr");

    let player = new Plyr(video, this.videoOption);

    let hls = new Hls();

    hls.loadSource(this.playUrl);
    hls.attachMedia(video);

    player.on("languagechange", () => {
      setTimeout(() => (hls.subtitleTrack = player.currentTrack), 50);
    });

    this.player = player;
    this.hls = hls;
  },
  watch: {
    async playUrl(newPlayUrl) {

      this.hls.loadSource(newPlayUrl);
      this.hls.attachMedia(this.$refs.plyr);

      if (!this.player.playing) {
        this.player.play();
      }
    }
  },
  unmounted() {
    this.player.destroy();
  }
};
</script>

<style scoped>

</style>