import getData from './lib/service.js';

//homwework wants first call the function and get the data then log it so this is the case
const data = await getData(1);
console.log(data);

//but we can also do it in one step both of them can stay so have fun :D
// console.log(await getData(1));