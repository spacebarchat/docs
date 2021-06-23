Every Component should have a demo/test page to see how the Component looks like.

To create a test page in ``/test/`` copy ``template.html``, save it as a new file ``yourComponentName.html`` and open it in your browser. 

Now create a new file in ``/scss/`` e.g. ``yourComponentName.scss`` and write some (S)CSS.

To import your scss file edit ``/scss/index.scss`` and add this line:
```css
@import "yourComponentName.scss";
```

Now start the scss bundler with
```
npm run scss
```

Also make sure create all sort of various states of your component to see how it looks.

If you are finished commit and push your changes. _For non-maintainers, create a Pull Request ;)_