let pubkey = ""

setTimeout(function(){
    if (window.nostr) {
        window.nostr.getPublicKey().then(x=>{
            console.log("Current pubkey is: ", x);
            pubkey = x
        })
    } else {
        console.log("Sorry Seems like we can't read out your pubkey, you can try contacting if this keeps happening")
    }
},100)