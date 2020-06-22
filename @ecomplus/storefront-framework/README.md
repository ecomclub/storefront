# Storefront Framework

[![CodeFactor](https://www.codefactor.io/repository/github/ecomclub/storefront-framework/badge)](https://www.codefactor.io/repository/github/ecomclub/storefront-framework)
[![npm version](https://img.shields.io/npm/v/@ecomplus/storefront-framework.svg)](https://www.npmjs.org/@ecomplus/storefront-framework)
[![license mit](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Webpack](https://webpack.js.org/) based
tool to develop and build
[JAMstack](https://jamstack.org/) &
[PWA](https://developers.google.com/web/progressive-web-apps/)
e-commerce templates with
[E-Com Plus APIs](https://developers.e-com.plus/docs/reference/)

[CHANGELOG](https://github.com/ecomclub/storefront-framework/blob/master/CHANGELOG.md)

## Starter template

`storefront-framework` is a JS tool **to create new templates**
faster and with better development experience,
but if you don't want to start the entire template from scratch,
we also provide the
[storefront](https://github.com/ecomclub/storefront),
which is built with this framework
and is also open source :wink:

_Storefront_ is a complete e-commerce template
with few dependencies,
you may change what you need to customize
and setup your own theme and scripts.

## Getting started

First things first, install the module as dev dependency:

```bash
npm i --save-dev @ecomplus/storefront-framework
```

> Note: while you can install and run `storefront-pack` globally,
we recommend installing it locally.

### Commands

- `storefront-pack serve`:
Starts Webpack development server on port _9100_ (http://localhost:9100);
- `storefront-pack build`:
Compile assets bundles for production and prerender e-commerce pages;

#### Optional arguments

- `--port=8080`:
Change the dev server port number, you may replace _8080_ by what you want;
- `--verbose`:
Detailed output of Webpack compilation process;
- `--analyze`:
Open [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) with dev server;

### NPM scripts

NPM `package.json` scripts are a convenient and useful means to run
locally installed binaries without having to be concerned
about their full paths. Simply define a script as such:

```json
{
  "scripts": {
    "serve": "storefront-pack serve",
    "build": "storefront-pack build"
  }
}
```

And run the following in your terminal/console:

```bash
npm run serve
```

Building for production:

```bash
npm run build
```

## Pages CMS

You should use a CMS for the store pages,
we recommend [Netlify CMS](https://www.netlifycms.org/) and provide
an starter
[`config.yml`](https://github.com/ecomclub/storefront-framework/blob/master/template/public/admin/config.yml)
file.

All **content must be JSON**, saved on `content` folder.

## Renderization

We use [EJS](https://ejs.co/) to prerender views with
following template data:

```js
data = {
  _: {
    // Boolean development mode
    devMode,
    // Parsed object from `content/settings.json`
    settings,
    // Function to get CMS JSON content by filepath
    cms,
    // Function to get `content/dictionary/${lang}` object
    dictionary,
    // MarkdownIt instance to parse MD markup
    md,
    // Store ID number
    storeId,
    // Language code string
    lang,
    // Brand colors RGB
    primaryColor,
    secondaryColor,
    // Preloaded data from E-Com Plus APIs
    store,
    categories,
    grids,
    items,
    // Contextual route object
    route,
    // Async resolve current route and get context object
    resolveRoute,
    // Lodash utility library
    // https://lodash.com/docs/
    lodash,
    // Utility functions for e-commerce
    // https://developers.e-com.plus/ecomplus-utils/
    ecomUtils,
    // E-Com Plus APIs client
    // https://developers.e-com.plus/ecomplus-client/
    ecomClient,
    // Search engine constructor
    // https://developers.e-com.plus/search-engine/
    EcomSearch
  }
}
```

EJS is configured with support for
`asyc/await` and `includes`.

> Note that all parameters are inside the parent `_` (_global_),
we use it to make easy to pass the original template parameters
with EJS includes.

### Examples

You can code examples of EJS these views in our
[`storefront-template`](https://github.com/ecomclub/storefront-template) repo.

### Loading JSON content

You may load CMS content by calling the `cms` function
with the filename (without extension) as param, eg.:

```ejs
<% const page = _.cms('pages/about-us') %>
<%= page.title %>
```

### Parsing markdown content

Some of your CMS content may be saved as markdown,
on EJS views you can render it to HTML by using `md.render` function,
eg.:

```ejs
<%= _.md.render(pages.home.md_content) %>
```

### Handling slugs and routes

Template parameters will have a `route` property,
it'll be an object varying by type of view:

- Store resource (products, categories, brands, collections):
```js
route = { path, resource, _id }
```
You should use `route._id` to get the body of respective
resource document with `ecomClient`;

- CMS folder collection (eg.: _blog_ or _pages_):
```js
route = { path, collection, slug }
```
You should use `route.slug` to get the parsed CMS content
with `cms` function;

- In other cases, such as for `index.ejs`:
```js
route = { path }
```
You may use `route.path` to know the current context
on included EJS partials;

#### Context object

With `resolveRoute` function you can get context object
with resource `body` or CMS collection `content`:

```ejs
<%
const context = _.resolveRoute()
if (_.route.resource) {
  // store resource
  // context = { resource, body }
} else if (_.route.collection) {
  // cms folder collection
  // context = { collection, slug, content }
} else {
  // context = {}
}
%>
```

### Includes with absolute path

Passing _absolute path_ (posix) you can import EJS files
directly from `@ecomplus/storefront-template`
(or other configured with `STOREFRONT_TEMPLATE` env)
`template/pages`:

```ejs
<%- await include('/@/views/home', { _ }) %>
```

## Project structure

To work with this framework,
your template project **must** have the following file structure:

### Basic directory tree

```
├── content
└── template
    ├── assets
    ├── js
    ├── pages
    ├── public
    │   ├── admin
    │   └── img
    │       └── uploads
    └── scss
```

#### `/content`

Root directory for Netlify CMS (or any other headless CMS)
[collections](https://www.netlifycms.org/docs/add-to-your-site/#collections)
JSON content.
You may create and/or edit content here to preset
some content for examples or defaults.

[`settings.json`](https://github.com/ecomclub/storefront-framework/blob/master/content/settings.json)
is required and must have at least the
properties preseted as default.

#### `/template`

Source template files.
All JS, SCSS, images and other assets files should be placed here.

#### `/template/assets`

Predefined template assets (such as images, videos, sounds...)
that should be imported inside `js` or `scss` files.

#### `/template/js`

JS source files,
[`index.js`](https://github.com/ecomclub/storefront-framework/blob/master/template/js/index.js)
is required,
other files and modules should be imported from index.

Other JS files on `/template/js` directory
will also be considered additional
[Webpack entry point](https://webpack.js.org/configuration/entry-context/).

#### `/template/public`

Any static assets placed in the `public`
folder will simply be copied and not go through Webpack.
You need to reference them using absolute paths.

#### `/template/public/admin`

Setup for [Netlify CMS](https://www.netlifycms.org/),
is optional if you're not planning to use the the referred CMS.

[`config.yml`](https://github.com/ecomclub/storefront-framework/blob/master/template/public/admin/config.yml)
should be
[configured](https://www.netlifycms.org/docs/add-to-your-site/#configuration)
following your template options and features.
The settings collection (file `content/settings.json`)
must have at least the preseted fields.

#### `/template/public/img`

Place default favicon and app icons here.

#### `/template/public/img/uploads`

Netlify CMS
[media](https://www.netlifycms.org/docs/add-to-your-site/#media-and-public-folders)
on `uploads` folder, where the merchant may
upload custom logo, banners, icons and other assets from
CMS dashboard.

#### `/template/scss`

[SCSS](https://sass-lang.com/)
to compile CSS stylesheet,
[`styles.scss`](https://github.com/ecomclub/storefront-framework/blob/master/template/scss/styles.scss)
is required, other files and modules
should be imported inside it.

#### `/template/pages`

[EJS](https://ejs.co/) markup to compile HTML pages.

Required files:

```
├── index.ejs
├── #brands.ejs
├── #categories.ejs
├── #collections.ejs
└── #products.ejs
```

The above files have to be in the
root of `pages` directory.

To complete the storefront template,
you should also create other EJS views.
It's possible to use as many pages as you want,
and you can choose any filenames.

You may want to add a `#cms` folder inside
pages directory, this folder should contain EJS views for
[folder collections](https://www.netlifycms.org/docs/collection-types/#folder-collections),
witch produces multiple slugs.

For example, for a blog folder collection on folder `content/blog`,
you should have a view `#cms/blog.ejs`, it will generate an HTML page for each
post saved by CMS.

## Output

On production, files will be created on `dist` folder,
`template/js/index.js` will be bundled to `dist/storefront.js`
and `template/scss/styles.scss` to `dist/storefront.css`.

Additional entry points on `template/js/` or `template/scss/`
root will respect original filename.

EJS on `template/pages/` will be parsed to `dist/[file].html`
or `dist/[slug].html` in case of store resources or CMS
folder collections.

## Working with Webpack

The easiest way to tweak the Webpack configuration is providing an object exported by
`storefront.webpack.js` file on your project root.

The object will be merged into the final
[config](https://github.com/ecomclub/storefront-framework/blob/master/src/webpack.config.js)
using [webpack-merge](https://github.com/survivejs/webpack-merge).

### Default Webpack aliases

We've set `#template` as Webpack resolve alias to
`@ecomplus/storefront-template/template`
(or other pkg if configured with `STOREFRONT_TEMPLATE` env).

So you can use, for example:

```js
import '#template/js/'
```

```scss
@import '#template/scss/main'
```

## Deploy with Netlify

As a JAMstack app, your template may be easily deployed with Netlify,
to do that you should add a simple
[netlify.toml](https://github.com/ecomclub/storefront-framework/blob/master/netlify.toml)
file and a
[deploy button](https://www.netlify.com/docs/deploy-button/) with **link to your
template repository** and
`stack=cms` param (considering you're using Netlify CMS).

### Sample

```md
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?stack=cms&repository=https://github.com/ecomclub/storefront-framework)
```

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?stack=cms&repository=https://github.com/ecomclub/storefront-framework)
