import './globals.js';
import {registerCoreBlocks} from '@wordpress/block-library';
import {createBlock, serialize} from '@wordpress/blocks';

registerCoreBlocks();

const block = createBlock('core/paragraph', {
  content: "Hello blocks!",
});

const output = serialize(block);

process.stdout.write(output);
process.stdout.write('\n');
