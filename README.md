# Dead Simple Gulpfile configuration

If you want to just use sass & jquery/javascript for your next HTML/Wordpress from scratch project.
You can use this to jumpstart your development.

## Features
### Scss
- sass - compile `.scss` files to `.css`
- cssnano - Minify your output css
- postcss - support backward compatible for your css

### Javascript
- babel - convert es6+ code to compatible versions
- concat - concatinate files and merge it to 1 main script
- uglify - minify your javascript


## Watched files
Files are automatically processed when you save your `.scss` or `.js` files from the `dev` folder.


## Usage
if you don't have nodejs on your system yet please install it first on your system.

1. clone the repo `https://github.com/renzpulvira/gulp-css-js.git`
2. cd `gulp-css-js`
3. run `npm i`
4. install `gulp-cli` globally. run `npm i -g gulp-cli`
5. finally, run `gulp` 

gulp will now run and watch your files for any changes.

*Thats it!* Hope anyone uses this will help their development process. 
