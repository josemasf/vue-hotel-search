# Vue v2 microfrontend template for [Podium.js](https://podium-lib.io/)

## Description
This template has been created to facilitate and speed up the creation of microfrontend with the podium.js framework.

### Configuration

1.Rename repository name and podlet name in package.json

```javascript
"name": "vue-microfront-podium",
"podletName": "vueMicrofrontPodium",
```

2.Update container id in public/index.html
```html
<body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="vue-microfront-podium"></div> <!-- Update this -->
    <!-- built files will be auto injected -->
  </body>
```

3.Review process.env

```
#ENTRY_BASE_URL=https://production.app
ENTRY_BASE_URL=http://localhost:7181  
PORT=7181
```
