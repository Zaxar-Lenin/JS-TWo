var arr = [1, 3, 4, 1, 1, 3, 4, 5];
var result = {};
arr.forEach(function (a) {
    if (result[a] != undefined)
        ++result[a];
    else
        result[a] = 1;
});
for (var key in result)
    console.log(result[key]);
