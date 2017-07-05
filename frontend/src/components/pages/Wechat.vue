<template>
    <div class="wechat">
        <div class="content">
            <div class="title bold">{{$t("Pages9")}}</div>
            <div class="QRcode"></div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'wechat',
    data() {
        return {
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../styles/style.scss';

.content {
    padding-bottom: 30px;
    .title {
        text-align: center;
        color: $main-color;
        font-size: 32px;
        padding: 20px 0;
    }
    .QRcode {
        margin: auto;
        width: 476px;
        height: 600px;
        background-image: url('../../assets/wechat.jpeg');
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 5px;
        box-shadow: 3px 3px 10px 0px $shadow-color;
        transition: 0.5s;
    }
    .QRcode:hover {
        box-shadow: 3px 3px 30px 0px $shadow-color;
    }
}
</style>