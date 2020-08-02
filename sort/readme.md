Organize everything into a `src` and compiled dir called `build`

```
tsc --init`
```

Watching code changes:
```
tsc -w
```

Generate package.json by `npm init -y`
```
npm install nodemon concurrently
```

nodemon executes compiled code
concurrently - do both

- concurrently uses a regex for package.json scripts
