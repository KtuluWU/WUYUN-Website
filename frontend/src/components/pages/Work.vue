<template>
    <div class="work">
        <div class="content">
            <div class="title bold">{{$t("workTitle")}}</div>
            <div class="title2 bold">( {{$t("tip")}} )</div>
            <div class="Text">{{$t("workText1")}}</div>
            <div class="Text">{{$t("workText2")}}</div>
            <div class="Text">{{$t("workText3")}}</div>
            <div class="Text attention">{{$t("workText4")}}</div>
            <div class="divider"></div>
            <div class="pack-container">
                <router-link class="router-link pack" :to="{name: 'Environment'}">
                    <div class="titles bold">{{$t("Pages8")}}</div>
                    <div class="image">
                        <div class="environment"></div>
                    </div>
                    <div class="texts">{{$t("workTexts3")}}</div>
                </router-link>
                <router-link class="router-link pack" :to="{name: 'Vuejs'}">
                    <div class="titles bold">{{$t("Pages6")}}</div>
                    <div class="image">
                        <div class="vuejs"></div>
                    </div>
                    <div class="texts">{{$t("workTexts1")}}</div>
                </router-link>
    
                <router-link class="router-link pack" :to="{name: 'Laravel'}">
                    <div class="titles bold">{{$t("Pages7")}}</div>
                    <div class="image">
                        <div class="laravel"></div>
                    </div>
                    <div class="texts">{{$t("workTexts2")}}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'work',
    data() {
        return {
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../styles/style.scss';

.content {
    width: 940px;
    padding-bottom: 50px;
    .title {
        text-align: center;
        color: $main-color;
        font-size: 32px;
        padding: 20px 0;
    }
    .title2 {
        color: $tip-color;
        font-size: 20px;
        padding-bottom: 20px;
    }
    .Text {
        text-align: left;
        color: $main-color;
    }
    .Text:nth-child(5) {
        margin-bottom: 20px;
    }

    .attention {
        background-color: #f8f8f8;
        border-left: 4px solid $tip-color;
        padding: 12px 24px 12px 30px;
        border-bottom-right-radius: 2px;
        border-top-right-radius: 2px;
    }

    .divider {
        width: 100%;
        height: 1px;
        background: $link-color;
        margin: 10px 0;
    }
    .pack-container {
        display: flex;
        justify-content: space-between;
        margin: 12px 0;
        .pack {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 300px;
            align-items: center;
            text-decoration: none;
            border-radius: 3px;
            box-shadow: 2px 2px 5px 1px $shadow-color;
            transition: 0.5s;

            .titles {
                margin-top: 20px;
                font-size: 20px;
                color: $main-color;
            }
            .image {
                width: 300px;
                height: 300px;
            }
            .texts {
                margin: 12px;
                height: 110px;
                text-align: center;
                color: $main-color;
            }
            .vuejs {
                background-image: url('../../assets/vue-logo-1.png');
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                width: 200px;
                height: 200px;
                margin: 50px;
            }
            .laravel {
                background-image: url('../../assets/laravel-logo.png');
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                width: 210px;
                height: 210px;
                margin: 45px;
            }
            .environment {
                background-image: url('../../assets/environment-logo.png');
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                width: 280px;
                height: 280px;
                margin: 10px;
            }
        }
        .pack:hover {
            background: $backgroud-color;
            box-shadow: 3px 3px 30px 0px $shadow-color;
            transform: scale(1.05, 1.05);
            -ms-transform: scale(1.05, 1.05);
            /* IE 9 */
            -moz-transform: scale(1.05, 1.05);
            /* Firefox */
            -webkit-transform: scale(1.05, 1.05);
            /* Safari 和 Chrome */
        }
    }
}
</style>