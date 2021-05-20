const fastify = require('fastify')
const PORT = process.env.PORT || 3000
const app = fastify({
    logger: true
})

app.get('/', async () => {
    return {
        message: "Fastify is on fire"
    }
})

const start = async () => {
    try {
        await app.listen(PORT)
        app.log.info(`server listening on ${app.server.address().port}`)
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}
start()