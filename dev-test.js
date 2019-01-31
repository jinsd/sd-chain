const Block = require('./block');

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toString());

const barBlock = Block.mineBlock(fooBlock, 'bar');
console.log(barBlock.toString());