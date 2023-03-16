let spy = ()=>{return console.log('Hello');}
function receivesAFunction (spy) {
 spy();
}

function returnsANamedFunction () {
    let greet = ()=>{return console.log("hello")}
    return greet;

}


function returnsAnAnonymousFunction(){
    return ()=>{
        return console.log("great day to die hard")
    }
}