// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const urlData = require('@fastify/formbody');
fastify.register(urlData);

const cars = [];

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.post('/', async (request, reply) => {

    var werwer = request.body

    cars.push(werwer)
    
    console.log(cars);
  })

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()