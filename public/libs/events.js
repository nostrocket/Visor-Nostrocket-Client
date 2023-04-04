const pool = new NostrTools.SimplePool()

let relays = []



let sub = pool.sub(
    [...relays, 'wss://nostr.688.org'],
    [
        {
            //tags: [['#e', 'fd459ea06157e30cfb87f7062ee3014bc143ecda072dd92ee6ea4315a6d2df1c']]
            "#e": "fd459ea06157e30cfb87f7062ee3014bc143ecda072dd92ee6ea4315a6d2df1c",
            kinds: [10310]
            // authors: [
            //     "b4f36e2a63792324a92f3b7d973fcc33eaa7720aaeee71729ac74d7ba7677675"
            //     //NostrTools.nip19.decode("npub1mygerccwqpzyh9pvp6pv44rskv40zutkfs38t0hqhkvnwlhagp6s3psn5p").data
            // ]
        }
    ]
)



sub.on('event', event => {
    let j = JSON.parse(event.content)
    enMapState(event)
    waitForStateReady(()=>{
        // if (storedPubkey === "" || !storedPubkey) {
        //     window.nostr.getPublicKey().then(x=>{
        //         storedPubkey = x
        //     })
        // }
        document.getElementById("content").replaceChildren()
        document.getElementById("content").appendChild(makeIdentityLayout())
        identities().forEach(i => {
          
        const sovereignBy = i.UniqueSovereignBy;
        if (sovereignBy === null || sovereignBy === '') {
          document.getElementById("right-column").appendChild(makePerson(i));
        }else {
            document.getElementById("left-column").appendChild(makePerson(i));
        }
        })
    })
})
function makeIdentityLayout(){
    let d = document.createElement("div")
    d.className = "columns-wrapper"
    let left = document.createElement("div")
    left.id = "left-column"
    left.innerHTML = '<h2>Identity Tree</h2>\
    <ul id="provedIdentities"></ul>'
    let right = document.createElement("div")
    right.id = "right-column"
    right.innerHTML = '<h2>Accounts waiting to be added</h2>\
    <ul id="unprovedIdentities"></ul>'
    d.appendChild(left)
    d.appendChild(right)
    return d
}

function createAddButton(identity,onclick) {
    // Create a button element
    const button = document.createElement("button");
    button.id = identity.Account+'_button'
    // Set some properties for the button
    button.textContent = "Add";
    button.style.backgroundColor = "blue";
    button.style.color = "white";
    
    // Add an event listener to the button
    button.onclick = function() { 
    if (pubkeyInIdentity(pubkey)) {
        const USH = identities().find(x => x.Account === pubkey).UniqueSovereignBy
        if (USH != null && USH !== '') {
            const Account = this.id.substring(0, this.id.indexOf("_"));
            const target = identities().find(x => x.Account === Account)
            
            content = JSON.stringify({target: target.Account, maintainer: false,ush:true,character:false})
            tags = makeTags(pubkey)
            sendEventToRocket(content, tags, 640402, pubkey).then(x =>{
                // location.reload()
                console.log(x,'undefined?')
            if (reload) {location.reload()}

            });
        }else{
            alert("You need to be at Identity Tree first to add others identity.")
            return
        }
    } else{
        alert("You need to be at Identity Tree first to add others identity.")
        return 
    }  
    
}
    
    // Return the button object
    return button;
  }


function makePerson(identity) {
    let p = document.createElement("div")
    p.id = identity.Name
    p.appendChild(makeH3(identity.Name))
    p.appendChild(makeItem("About", identity.About))
    p.appendChild(makeItem("Account", identity.Account))
    p.appendChild(makeItem("Added By", identity.UniqueSovereignBy))
    if (identity.UniqueSovereignBy === null || identity.UniqueSovereignBy === ''){
        p.appendChild(createAddButton(identity))
    }
    return p
}

function makeItem(key, value) {
    let d = document.createElement("div")
    d.appendChild(makeText(key + ": "))
    d.appendChild(makeText(value))
    return d
}

function makeText(text) {
    let s = document.createElement("span")
    s.innerText = text
    return s
}

function makeH3(title) {
    h3 = document.createElement("h3")
    h3.className = "is-3"
    h3.innerText = title
    return h3
}