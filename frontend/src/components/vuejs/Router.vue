<template>
  <div class="router">
    <div class="content">
      <div class="title bold">{{$t("vuejsMenu4")}}</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'router',
  components: {
    
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/style.scss';

.content {
    .title {
        font-size: 30px;
        text-align: left;
        margin: 30px 0;
    }
}
</style>
