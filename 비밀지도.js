function solution(n, arr1, arr2) {
    var answer = [];

    for (let i = 0; i < n; i++) {

        let binary1 = arr1[i].toString(2).padStart(n, '0');
        let binary2 = arr2[i].toString(2).padStart(n, '0');

        let str = '';
        for (let j = 0; j < n; j++) {

            if (binary1[j] === '1' || binary2[j] === '1') {
                str += '#';
            } else {
                str += ' ';
            }
        }
        answer.push(str);
    }

    return answer;
}