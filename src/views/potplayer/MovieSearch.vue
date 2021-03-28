<template>
  <div class="main">
    <el-row>
      <el-form inline @submit.native.prevent>
        <el-form-item label="剧名" v-model="searchParams">
          <el-input v-model="searchParams.keywords"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSearch(1)">查询</el-button>
      </el-form>
    </el-row>
    <div>
      <el-table
          :data="okResc.tableData.list"
          height="70vh">
        <el-table-column
            type="index"
            width="50">
        </el-table-column>
        <el-table-column
            prop="type_name"
            label="类型"
            width="180">
        </el-table-column>
        <el-table-column
            prop="vod_name"
            label="剧名"
            width="280">
        </el-table-column>
        <el-table-column
            prop="vod_remarks"
            label="备注"
            width="180">
        </el-table-column>
        <el-table-column
            prop="vod_time"
            label="更新日期"
            width="180">
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template #default="scope">
            <el-button
                size="mini"
                type="primary"
                @click="onDetail(scope.$index, scope.row)">查看
            </el-button>
            <el-button
                size="mini"
                type="danger"
                @click="onPlay(scope.$index, scope.row)">播放
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          style="padding: 10px;"
          hide-on-single-page
          background
          layout="total,prev, pager, next"
          :page-size="okResc.tableData.limit"
          :total="okResc.tableData.total"
          @current-change="onPageChange">
      </el-pagination>
    </div>
    <el-dialog v-model="isShowDeatailDialog">
      <el-card>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-image :src="movieVO.vodPic"></el-image>
          </el-col>
          <el-col :span="12">
            <div>
              <b v-text="movieVO.vodName"></b>
              <div>
                <div>别名：{{ movieVO.vodSub }}</div>
                <div>导演：{{ movieVO.vodDirector }}</div>
                <div>类型：{{ movieVO.typeName }}</div>
                <div>年份：{{ movieVO.vodYear }}</div>
                <div>地区：{{ movieVO.vodArea }}</div>
                <div>语言：{{ movieVO.vodLang }}</div>
                <div>演员：{{ movieVO.vodActor }}</div>
              </div>
              <div style="margin-top: 30px;">
                <div v-if="movieVO.downloadUrlList">
                  <el-button type="primary" @click="onCopyDownloadUrl">复制下载地址</el-button>
                </div>
                <div v-if="movieVO.playVOList" style="margin-top: 10px;">
                  <el-button type="primary" @click="onCopyM3u8">复制m3u8地址</el-button>
                  <el-button type="danger" @click="onExportPotPlayerM3u8">导出为PotPlayer格式</el-button>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </el-dialog>
  </div>
</template>

<script>
import {saveAs} from 'file-saver';
import STRING_UTIL from "../../util/string-util"

