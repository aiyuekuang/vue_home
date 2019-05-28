import {get_data, get_data_get} from '@common';


export let list = (fun) => get_data_get('/api', {
    channelname:"public_tuijian_spring"
}, (data) => {
    fun(data);
});
