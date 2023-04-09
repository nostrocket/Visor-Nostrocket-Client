<template>
    <main class="max-w-4xl mx-auto">


<h1 class="text-2xl dark:text-white mt-6 block">🤯 List of totally normal things;</h1>

<ul class="dark:text-white mb-6">
  <li>- Performance is still a bit derpy  
  </li>

</ul>
<a href="#" onclick="document.getElementById('content').replaceChildren(updateAccountDetails())">Update Account Details</a><br />
<a href="#" onclick="document.getElementById('content').replaceChildren(newsubrocket())">New Subrocket</a> <br />
<a href="#" onclick="document.getElementById('content').replaceChildren(renderIdentityLayout())">Identity Tree</a> <br />


<div id = "content">
    WAITING FOR EVENTS

</div>
</main>
</template>
<script setup>

import { onMounted } from "vue";
// import { nostrtools as NostrTools } from "nostr-tools";

setPageLayout('landingclone');


useHead({
  meta: [
    { property: "twitter:title", content: "VISØR: Nostrocket Client" },
    { property: "twitter:image", content: "/Thumbnailed.png" },
    {
      property: "twitter:description",
      content:
        "VISØR: Nostrocket Client",
    },
  ],
  script: [
    { src: "/libs/nostr.bundle.js", body:true },
    // { src: "/libs/events.js" },
    { src: "/libs/dom.js", body:true },
    { src: "/libs/updateProfile.js", body:true },
    { src: "/libs/kind0.js", body:true },
    { src: "/libs/pubkey.js", body:true },
    { src: "/libs/showdown.min.js", body:true },
    { src: "/libs/state.js", body:true },
    { src: "/libs/utils.js", body:true },
    { src: "/libs/newsubrocket.js", body:true },
  ],







})

onMounted(() => {




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
    document.getElementById("content").replaceChildren()
    document.getElementById("content").appendChild(renderIdentityLayout())
})

function renderIdentityLayout() {
    waitForStateReady(()=>{
        // if (storedPubkey === "" || !storedPubkey) {
        //     window.nostr.getPublicKey().then(x=>{
        //         storedPubkey = x
        //     })
        // }
        
        const rootNode = identities().find(node => node.UniqueSovereignBy === '1Humanityrvhus5mFWRRzuJjtAbjk2qwww');
        const USHIdentities = identities().filter(x => x.UniqueSovereignBy !== null && x.UniqueSovereignBy !== '')
        document.getElementById("left-column").innerHTML = renderTree(USHIdentities, rootNode)
       
        identities().forEach(i => {

            const sovereignBy = i.UniqueSovereignBy;
            if (sovereignBy === null || sovereignBy === '') {
                document.getElementById("right-column").appendChild(makePerson(i));
            }
        })
    })
    return makeIdentityLayout()
}

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
    button.textContent = "Add to Identity Tree";

    // Add an event listener to the button
    button.onclick = function () {
        if (pubkeyInIdentity(pubkey)) {
            const USH = identities().find(x => x.Account === pubkey).UniqueSovereignBy
            if (USH != null && USH !== '') {
                addToIdentityTree(identity.Account)
            } else {
                alert("You need to be at Identity Tree first to add others identity.")
            }
        } else {
            alert("You need to be at Identity Tree first to add others identity.")
        }

    }
    
    // Return the button object
    return button;
  }

async function addToIdentityTree(account) {
    console.log(account)
    content = JSON.stringify({target: account, maintainer: false, ush: true, character: false})
    tags = makeTags(pubkey, "identity")
    let unsigned = makeUnsignedEvent(content, tags, 640402, pubkey)
    signAsynchronously(unsigned).then(signed => {
        console.log(signed)
        publish(signed)
    })
}

function makePerson(identity) {
    let p = document.createElement("div")
    p.id = identity.Name
    p.appendChild(makeH3(identity.Name))
    p.appendChild(makeItem("About", identity.About))
    p.appendChild(makeItem("Account", identity.Account))
    p.appendChild(makeItem("Added By", identity.UniqueSovereignBy))
    p.appendChild(makeItem("Order", identity.Order))
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

function renderTree(data, root) {
    let result = '';
    if (root) {
      result += `<ul><li>${makePerson(root).innerHTML}`;
      const children = data.filter(child => child.UniqueSovereignBy === root.Account);
      if (children.length > 0) {
        result += '<ul>';
        children.forEach(child => {
          result += renderTree(data, child);
        });
        result += '</ul>';
      }
      result += '</li></ul>';
    }
    return result;
  }
















});

;
</script>
<style>
.dark input[type=text]
 {
    color: black;
 }

.dark textarea {
 
    color: black;
 }

    </style>