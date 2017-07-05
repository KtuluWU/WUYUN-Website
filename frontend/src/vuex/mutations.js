import { set } from 'vue';
import * as types from './mutation-types';
import Vue from 'vue';


export const state = {
    lang: 'fr',
}

export const mutations = {
    [types.LANGUAGE](state, setlang) {
        state.lang = setlang;
        Vue.config.lang = state.lang;
    }
}