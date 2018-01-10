# Contentful Topic Tagging UI

A proof-of-concept Contentful UI extension for linking parliamentary topic to Contentful content.

This is a **proof-of-concept** UI extension, it is not intended for production use - for starters, the Parliament IDs for topics are currently hard-coded and ficticious!

## Setup
Export your Contenful space ID and API Access token:
```bash
$> export SPACE=<SPACE_ID>
$> export CONTENTFUL_MANAGEMENT_ACCESS_TOKEN=<ACCESS_TOKEN>
```

Make sure you have the Contentful

## Development
Run `gulp` (you'll need gulp installed globally first) to run the default task; this bundles the javascript and hosts it locally on an HTTPS url.

**N.B.** You can't usually interact with the extension outside of Contentful, because it relies on certain `window` events to trigger behaviour.

Follow [this guide](https://www.contentful.com/r/knowledgebase/ui-extensions-guide/) for deployment of the extension to contentul.

## TODO
- Write some tests
- Expand README