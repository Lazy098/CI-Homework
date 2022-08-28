var arr = [1, 2, 3, 5, 4, 2, 6, 4]
arr.sort();
let max = [0, 0]; //khởi tạo 
let pick = 1;
for(let i = arr.length - 1; i > 0; i--){
    if(arr[i] === arr[i-1]) ++pick; //trùng nhau thì đếm tiếp
    else{
        if(max[i] < pick){
            max[0] = arr[1]; //số xuất hiện nhiều đc gán vào max[0]
            max[1] = pick; //số lần xuất hiện đc gán vào max[1]
        }
        pick = 1;
    }
}
console.log(`value: ${max[0]}, count: ${max[1]}`);