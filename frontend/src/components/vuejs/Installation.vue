<template>
    <div class="installation">
        <div class="content">
            <div class="title bold">{{$t("vuejsMenu2")}}</div>
            <div class="item">
                <div class="titles" id="titleInstal1" tabindex="-1">
                    <a class="titles link" href="#titleInstal1">{{$t("vuejsMenuText2_1")}}</a>
                </div>
                <div class="divider"></div>
                <div class="text">{{$t("instalText1")}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'installation',
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
