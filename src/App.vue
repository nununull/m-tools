<template>
  <router-view v-slot="{ Component }">
    <keep-alive exclude="MoviePlay">
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>
<style lang="css">
* {
  padding: 0;
  margin: 0;
}

::-webkit-scrollbar {
  display: none;
}

</style>
