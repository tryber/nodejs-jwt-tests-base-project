### Instalar libs

```bash
npm install -D mocha chai chai-http sinon mongodb-memory-server@6
```

### Configurar mocha
> package.json
```js
"test": "mocha ./tests/**/*$NAME*.test.js --exit"
```