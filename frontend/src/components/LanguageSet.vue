<template>
    <div class="languageset">
        <div class="setlanguage">
            <!--<input type="checkbox" v-model="lang" :true-value="'fr'" :false-value='"cn"' @change="setLanguage( lang )" id="slideThree">-->
            <div class="text">{{$t("language")}} :</div>
            <div class="lang">
                <select class="setlang" v-model="lang" @change="setLanguage( lang )">
                    <option class="setlangOpt" :value="'fr'">Français - France</option>
                    <option class="setlangOpt" :value="'cn'">简体中文 - 中国</option>
                    <option class="setlangOpt" :value="'en'">English - USA</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'languageset',
    data() {
        return {
            lang: this.$store.state.lang
        }
    },
    methods: {
        ...mapActions([
            'setLanguage'
        ]),
    }
}
</script>
<style scoped lang="scss">
@import '../styles/style.scss';
.setlanguage {
    display: flex;
    .text {
        font-weight: 500;
        padding-right: 10px;
    }
    .lang {
        .setlang {
            height: 25px;
            font-size: 15px;
            line-height: 1.42857143;
            padding: 0 10px;
            margin-right: 20px;
            color: #555;
            background-image: none;
            background-color: rgba(256, 256, 256, 0.6);
            border: 1px solid #ccc;
            border-radius: 4px;
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            .setlangOpt {
                display: flex;
            }
        }
    }
}
</style>