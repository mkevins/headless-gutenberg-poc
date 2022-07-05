import './globals.js';
import {registerCoreBlocks} from '@wordpress/block-library';
import {createBlock} from '@wordpress/blocks';

registerCoreBlocks();

const block = createBlock('core/paragraph', {
  content: "Hello blocks!",
});

console.log(block);
