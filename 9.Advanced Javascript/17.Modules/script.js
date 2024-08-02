// before

/*
1. Inline script
2. Script tags
3. many other because modules was not supported by javascript - commonjs, browsify

4. Javascript ES6 - Modules are supported (Best) with Webpack (module builder) - needed
because many browser doesnt support ES6 module directly so we need to combine it with webpack
*/





// ---------------ES6 + Webpack -----------------------------
// export a function in file 1 so that it can be used(imported) in other file


// javascript file 1 - add.js

// export multiple functions
export const add = (a, b) => a + b;

// export only one thing
export default function add() {
	return a+b;
}

// javascript file 2 - use.js

import { add } from './add';
// or
import add from './add';

// webpack - it is a module bundler, it bundles javascript module into one file or multiple file

// in html
// <script src="bundle.js"></script> - only one javascript file is added in html
