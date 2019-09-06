/*
login 登录模块接口列表

*/

import axios from './ajax';   //封装的axios
import base from './base';   //接口地址 
import qs from  'qs';

const login ={
    //
    getUserInfo(params){
        console.log(qs.stringify(params));
        console.log(params);
        // return axios.post(`${base.sq}/Get_Personnel_Mst`,qs.stringify(params));
        return axios.post(`${base.sq}/Get_Personnel_Mst`,qs.stringify(params));
    }
}

export default login;