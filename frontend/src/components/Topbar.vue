<template>
    <div class="topbar">
        <div class="contentTopbar">
            <div class="item">
                <div class="logo" v-on:click="navigateTo('Home')"></div>
                <div class="navigate">
                    <div class="link" v-on:click="navigateTo('Home')">{{$t("Pages1")}}</div>
                    <div class="link" v-on:click="navigateTo('Work')">{{$t("Pages2")}}</div>
                    <div class="link" v-on:click="navigateTo('Blog')">{{$t("Pages3")}}</div>
                    <div class="link" v-on:click="navigateTo('Life')">{{$t("Pages4")}}</div>
                    <div class="link" v-on:click="navigateTo('Contact')">{{$t("Pages5")}}</div>
                </div>
            </div>
            <languageset-page></languageset-page>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import languageset from './LanguageSet'

export default {
    name: 'topbar',
    components: {
        'languageset-page': languageset
    },
    data() {
        return {
        }
    },
    methods: {
        navigateTo(page) {
            this.$router.push({ name: page });
        },
    }
}
</script>

<style scoped lang="scss">
@import '../styles/style.scss';
.topbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    width: 100%;
    min-height: 60px;
    height: $topbar-height;
    margin: 0;
    padding: 0;

    background: $backgroud-color;
    color: $main-color;
    line-height: $topbar-height;
    box-shadow: 0 2px 8px -2px rgba($shadow-color, 0.8);

    .contentTopbar {
        display: flex;
        justify-content: space-between;
        .item {
            display: flex;
            .logo {
                width: 256px;
                height: 60px;
                background-image: url('../assets/logo.png');
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                cursor: pointer;
            }

            .navigate {
                display: flex;
                margin-left: 50px;

                .link {
                    padding: 0 12px;
                    font-size: 18px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: 0.4s;
                }

                .link:focus,
                .link:hover {
                    background: $main-color;
                    color: $text-second-color;
                }
            }
        }
    }
}
</style>
