/**
 * 1.比较相邻的元素。如果第一个比第二个大，就交换他们两个
 * 2.对每一对相邻元素作同样的工作，从开始第一对到结尾最后一对。这步做完后的元素会是最大的数
 * 3.针对所有的元素重复以上步骤，除了最后一个
 * 4.持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
 */
function bubbleSort(arr){
    let len = arr.length;
    for(var i = 0;i < len;i++){
        for(var j= 0;j<len-i;j++){
            if(arr[j]>arr[j+1]){
                // 前后交换顺序
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
let newArr = bubbleSort([10,9,8,7,6,5,4,3,2,1])
console.log(newArr)

// 拓展1：es6解构赋值 变量交换
let arr = [1,2]
[arr[0],arr[1]] = [arr[1],arr[0]]
// 拓展2：不声明第三个变量和不使用es6解构赋值
var a = 1,b = 2;
a = [b,b=a][0];