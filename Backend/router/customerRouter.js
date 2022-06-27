import Router, { } from '@koa/router';

import { post, getAll, getById, deleteById, getName, updateData } from '../Controller/customerController.js';

const postCustomerRoute = new Router({
    prefix: '/customer'
});

postCustomerRoute.post('/', async (ctx) => {
    const data = ctx.request.body;
    ctx.body = await post(data);
    ctx.status = 201;
})

postCustomerRoute.get('/', async (ctx) => {
    ctx.body = await getAll();
})

postCustomerRoute.get('/getById/:id', async (ctx) => {
    const id = ctx.params.id;
    ctx.body = await getById(id);
})

postCustomerRoute.delete('/delete/:id', async (ctx) => {
    const id = ctx.params.id;
    ctx.body = await deleteById(id);
    // ctx.set('Content-Type', 'application.json');
})

postCustomerRoute.get('/getName', async (ctx) => {
    // console.log(ctx.request.body.name);
    ctx.body = await getName(ctx.request.body.name)
})

postCustomerRoute.put('/update/:id', async (ctx) => {
    const id = ctx.params.id;
    ctx.body = await updateData(id, ctx.request.body);

})

export default postCustomerRoute;