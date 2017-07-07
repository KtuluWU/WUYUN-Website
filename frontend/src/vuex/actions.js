import config from '../config';
import store from './store';
import axios from 'axios';
import * as types from './mutation-types';
import Vue from 'vue';



export const sendContactForm = ({ commit }, formInfos) => {
    // var qs = require('qs');
    console.log("发送数据：");
    console.log(formInfos);
    return new Promise((resolve, reject) => {

        axios.post("http://localhost:8000/api/contactForm", formInfos)
            .then(function (response) {
                console.log(response)
                resolve(response);
            })
            .catch(function (error) {
                console.log(error)
                reject(error);
            });

    });
}

export const setLanguage = ({ commit }, lang) => {
    return commit(types.LANGUAGE, lang);
} 