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
    return true;
}else{
    return false;
}
};


app.get('/', (request, response) => {
    response.send('Hello Armstrong!')
});

app.get('/:id', (request, response) => {
    response.json(armstrong(request.params.id))
})

module.exports = app;