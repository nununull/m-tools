<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
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
