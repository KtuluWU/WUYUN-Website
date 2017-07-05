<template>
    <div class="apache">
        <div class="content">
            <div class="title bold">{{$t("envirMenu1")}} ({{$t("envirTip")}})</div>
            <div class="item">
                <div class="titles" >{{$t("envirTtitle1_1")}}</div>
                <div class="divider"></div>
                <div class="text">{{$t("envirText1_1_1")}}</div>
                <div class="text">{{$t("envirText1_1_2")}}</div>
                <div class="code">apachectl -v</div>
            </div>
    
            <div class="item">
                <div class="titles" >{{$t("envirTtitle1_2")}}</div>
                <div class="divider"></div>
                <div class="text">{{$t("envirText1_2")}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'installation',
    data() {
        return {
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../styles/style.scss';

.content {
    text-align: left;
    .title {
        font-size: 35px;
        margin: 30px 0;
    }

    .item {
        margin-bottom: 60px;
        .titles {
            text-decoration: none;
            outline: none;
            color: $main-color;
            font-weight: 500;
            font-size: 25px;
        }
        .divider {
            width: 100%;
            height: 1px;
            background: $link-color;
            margin: 10px 0;
        }
        .texte {}
        .code {
            z-index: 999;
            font-family: monospace;
            font-size: 15px;
            background-color: $backgourd-page-color;
            margin: 10px auto;
            height: 60px;
            line-height: 4;
            text-align: center;
            border: 1px solid $link-color;
            border-radius: 5px;
        }
    }
}
</style>
