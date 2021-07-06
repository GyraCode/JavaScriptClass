//取得亂數
function getRandom(x) {
    /**
     * 假設x為38  產生的值 就落在0-37之間
     * 此時程式後面在+1
     * 代表產生的值落在1-38之間
     * 再進行回傳
     */
    return Math.floor(Math.random() * x) + 1;



}

//放置第一區 6 個號碼的陣列變數
let arr = [];

//放置第二區 1 個號碼的數值變數
let n = 0;


//產生威力彩號碼
function getPowerNum() {
    //一注威力彩號碼有 6 個所以我們讓迴圈跑六次
    for (i = 1; i <= 6; i++) {
        /** 
         * 用 indexOf 判斷該數字之前有沒有出現過，
         * 如果有，就將 i 遞減，等於讓這輪重跑一次。
         */

        //隨機取得 1 ~ 38 之間的數字
        let num = getRandom(38);

        //檢查是否有出現過(重複)
        if (arr.indexOf(num) > -1) {
            i--;
            continue;
        } else {
            //沒出現過的話就寫進陣列裡
            arr.push(num);//arr[1,2]
        }
    }

    //用數字排序
    arr.sort(function (a, b) {
        return a - b;
    });

    //第二區的號碼
    n = getRandom(8);
    //因為威力彩有分兩區 第二區為01-08隨機一數字 所以我們會在回傳時加上
    //arr=[2,9,11,16,23,37]=>"2,9,11,16,23,37"
    //return `第一區的號碼為:${arr.join(",")}，第二區的號碼為:${n}`;
    return arr;
}

let arr6Num = getPowerNum(); console.log(`第一區號碼: `); for (let i = 0; i < arr6Num.length; i++) { console.log(`第 ${i + 1} 個數字: ${arr6Num[i]}`); } console.log(`第二區號碼: ${getRandom(8)}`);

