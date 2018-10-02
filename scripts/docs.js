const path = require('path')
const markdownMagic = require('markdown-magic')
const init = require('sync-rpc')
const schemaFakerSync = init(require.resolve('./schema-maker'))

// const dox = require('dox')

const config = {
  transforms: {
    /* Match <!-- AUTO-GENERATED-CONTENT:START (GENERATE_API_DOCS:path=../file.js) --> */
    GENERATE_API_DOCS(content, options) {
      console.log(options)
      const resolvedPath = path.resolve(__dirname, options.path)
      const fileContents = require(resolvedPath)
      const schemaData = fileContents.schema
      if (!fileContents || !schemaData) {
        // no settings found
        return content
      }

      const schemasDocs = Object.keys(schemaData).map((type) => {
        const currentSchema = schemaData[`${type}`]
        const schemaName = type.replace('Schema', '')
        const schemaDisplay = renderSchema(currentSchema, schemaName)
        const example = renderSchemaExample(currentSchema, schemaName)
        return `${schemaDisplay}${example}`
      })

      console.log('schemasDocs', schemasDocs)

      const docs = `${schemasDocs.join('')}`
      return docs.replace(/^\s+|\s+$/g, '').replace(/\[33m/g, '').replace(/\[[0-9]{2}m/g, '')
    }
  }
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

function renderSchema(schema, type) {
  const typeName = (type === 'output') ? 'Response' : type
  return `### ${toTitleCase(typeName)} Schema

\`\`\`json
${JSON.stringify(schema, null, 2)}
\`\`\`

`
}

function renderSchemaExample(schema, type) {
  let example = schemaFakerSync(schema)
  if (!example || !Object.keys(example).length) {
    return ''
  }

  if (example.body) {
    example = example.body
  }

  const typeName = (type === 'output') ? 'Response' : type

  return `### ${toTitleCase(typeName)} Example

\`\`\`json
${JSON.stringify(example, null, 2)}
\`\`\`

`
}

const markdownPath = path.join(__dirname, '..', 'README.md')
markdownMagic(markdownPath, config, () => {
  console.log('done')
})
