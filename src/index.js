module.exports = function check(str, bracketsConfig) {
    if(str.length % 2 !== 0) 
        return false;
    let config = [].concat(...bracketsConfig);
    let stack = [];
    for(let elem of str) {
        if(elem === "7" || elem === "8" || elem === "|" ) {
            if(elem === stack[stack.length-1])
                stack.pop();
            else stack.push(elem);
        }
        else {
            let ind = config.indexOf(elem);
            if(ind % 2 === 0)
                stack.push(elem);
            else {
                if((config.indexOf(stack[stack.length-1]) + 1 ) === ind)
                    stack.pop();
                else return false;
            }
        }
    }
    return stack.length===0 ? true : false;
}
