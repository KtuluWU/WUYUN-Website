<template>
    <div class="mysql">
        <div class="content">
            <div class="title bold">{{$t("envirMenu1")}} ({{$t("envirTip")}})</div>
            <div class="item">
                <div class="titles" id="titleApache1" tabindex="-1">
                    <a class="titles link" href="#titleApache1">{{$t("envirTtitle1_1")}}</a>
                </div>
                <div class="divider"></div>
                <div class="text">{{$t("envirText1_1_1")}}</div>
                <div class="text">{{$t("envirText1_1_2")}}</div>
                <div class="code">apachectl -v</div>
                <div class="dzdzdz"><code>apachectl -v</code></div>
            </div>
    
            <div class="item">
                <div class="titles" id="titleApache2" tabindex="-1">
                    <a class="titles link" href="#titleApache2">{{$t("envirTtitle1_2")}}</a>
                </div>
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
        .link:before {
            content: '';
            display: block;
            margin-top: -80px;
            height: 80px;
            visibility: hidden;
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
