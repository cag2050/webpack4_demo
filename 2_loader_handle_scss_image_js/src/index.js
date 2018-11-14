/*
webpack 将这样工作：
1. Webpack找到style.css文件
2. 这个文件名匹配到/.css$/ 正则表达式
3. css-loader处理这个文件
4. 处理的结果传给style-loader
5. 最后，style-loader返回一段javascript代码(注：这段代码执行的结果就是把样式插入到<style>标签中）
*/

import './style.css';
import './style1.scss'

import {sum, substract, divide} from './lib';

console.log(sum(1, 2));
console.log(substract(3, 1));
console.log(divide(6, 3));
