<template>
    <main class="max-w-4xl mx-auto">



<div id = "content">
    WAITING FOR EVENTS

</div>
</main>
</template>
<script setup>

import { onMounted } from "vue";

onMounted(() => {

    document.getElementById("content").replaceChildren()
    document.getElementById("content").appendChild(newsubrocket())





function makeTextInput(label, placeholder, id, maxlength, existing) {
    let d = document.createElement("div")
    let textInput = document.createElement("input")
    d.appendChild(textInput)
    textInput.className = "input"
    textInput.type = "text"
    if (existing.length > 0) {
        textInput.value = existing
    }
    textInput.placeholder = placeholder
    textInput.id = id
    textInput.maxLength = maxlength

    if (label === "Username") {
        var userameIsAlreadySet = false
        identities().forEach(function (v) {
            if (v.Account === pubkey) {
                if (v.Name.length > 0) {
                    textInput.value = v.Name
                    textInput.readOnly = true
                    userameIsAlreadySet = true
                }
            }
        })
        if (!userameIsAlreadySet) {
            warn = document.createElement("p")
            warn.style.display = "none"
            identities().forEach(function (v) {
                if (v.Name === existing) {
                    warn.style.display = "block"
                }
            })
            warn.innerText = "username is taken!"
            if (existing.length < 1) {
                warn.innerText = "username is too short!"
            }
            warn.style.color = "#FF9900"

            textInput.onkeyup = function () {
                warn.style.display = "none"
                if (textInput.value.length < 1) {
                    warn.innerText = "username is too short!"
                    warn.style.display = "block"
                }
                identities().forEach(function (v) {
                    if ((v.Name === textInput.value)&&(textInput.value.length > 0)) {
                        warn.innerText = "username is taken!"
                        warn.style.display = "block"
                    }
                })
            }
            d.appendChild(warn)
        }
    }

    if (label === "Amount") {
        warn = document.createElement("p")
        warn.style.display = "none"
        textInput.type = "number"
        textInput.onkeyup = function () {
            warn.style.display = "none"
            int = parseInt(textInput.value, 10)
            if (!int) {
                warn.style.color = "#FF9900"
                warn.innerText = "must be a number!"
                warn.style.display = "block"
            } else {
                if (USD) {
                    usdAmount = ((int/100000000)*USD).toFixed(2)
                    warn.innerText = "Approximate amount in Cuckbucks:  $" + usdAmount
                    warn.style.color = "#35be33"
                    warn.style.display = "block"
                } else {
                    console.log("could not get USD")
                }
            }
        }
        d.appendChild(warn)
    }
    return makeFormField(label, d)
}


function makeFormField(label, input) {
    if (label === "About") {
        //todo populate from existing data if exists
    }
    let field = document.createElement("div")
    field.className = "field"
    field.appendChild(makeLabel(label))
    let control = document.createElement("div")
    control.className = "control"
    control.appendChild(input)
    field.appendChild(control)
    return field
}


function makeLabel(name) {
    let label = document.createElement("label")
    label.className = "label"
    label.innerText = name
    return label
}


function newsubrocket() {
    let div = document.createElement("div")
    div.appendChild(makeTextInput("Name", "Subrocket Name", "name input", 20, ""))
    div.appendChild(makeTextInput("Problem ID", "ID of Problem", "problem input", 64, "e624297b5a66775ee21a2565c023764bf6dc73cbbb0a1579fa5ff40ff50d59cd"))
    let b = document.createElement("button")
    b.innerText = "Do it!"
    b.onclick = function () {
        newSubrocketName(document.getElementById( 'name input' ).value, document.getElementById( 'problem input' ).value).then(x => {
            publish(x)
            newSubrocketCapTable(document.getElementById( 'name input' ).value, x.id).then(y => {
                publish(y)
            })
        })

    }
    div.appendChild(b)
    if (currentState.shares) {
        let  shares = Object.keys(currentState.shares);
        shares.forEach(subrocket => {
            // console.log(currentState.identity[account])
            // i.push(currentState.identity[account])
            div.appendChild(makeSubRocket(subrocket))
        })
    }
    return div
}
function makeSubRocket(subrocketName){
    let s = document.createElement("div")
    s.className = "subrocket"
    s.id = subrocketName
    let subrocketInfo = currentState.shares[subrocketName]
    // console.log(subrocketInfo)
    s.appendChild(makeH3(subrocketName))
    
    for (let account in subrocketInfo) {
        let cap = subrocketInfo[account] 
        s.appendChild(makeItem("Name",getIdentityByAccount(account).Name))
        s.appendChild(makeItem("Last Lt Change", cap.LastLtChange))
        s.appendChild(makeItem("Lead Time", cap.LeadTime))
        s.appendChild(makeItem("Lead Time Locked Shares", cap.LeadTimeLockedShares))
        s.appendChild(makeItem("Lead Time Unlocked Shares", cap.LeadTimeUnlockedShares))
        s.appendChild(makeItem("OP Return Addresses", cap.OpReturnAddresses))
    }

    return s
}

async function newSubrocketName(name, problem) {
    if (name.length > 3) {
        content = JSON.stringify({rocket_id: name, problem_id: problem})
        tags = makeTags(pubkey, "subrockets")
        let unsigned = makeUnsignedEvent(content, tags, 640600, pubkey)
        let signed = await signAsynchronously(unsigned)
        return signed
        // await sendEventToRocket(content, tags, 640600, pubkey).then(x =>{
        //     return x
        // })
    } else {
        console.log("name is too short")
    }
}

async function newSubrocketCapTable(name, r) {
    if (name.length > 3) {
        content = JSON.stringify({rocket_id: name})
        tags = makeTags(pubkey, "shares", r)
        let unsigned = makeUnsignedEvent(content, tags, 640208, pubkey)
        let signed = await signAsynchronously(unsigned)
        return signed
        // await sendEventToRocket(content, tags, 640208, pubkey).then(x =>{
        //     return x
        // })
    } else {
        console.log("name is too short")
    }
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