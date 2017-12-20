const path = require('path')
const markdownMagic = require('markdown-magic') // eslint-disable-line
const jsf = require('json-schema-faker');
// const dox = require('dox')

const config = {
  transforms: {
    /* Match <!-- AUTO-GENERATED-CONTENT:START (GENERATE_API_DOCS:path=../file.js) --> */
    GENERATE_API_DOCS(content, options) {
      console.log(options)
      const resolvedPath = path.resolve(__dirname, options.path)
      const fileContents = require(resolvedPath) // eslint-disable-line
      const inputSchema = fileContents.inputSchema
      console.log('inputSchema', inputSchema)
      if (!fileContents || !inputSchema) {
        // no settings found
        return content
      }

      const example = jsf(inputSchema)
      console.log('example', example)

      const docs = `
### Input Schema
\`\`\`js
${JSON.stringify(inputSchema, null, 2)}
\`\`\`

### Input Example
\`\`\`js
${JSON.stringify(example, null, 2)}
\`\`\`
`

      return docs.replace(/^\s+|\s+$/g, '').replace(/\[33m/g, '').replace(/\[[0-9]{2}m/g, '')
    }
  }
}

const markdownPath = path.join(__dirname, '..', 'README.md')
markdownMagic(markdownPath, config, () => {
  console.log('done')
})