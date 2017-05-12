// Caution:
// Do not replace this import statement with codes.
//
// If you replace this import statement with codes,
// the codes will be executed after the following polyfills are imported
// because import statements are hoisted during compilation.
import './polyfill-switches';

// Polyfill ECMAScript standard features with global namespace pollution
import 'core-js/fn/object/set-prototype-of';
import 'core-js/fn/set';
import 'core-js/fn/map';

// Polyfill Custom Elements v1 with global namespace pollution
import '@webcomponents/custom-elements/src/custom-elements';
