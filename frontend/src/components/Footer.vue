<template>
    <div class="footer">
        <div class="content">
            <div class="about">
                <div class="title">{{$t("footerTitle")}}</div>
                <div class="container">
                    <a href="https://www.facebook.com/wu.yun621" target="_blank">
                        <div class="icon socicon-facebook"></div>
                    </a>
                    <a href="https://www.linkedin.com/in/yunwu0621/" target="_blank">
                        <div class="icon socicon-linkedin"></div>
                    </a>
                    <a href="https://github.com/KtuluWU" target="_blank">
                        <div class="icon socicon-github"></div>
                    </a>
                    <router-link class="router-link" :to="{name: 'Wechat'}">
                        <div class="icon socicon-wechat"></div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'footer',
    data() {
        return {

        }
    }
}
</script>

<style scoped lang="scss">
@import '../styles/style.scss';
.footer {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 150px;
    overflow: hidden;
    margin: 0;
    padding-top: 16px;
    background: $backgroud-color;
    color: $main-color;

    a {
        text-decoration: none;
    }

    .content {
        .about {
            .title {
                padding: 20px;
                font-size: 25px;
                font-weight: 600;
            }
            .container {
                display: flex;
                margin: auto;
                width: 224px;

                .icon {
                    width: 40px;
                    height: 40px;
                    font-size: 28px;
                    line-height: 40px;
                    margin: 0 12px 0 0;
                    color: $main-color;
                    background: $text-second-color;
                    border-radius: 1px;
                    border: 4px solid $main-color;
                    cursor: pointer;
                    transition: 0.4s;
                }

                .icon:hover {
                    background: $main-color;
                    color: $text-second-color;
                }
            }
        }
    }
}
</style>