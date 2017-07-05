<template>
    <div class="introduction">
        <div class="content">
            <div class="title bold">{{$t("vuejsMenu1")}}</div>
            <div class="item">
                <div class="titles" id="titleIntro1" tabindex="-1">
                    <a class="titles link" href="#titleIntro1">{{$t("vuejsMenuText1_1")}}</a>
                </div>
                <div class="divider"></div>
                <div class="text">{{$t("introText1")}}</div>
            </div>
            <div class="item">
                <div class="titles" id="titleIntro2" tabindex="-1">
                    <a class="titles link" href="#titleIntro2">{{$t("vuejsMenuText1_2")}}</a>
                </div>
                <div class="divider"></div>
                <div class="text">{{$t("introText1")}}</div>
            </div>
            <div class="item">
                <div class="titles" id="titleIntro3" tabindex="-1">
                    <a class="titles link" href="#titleIntro3">{{$t("vuejsMenuText1_3")}}</a>
                </div>
                <div class="divider"></div>
                <div class="text">{{$t("introText1")}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'introduction',
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
    text-align: left;
    .title {
        font-size: 35px;
        margin: 30px 0;
    }

    .item {
        margin-bottom: 30px;
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
            margin-top: -91px;
            height: 91px;
            visibility: hidden;
        }

        .divider {
            width: 100%;
            height: 1px;
            background: $link-color;
            margin: 10px 0;
        }
    }
}
</style>
