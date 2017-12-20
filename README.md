# Middy Serverless Example

Example of serverless framework + [middy](https://github.com/middyjs/middy)

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Install](#install)
- [API Docs](#api-docs)
  * [Input Schema](#input-schema)
  * [Input Example](#input-example)
<!-- AUTO-GENERATED-CONTENT:END -->

## Install

Make sure serverless is installed

```
npm i serverless -g
```

Then install project dependancies

```
npm i
```

Then deploy

```
serverless deploy
```

## API Docs

<!-- AUTO-GENERATED-CONTENT:START (GENERATE_API_DOCS:path=../handler.js) -->
### Input Schema
```js
{
  "type": "object",
  "properties": {
    "body": {
      "type": "object",
      "required": [
        "name"
      ],
      "properties": {
        "name": {
          "type": "string"
        }
      }
    }
  }
}
```

### Input Example
```js
{
  "body": {
    "name": "Excepteur"
  }
}
```
<!-- AUTO-GENERATED-CONTENT:END -->
