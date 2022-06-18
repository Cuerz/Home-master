import axios from "./axios";

export const getMenu=(param)=>{
return axios.request({
    url:'/api/permission/getMenu',
    method:'post',
    data: param
})
}
export const getData=()=>{
    return axios.request({
        url:'/api/home/getData',
        method:'get'

    })
}

export const getUser=(params)=>{
    return axios.request({
        url:'/user/getUser',
        method:'get',
        params

    })
}

// export const getMenu = (params)=>{
//     return axios.request({
//         url:'/api/permission/getMenu',
//         method:'post',
//         data: param
//     })
// }