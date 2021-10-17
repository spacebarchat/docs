# UI Framework

-   see: [@fosscord/ui](https://www.npmjs.com/package/@fosscord/ui)

## Requirements

You should be familiar with:

-   [Git](https://git-scm.com/)
-   [NodeJS](https://nodejs.org/)
-   [SCSS](https://sass-lang.com/)

## Getting Started

```bash
git clone https://github.com/fosscord/fosscord-ui
cd fosscord-ui
```

```bash
npm install
npm run scss
```

_Open `./test/index.html` to see the test page._

## Writing a component

> text inside of <> has to be replaced by the corresponding values

1. create a file named like the component you're creating in
   `test/<component>.html` and `scss/<component>.scss`

2. copy the content of `test/template.html` to `test/<component>.html` and
   replace the `<h1>` content with the components name

3. source the created `test/<component>.html>` in `test/index.html` as follows:
   _append the following to `scss/index.scss` to the div with the class
   `"grid"`_

```html
<a
  class="Link"
  href="<component>.html"
  class="text link">

  <component>
</a>
```

4. source the created `scss/<component>.scss` in `scss/index.scss` as follows:
   _append the following to `scss/index.scss`_

```scss
...
@import "<component>.scss";
```
