const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    const target = process.env.REACT_APP_PROXY_TARGET;
    app.use(
        '/.netlify/functions',
        createProxyMiddleware({
            target,
            pathRewrite: {
                "^/\\.netlify/functions": ""
            }
        })
    );
};