const Koa = require('koa');
const Router=require('koa-router')
const app = new Koa();
const router=new Router();
router.get('/',(ctx)=>{
    ctx.body={
        name:'İndex sayfasına hoşgeldin.'
    }
})
router.get('/hakkimda',(ctx)=>{
    
    ctx.body={
        name:'Hakkımda sayfasına hoşgeldin.',
    }
})
router.get('/iletisim',(ctx)=>{
    ctx.body={
        name:'İletişim sayfasına hoşgeldin.'
    }
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000);