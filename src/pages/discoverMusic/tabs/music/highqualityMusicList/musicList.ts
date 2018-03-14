/**
 * Created by luwenwei on 18/3/14.
 */
const musicList:Array<any>=[
    {
        value:{name:'全部',field:'all'},
        field:'all',
        label: '全部',
        type:'radio'
    },
    {
        value:{name:'华语',field:'chinese'},
        field:'chinese',
        label: '华语',
        type:'radio',
        checked:true
    },
    {
        value:{name:'欧美',field:'europe_and_america'},
        field:'europe_and_america',
        label: '欧美',
        type:'radio'
    },
    {
        value:{name:'日语',field:'japanese'},
        field:'japanese',
        label: '日语',
        type:'radio'
    },
    {
        value:{name:'韩语',field:'korean'},
        field:'korean',
        label: '韩语',
        type:'radio'
    },
    {
        value:{name:'粤语',field:'cantonese'},
        field:'cantonese',
        label: '粤语',
        type:'radio'
    },
    {
        value:{name:'小语种',field:'rare'},
        field:'rare',
        label: '小语种',
        type:'radio'
    }
]

export default musicList