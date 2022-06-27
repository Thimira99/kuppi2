import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koajs-cors';

import './db/db.js';
import postCustomerRoute from './router/customerRouter.js';

const app = new koa();
app.use(bodyParser());

app.use(cors({
    origin: "*"
}));

app.use(postCustomerRoute.routes()).use(postCustomerRoute.allowedMethods());

app.listen(4000, () => {
    console.log("App is running on port 4000");
})


