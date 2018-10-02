# Middy Serverless Example

Example of serverless framework + [middy](https://github.com/middyjs/middy)

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Install](#install)
- [API Docs](#api-docs)
  * [Input Schema](#input-schema)
  * [Input Example](#input-example)
  * [Output Schema](#output-schema)
  * [Output Example](#output-example)
<!-- AUTO-GENERATED-CONTENT:END -->

## Install

Make sure serverless is installed

```bash
npm i serverless -g
```

Then install project dependancies

```bash
npm install
```

Then deploy

```bash
serverless deploy
```

## API Docs

<!-- AUTO-GENERATED-CONTENT:START (GENERATE_API_DOCS:path=../handler.js) -->
### Input Schema

```json
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
  },
  "required": [
    "body"
  ]
}
```

### Input Example

```json
{
  "name": "ipsum aliqua sed"
}
```

### Output Schema

```json
{
  "type": "object",
  "properties": {
    "body": {
      "type": "object",
      "required": [
        "result",
        "message"
      ],
      "properties": {
        "result": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  },
  "required": [
    "body"
  ]
}
```

### Output Example

```json
{
  "result": "id ad",
  "message": "sit aute mollit consectetur do"
}
```
<!-- AUTO-GENERATED-CONTENT:END -->
