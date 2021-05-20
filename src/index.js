const fastify = require('fastify')
const PORT = process.env.PORT || 3000
const app = fastify({
    logger: true
})
const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost:27017/fastrest`)
    .then(() => console.log(`mongodb connected`))
    .catch(err => console.log(err))

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