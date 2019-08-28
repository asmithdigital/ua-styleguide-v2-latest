### DO NOT Commit any code or create branches etc unless you are using Docker!


# UA Style guide V2

This repository is the source code for style guide v2 development. Do not use this code for implementing your website or application. Instead, download the assets from the style guide v2 theme repository.

## Download assets

When implementing the style guide assets into your project, visit the [Style guide v2 theme repository](https://gitlab.adelaide.edu.au/web-team/ua-styleguide-v2-theme/)


## Style guide development

Install docker - [UA WCMS D8 Readme.md](https://gitlab.adelaide.edu.au/web-team/ua-wcms-d8/blob/develop/README.md)

### Start Docker

```bash
./dsh
```

### Build

```bash
robo build:dev
```

### View

```bash
http://uastyleguidev2.test:8080/
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

```bash
robo artefacts:release x.x.x
```

Then confirm that the tag and master branch commit hash match on the [style guide V2 theme repository](https://gitlab.adelaide.edu.au/web-team/ua-styleguide-v2-theme/).

### Updating global server version folders

- Login to motoko server `ssh motoko`
- Navigate to version folder `cd /apps/web_docs/global/style-guide-v2`
- clone the latest version of [style guide V2 theme repository](https://gitlab.adelaide.edu.au/web-team/ua-styleguide-v2-theme/) into this directory, ensure that you name the directory of the newly cloned assets the same as the current release (ie, `/1.34.0/`)
- Update the **latest** symlink to the newly cloned version `ln -sfn x.x.x latest`
- Promote the `/latest/` and `/x.x.x/` directories to production within [webaccess](https://www.webdev.adelaide.edu.au/webaccess)

## Update style guide website

- Ensure that the global assets are on the production server
- Build a Style Guide environment with the title `Style guide v2 x.x.x`
- Once the staging environment is built, submit a request to **Drupal Operations support team** in order to promote the new environment to production and to delete all other old environment versions
 