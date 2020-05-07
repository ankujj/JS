const min = (a,b) => a>=b?b:a;
console.log(`Min is ${min(3,4)}`);

const isOdd=(a)=>{
    a = Math.abs(a);
    if (a === 0)
        return false;
    else if (a === 1) {
        return true;
    }
    else {
        return isOdd(a - 2);
    } 
}
console.log("Is it Odd",isOdd(75));

const countChar=(str,char)=>{
    let charCount =0;
    for(let i=0;i<str.length;i++){
        if(str[i]===char)
            charCount++;
    }
    return charCount;
}
console.log(`The char count is ${countChar("ABBbbcdefBB","b")}`);

let todoList=[];
function remember(task){
    todoList.push(task);
}
remember("Early Rise");
remember("Jogging");
remember("Call home");
remember("Make Breakfast");
remember("Study");
console.log(todoList);
console.log("1st task ",todoList.shift());
console.log("1st task ", todoList.pop());
console.log(todoList);
todoList.push("Early Rise");
todoList.unshift("Study");
console.log(todoList);