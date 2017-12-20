# Middy Serverless Example

Example of serverless framework + [middy](https://github.com/middyjs/middy)

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
<!-- AUTO-GENERATED-CONTENT:END -->
