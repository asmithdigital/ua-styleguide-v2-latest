## Style guide development

### Local server

```bash
yarn start
```

### Build

```bash
yarn build
```

## Style guide release

The following stages are required for releasing the style guide. The use of x.x.x represent the release number (ie. 1.34.0). This same number must be used in every stage of the release documented below.    

### Start release

```bash
git flow release start x.x.x
```

### During release

- Update release number x.x.x in `src/data/global.yml`
- Update release number x.x.x in `package.json`
- Update `CHANGELOG.md`

Then run:

```bash
yarn build:prd
```

Then commit changes.

### Finish release

```bash
git flow release finish x.x.x
```

Then `git push` `master`, `develop` and `--tag`

Confirm that the tag and master branch commit hash match on style guide V2 repository.  

### Release the theme assets

This is a UA only thing.

```bash
robo artefacts:release x.x.x
```

Then confirm that the tag and master branch commit hash match on the [style guide V2 theme repository](https://gitlab.adelaide.edu.au/web-team/ua-styleguide-v2-theme/).
 
