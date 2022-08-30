const foo = (bar) => {
    if (bar === 5){
        throw Error("Non pas 5")
    } else {
        return "coucou"
    }
}

try{
    console.log(foo(5))
} catch(e) {
    console.log("attention y'a un petit problème")
}


console.log("tout va bien")