const middy = require('middy')
const middlewares = require('middy/middlewares')
const jsonBodyParser = middlewares.jsonBodyParser
const validator = middlewares.validator
const httpErrorHandler = middlewares.httpErrorHandler

const inputSchema = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      required: ['name'], // if name not supplied error thrown
      properties: {
        name: { type: 'string' },
      }
    }
  }
}

// Normal lambda code
const businessLogic = (event, context, callback) => {
  // event.body has already been turned into an object by `jsonBodyParser` middleware
  const { name } = event.body

  console.log('name', name)

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      result: 'success',
      message: `Hi ${name} ⊂◉‿◉つ`,
    })
  })
}


const handler = middy(businessLogic)
  // parses the request body when it's a JSON and converts it to an object
  .use(jsonBodyParser())
  // validates the input
  .use(validator({ inputSchema: inputSchema }))
  // handles common http errors and returns proper responses
  .use(httpErrorHandler())


module.exports.middyFunction = handler

