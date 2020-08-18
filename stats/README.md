Stats for footballers

```
npm init -y
```
Sets up package.json

```
tsc --init
```
Creates a tsconfig.json file

```
npm install nodemon concurrently
```

Nodemon automatically automatically rerun that file our code compiles
concurrently looks inside our package.json for npm scripts that have a pattern 'start:*'

First time running `npm start`, index.js is trying to be served before it is actually built - race
condition??


Add type definition file for node fs
