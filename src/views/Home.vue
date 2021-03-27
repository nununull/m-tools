<template>
  <div class="main">
    <el-tabs tab-position="left" style="height: 90vh;">
      <el-tab-pane label="PotPlayer">
        <el-row :gutter="10">
          <el-col :span="5">
            <el-card shadow="hover" @click="to('pot-player-m3u8-change')" body-style="background-color: #40B8FF;">
              <span style="color: white">M3U8转换为PotPlayer的M3U格式文件</span>
            </el-card>
          </el-col>
        </el-row>
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
}
</style>