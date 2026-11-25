import vocab from './vocab/index.js';
import expense from './expense/index.js';
import food from './food/index.js';

// 以后新增工具文件夹时，在上面 import 并在下面数组里加一项即可
export const TOOLS = [vocab, expense, food];
