import * as Koa from "koa";
import * as Router from 'koa-router';

const app = new Koa();

const router = new Router()

router.get('/test',async (ctx)=>{
    ctx.body = {"code":400,"success":false,"data":{},"msg":"您输入的账号不存在，请联系管理员！"}
})


router.get('/a',async (ctx)=>{
    // console.log(ctx.query.id);
    console.log(ctx.header);
    
    ctx.body = {"code":400,"success":false,"data":{},"msg":"您输入的账号不存在，请联系管理员！"}
})

router.get('/err',async (ctx)=>{
  if(!ctx.header.token){
   ctx.response.status = 500;
    ctx.response.body = {
      "code": 400,
      "success": false,
      "data": {},
      "msg": "没token!"
    };
  }else{
    ctx.body = {"code":200,"success":true,"data":{},"msg":"ok！"}
  }
})


app.use(router.routes());
app.use(router.allowedMethods());
//设置监听端口
app.listen(8080);