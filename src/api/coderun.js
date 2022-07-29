import request from '@/utils/request'

export default {
    //医院列表
    getHospList(){ //当前页，显示数量， 条件对象
        return request({
            //url: '/admin/hosp/hospitalSet/findPageHospSet/{current}/{limit}',
            url: `127.0.0.1:9999`,

            method: 'get',//get提交方式
            //params: searchObj
            //data: searchObj,  //使用json进行传递, searchObj是接口对象
            //params  //不用json进行传递
        })
    },
}