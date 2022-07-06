import './globals.js';
import {registerCoreBlocks} from '@wordpress/block-library';
import {createBlock, serialize} from '@wordpress/blocks';

registerCoreBlocks();

const blocks = Array.from({length: 5}, (e, i) => (
  createBlock('core/paragraph', {
    content: `Hello block number ${i + 1}!`,
    align: i % 2 == 0 ? 'left' : 'right',
  })
));

const output = serialize(blocks);

process.stdout.write(output);
process.stdout.write('\n');
