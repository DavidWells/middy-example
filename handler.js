const middy = require('middy')
const { jsonBodyParser, validator, httpErrorHandler } = require('middy/middlewares')


/* Normal lambda code */
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

/* Input & Output Schema */
const schema = {
  inputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: 'string' },
        }
      }
    },
    required: ['body']
  },
  outputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'object',
        required: ['result', 'message'],
        properties: {
          result: { type: 'string' },
          message: { type: 'string' },
        }
      }
    },
    required: ['body']
  }
}

/* Attach middlewares */
const handler = middy(businessLogic)
  // parses the request body when it's a JSON and converts it to an object
  .use(jsonBodyParser())
  // validates the input
  .use(validator(schema))
  // handles common http errors and returns proper responses
  .use(httpErrorHandler())

/* Export handler for serverless to use */
module.exports.middyFunction = handler

/* Export inputSchema & outputSchema for automatic documentation */
module.exports.schema = schema
