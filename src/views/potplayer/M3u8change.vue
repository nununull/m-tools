<template>
  <div class="main">
    <el-row>
      <el-form inline>
        <el-form-item label="行分割符">
          <el-input v-model="splitString"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onParseChange">转换</el-button>
        <el-button type="success" @click="onExport">导出m3u格式结果文件</el-button>
      </el-form>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="11">
        <el-input type="textarea" v-model="dataBefore" :rows="30" placeholder="请输入参数"/>
      </el-col>
      <el-col :span="11">
        <el-input type="textarea" v-model="dataAfter" :rows="30" placeholder="结果"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {saveAs} from 'file-saver';

export default {
  name: "M3u8change",
  data() {
    return {
      splitString: ",",
      dataBefore: "CCTV1 3M1080,http://hdtv.haust.edu.cn/hls/cctv1hd.m3u8",
      dataAfter: "#EXTM3U\n" +
          "#EXTINF:-1 ,CCTV1 3M1080\n" +
          "http://hdtv.haust.edu.cn/hls/cctv1hd.m3u8"
    }
  },
  methods: {
    onParseChange() {

      if (!this.dataBefore) {

        this.$message.warning("请填入数据！");

        return;
      }

      // 组装格式
      // #EXTM3U
      // #EXTINF:-1 ,CCTV1-1080P
      // http://keonline.shanghai.liveplay.qq.com/live/program/live/cctv1hd/4000000/mnf.m3u8

      let dataList = this.dataBefore.split("\n");

      let result = "#EXTM3U\n";

      for (let data of dataList) {

        let values = data.split(this.splitString);

        result = result.concat("#EXTINF:-1 ,", values[0], "\n", values[1], "\n")
      }

      this.dataAfter = result;
    },
    onExport() {

      if (!this.dataAfter) {

        this.$message.warning("没有结果数据！");

        return;
      }

      let now = Date.now();

      let blob = new Blob([this.dataAfter], {type: "text/plain;charset=utf-8"});

      saveAs(blob, "potplayer-" + now + ".m3u");

    }
  }
}
</script>

<style scoped>
.main {
  padding: 20px;
}
</style>