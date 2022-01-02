const cluster = require('cluster');
const { createServer } = require('vite')

module.exports = function (mikser) {
    if (cluster.isMaster) {
        mikser.on('mikser.server.ready', async () => {
            const vite = await createServer({
                server: { middlewareMode: 'html' }
            })
            mikser.server.app.use(vite.middlewares)
        })
    }
}