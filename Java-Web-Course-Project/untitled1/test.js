function password (args){
    let username = args[0];
    let counter = 0;
    let tries = args.length;

    for (let pass = 1; pass < tries; pass++){
        let password = [...args[pass]].reverse().join("");
        if (password === username){
            console.log(`User ${username} logged in.`);
            break;
        }else{
            console.log(`Incorrect password. Try again.`);
            counter+=1;
        }
        if (counter === 4){
            console.log(`User ${username} blocked!`);
            break;
        }
    }
}
password(['Acer','login','go','let me in','recA']);