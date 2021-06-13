import ExpressApp from "./app";

const express_app = new ExpressApp();
express_app.app.listen(process.env.PORT);
