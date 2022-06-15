const path = require('path');

console.log(path.sep);


//除了第一个字符串的第一个斜杠要打，后面随便打不打
const filePath = path.join('/content/','subfolder//','test.txt'); 
console.log(filePath);


//base是最后一个位置
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);