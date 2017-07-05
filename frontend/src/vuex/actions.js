import config from '../config';
import store from './store';
import axios from 'axios';
import * as types from './mutation-types';
import Vue from 'vue';

export const sendContactForm = ({ commit }, formInfos) => {
    /*return new Promise((resolve, reject) => {
        axios.post(config.API_URL + '/ContactUs',formInfos)
            .then(function (response) {
                console.log(response)
                resolve(response);
            })
            .catch(function (error) {
                console.log(error.response)
                reject(error);
            });
    });*/
    console.log("Send Success!");
}

export const setLanguage = ({ commit }, lang) => {
    return commit(types.LANGUAGE, lang);
} 