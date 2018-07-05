const Koa = require('koa');

const router = require('koa-router')();
// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    console.log(ctx.request.path+':'+ctx.request.method);
    await next();
});

// add url-route:
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});
//商品详细信息
// router.get("api/detail/:id", async (ctx,next) => {
//     // console.log('abdc')
//     // const id = ctx.params.id;
//     // console.log(id)

//     // for(var i = 0; i < homeListData.length; i++) {
//     //     if(homeListData[i].id === id) {
//     //         ctx.response.body = homeListData[i];
//     //         return;
//     //     }
//     // }
//     var name = ctx.params.id;
//     ctx.response.body = `<h1>Hello, ${id}!</h1>`;
// })

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});
// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js')
router.get('/api/homead', async (ctx, next) => {
    ctx.response.body = homeAdData;
});

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', async (ctx, next) => {
    // 参数
    const params = ctx.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

     ctx.response.body = homeListData;
});
router.get('/api/detail/:id', async (ctx, next) => {
        const id = ctx.params.id;
        const data = homeListData.data;
        for(var i = 0; i < data.length; i++) {
            if(data[i].id === id) {
                ctx.response.body = data[i];
                break;
            }
        }
});

app.use(router.routes());
// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');