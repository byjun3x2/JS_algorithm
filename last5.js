function solution(num_list) {
    var answer = [];
    
    num_list.sort((a,b) => a-b)
 
    return num_list.slice(5,num_list.length);
}

let a = solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]);
console.log(a)