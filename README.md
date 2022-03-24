# NX monorepo + Microfrontends

## Development server

Run `npm run start:all` to start applications.

http://localhost:4200 - shell application that incorporates microapps

http://localhost:4201 - fleet monitor microapp

http://localhost:4202 - places microapp

http://localhost:4203 - weather microapp

## Monorepo

### Benefits

1. single package.json
2. libraries next to apps
3. standards across projects / consistency
4. better visibility
5. atomic commits - 1 task that spans across multiple projects/libs can be done with single commit

## NX

https://nx.dev/

### Micro frontends

Current project uses Webpack Module Federation plugin.
