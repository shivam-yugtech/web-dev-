function outer(){
    inner();
    function inner(){
        console.log(b);
    }
}
var b=10;
outer();
console.log(b);

/*
scope: 
where can this variable/function be accessed in the Code.Code
                        OR
is variable/function inside the scope of code/function.

scope chain : chain of lexical envionment and the parent refferences.

lexical envionment : local memory + lexical env. of parent
*/