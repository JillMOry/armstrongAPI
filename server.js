let express = require('express');


let app = express();
app.listen(8080);


function armstrong(id) {
    console.log("id ", id);
    console.log("id type", typeof id);
    // let numStr = id.toString();
    // console.log("numStr ", numStr);
    let nums = id.split("");
    console.log("nums ", nums);
    let exp = nums.length;
    console.log("exp ", exp);
    let sum = [];
    let i = 0;
    while (i < exp){
    sum.push(Math.pow(nums[i], exp));
    i+=1;
}
    let subTotal = sum.reduce(function (a, b){
    return a + b;
},0);

let total = subTotal.toString();
if(exp > 4){
    return "enter a smaller number";
}
if (total === id){
    return true + ' ' + id + ' ' + 'is an Armstrong number';
}else{
    return false + ' ' + id + ' ' + 'is NOT an Armstrong number';
}
};


app.get('/', (request, response) => {
    response.send('An Armstrong number, also known as narcissistic number, is a number that is equal to the sum of the cubes of its own digits. Try it by extending the URL.  Example: https://armstrongapi-l8flg.ondigitalocean.app/9999 ')
});

app.get('/:id', (request, response) => {
    response.json(armstrong(request.params.id))
})

module.exports = app;