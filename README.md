# [Story Book](https://storybook.js.org/)

## usage

```bash
# install deps
yarn 

# run story book
yarn start

# build for prod
yarn build

```

# [Chromatic](https://www.chromatic.com)
> **Bonus**

``` bash
# yarn install chromatic 
yarn add --dev chromatic
# OR
# npm install chromatic
npm install --save-dev chromatic

# run chromatic cli
npx chromatic --project-token=<chromatic_project_token>
## choose YES for add chromatic script to package.json [$ yarn chromatic]

# next runs of chromatic
yarn chromatic
```

# Install Typescript as global package
```bash
sudo nmp i -g typescript
```

# Install packages for custom build
``` bash
yarn add --dev rimraf
yarn add --dev copyfiles
```

# Install packages for automatic semantic versioning
``` bash
yarn add --dev semantic-release
```
# plugins 
```json
"plugins": [
  "@semantic-realease/commit-analizer",
  "@semantic-realease/release-notes-generator",
  "@semantic-realease/changelog",
  "@semantic-realease/github",
  "@semantic-realease/npm",
  "@semantic-realease/git"
]
```

# Semantic versioning usage

|Commit message | Release type |
|---|---|
| __fix__(pencil): stop graphite breaking when too much pressure applied | Patch Fix Release |
| __feat__(pencil): add 'graphiteWidth' option| Minor Feature Release |
| __perf__(pencil): remove graphiteWidth option<br><br>__BREAKING CHANGE__: The graphiteWidth option has been removed.<br>The default graphite width of 10mm is always used for performance reasons.| Major Breaking Release (Note that the BREAKING CHANGE: token must be in the footer of the commit) | 

> **Warn**
# Local registry

add yarn.lock to .gitignore file if you have local yarn registry