export default {
  name: "MovieSearch",
  data() {
    return {
      searchParams: {
        keywords: ""
      },
      isShowDeatailDialog: false,
      movieVO: "",
      okResc: {
        tableData: "",
        searchPageParams: {
          ac: "list",
          wd: this.keywords,
          // 类别ID
          t: null,
          // 页码
          pg: 1
        }
      }
    }
  },
  methods: {
    onSearch(currentPage) {

      // if (!this.searchParams.keywords) {
      //   return;
      // }

      this.onSearchOk(currentPage);
    },
    // 搜索OK资源网
    async onSearchOk(currentPage) {

      this.okResc.searchPageParams.wd = this.searchParams.keywords;
      this.okResc.searchPageParams.pg = currentPage;

      let resp = await this.$httpUtil.http(this.$httpApi.SERVICE.OK.page, this.okResc.searchPageParams);

      // 如果有结果
      if (resp) {
        this.okResc.tableData = resp;
      }
    },
    onPageChange(currentPage) {

      this.onSearch(currentPage)
    },
    async onDetail(index, row) {

      let resp = await this.$httpUtil.http(this.$httpApi.SERVICE.OK.detail, {ac: "detail", ids: row.vod_id});

      if (1 !== resp.code) {
        this.$message.warning("请求失败！");
      }

      // 可能存在没有播放链接视频
      let movieVO = resp.list[0];

      if (!resp.list || 0 >= resp.list.length || !movieVO.vod_play_url) {

        this.$message.warning("当前视频播放地址已被删除，无法播放！");

        return;
      }

      let newMovieVO = this.dealMovieVO(movieVO);

      this.movieVO = newMovieVO;

      this.isShowDeatailDialog = true;
    },
    async onPlay(index, row) {

      let resp = await this.$httpUtil.http(this.$httpApi.SERVICE.OK.detail, {ac: "detail", ids: row.vod_id});

      if (1 !== resp.code) {
        this.$message.warning("请求失败！");
      }

      // 可能存在没有播放链接视频
      let movieVO = resp.list[0];

      if (!resp.list || 0 >= resp.list.length || !movieVO.vod_play_url) {

        this.$message.warning("当前视频播放地址已被删除，无法播放！");

        return;
      }

      let newMovieVO = this.dealMovieVO(movieVO);

      this.movieVO = newMovieVO;

      localStorage.setItem("movieVO", JSON.stringify(newMovieVO));

      this.$store.commit("updatePlayVO", newMovieVO.playVOList[0]);

      // 打开播放页
      await this.$router.push("pot-player-movie-play");
    },
    dealMovieVO(movieVO) {

      // 解析资源 只拿m3u8
      let typeList = movieVO.vod_play_from.split(movieVO.vod_play_note);

      let m3u8Index = 0;

      for (let i = 0; i < typeList.length; i++) {

        if (-1 < typeList[i].indexOf("m3u8") || -1 < typeList[i].indexOf("M3U8")) {
          m3u8Index = i;
        }
      }

      let playString = movieVO.vod_play_url.split(movieVO.vod_play_note)[m3u8Index];

      let playList = [];

      for (let playVOString of playString.split("#")) {

        let play = playVOString.split("$");

        let playVO = {};

        playVO.title = play[0];
        playVO.url = play[1];

        playList.push(playVO);
      }

      // 处理下下载链接
      let downloadUrlList = [];
      let downString = movieVO.vod_down_url;

      if (downString) {
        for (let downStr of downString.split("#")) {
          let download = downStr.split("$");

          let downloadVO = {};

          downloadVO.title = download[0];
          downloadVO.url = download[1];

          downloadUrlList.push(downloadVO);
        }
      }

      let newMovieVO = {};

      newMovieVO.vodId = movieVO.vod_id;
      newMovieVO.vodName = movieVO.vod_name;
      newMovieVO.vodSub = movieVO.vod_sub;
      newMovieVO.vodDirector = movieVO.vod_director;
      newMovieVO.vodClass = movieVO.vod_class;
      newMovieVO.vodPic = movieVO.vod_pic;
      newMovieVO.vodActor = movieVO.vod_actor;
      newMovieVO.vodBlurb = movieVO.vod_blurb;
      newMovieVO.vodRemarks = movieVO.vod_remarks;
      newMovieVO.vodArea = movieVO.vod_area;
      newMovieVO.vodLang = movieVO.vod_lang;
      newMovieVO.vodYear = movieVO.vod_year;
      newMovieVO.vodTime = movieVO.vod_time;
      newMovieVO.vodContent = movieVO.vod_content;
      newMovieVO.vodPlayFrom = movieVO.vod_play_from;
      newMovieVO.vodPlayServer = movieVO.vod_play_server;
      newMovieVO.typeName = movieVO.type_name;
      newMovieVO.isCollected = false;
      newMovieVO.downloadUrlList = downloadUrlList;
      newMovieVO.playVOList = playList;

      return newMovieVO;
    },
    onCopyDownloadUrl() {

      let result = STRING_UTIL.array2M3u8String(this.movieVO.vodName, this.movieVO.downloadUrlList)

      this.onCopy(result);

      this.$message.success("下载地址复制成功！");
    },
    onCopyM3u8() {
      let result = STRING_UTIL.array2M3u8String(this.movieVO.vodName, this.movieVO.playVOList)

      this.onCopy(result);

      this.$message.success("下载地址复制成功！");
    },
    onExportPotPlayerM3u8() {
      let result = STRING_UTIL.array2PotPlayerM3u8String(this.movieVO.vodName, this.movieVO.playVOList)

      this.onCopy(result);

      let now = Date.now();

      let blob = new Blob([result], {type: "text/plain;charset=utf-8"});

      saveAs(blob, this.movieVO.vodName + now + ".m3u");
    },
    onCopy(copyValue) {

      // 直接构建input
      let input = document.createElement("textarea");

      // 设置内容
      input.value = copyValue;

      // 添加临时实例
      document.body.appendChild(input);

      // 选择实例内容
      input.select();

      // 执行复制
      document.execCommand("Copy");

      // 删除临时实例
      document.body.removeChild(input);
    },
    keyupEnter() {

      let $this = this;

      document.onkeydown = function () {

        let key = window.event.keyCode;

        if (key === 13) {

          $this.onSearch(1);
        }
      }
    }
  },
  created() {
    this.keyupEnter();
  }
}
</script>

<style scoped>
.main {
  padding: 30px;
}
</style>