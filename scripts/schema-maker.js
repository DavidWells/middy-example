const jsf = require('json-schema-faker')

function init() {
  return (schema) => {
    return jsf.resolve(schema).then(function(result) {
      console.log(JSON.stringify(result, null, 2))
      return result
    })
  }
}

module.exports = init
