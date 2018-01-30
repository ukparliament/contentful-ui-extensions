# Contentful UI Extensions

This repository contains the various UI Extensions PDS for contentful.

Each is served from their own URI, to the full list, visit the app root.

# Dependencies
- [Node](https://nodejs.org/en/)

## Running locally
`npm install && npm start`

**N.B.** You can't usually interact with the extension outside of Contentful, because it relies on certain `window` events to trigger behaviour.

## Deploying extensions to Contentful
First, you need to export your Contenful space ID and API Access token:
```bash
$> export SPACE=<SPACE_ID>
$> export CONTENTFUL_MANAGEMENT_ACCESS_TOKEN=<ACCESS_TOKEN>
```

Next, you'll need to decide which UI extension you want to deploy, and [follow this guide](https://www.contentful.com/r/knowledgebase/ui-extensions-guide/) for deployment of the extension to contentul.

## TODO
- Write some tests
- Use AMD to load individual extensions' JS
