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

const list = createBlock('core/list', {
  ordered: true,
  values: [
    'Peanut butter',
    'Jelly',
    'Bread',
  ].map(item => `<li>${item}</li>`).join(''),
});

const output = serialize([...blocks, list]);

process.stdout.write(output);
process.stdout.write('\n');
