let reload = false
let IdentityRoot = "0a73208becd0b1a9d294e6caef14352047ab44b848930e6979937fe09effaf71"
let SharesRoot = "7fd9810bdb8bc635633cc4e3d0888e395420aedc7d28778c100793d1d3bc09a6"
let SubrocketsRoot = "c7f87218e62f6d41fa2f5b2480210ed1d48b2609e03e9b4b500a3b64e3c08554"
let IgnitionEvent = "fd459ea06157e30cfb87f7062ee3014bc143ecda072dd92ee6ea4315a6d2df1c"
let ReplayRoot = "24c30ad7f036ed49379b5d1209836d1ff6795adb34da2d3e4cabc47dc9dfef21"

function updateAccountDetails() {
    form = document.createElement("div")
    form.appendChild(usernameAndBioForm())
    form.appendChild(bioButtons(function () {
        if (document.getElementById( 'name input' ).valueOf().readOnly) {
            setBio( document.getElementById( 'name input' ).value, document.getElementById( 'about input' ).value, pubkey )
            //location.reload()
        } else {
            validateUnique(document.getElementById( 'name input' ).value).then(res => {
                if (res) {
                    setBio( document.getElementById( 'name input' ).value, document.getElementById( 'about input' ).value, pubkey )
                    //location.reload()
                } else {
                    alert(document.getElementById( 'name input' ).value + " has been taken, please try another username")
                }
            })
        }

    }))
    return form
}

async function validateUnique(name) {
    p = new Promise((resolve, reject) => {
        identities().forEach(function (v) {
            if (v.Name === name) {
                resolve(false)
            }
        })
        resolve(true)
    })
    return p
}

function bioButtons(onclick) {
    submit = document.createElement("button")
    submit.onclick = onclick
    submit.className = "button is-link"
    submit.innerText = "Submit"
    cancel = document.createElement("button")
    cancel.onclick = function () {
        document.getElementById('name input').value = '';document.getElementById('about input').value = '';
    }
    cancel.className = "button is-link is-light"
    cancel.innerText = "Clear"

    buttons = document.createElement("div")
    buttons.className = "field is-grouped"

    control = document.createElement("div")
    control.className = "control"

    control.appendChild(submit)
    control.appendChild(spacer())
    control.appendChild(spacer())
    control.appendChild(cancel)
    buttons.appendChild(control)
    return buttons
}
function createUsernameAndBioForm(div,haveExistingKind0,username,about){
    
    div.appendChild(makeH3("Create or modify your Nostrocket profile"))
    div.appendChild(makeParagraph("* Nostrocket usernames **cannot** be changed once set for your Pubkey   \n* Nostrocket usernames **must** be unique   \n* Protocol: [Non-fungible Identity](superprotocolo://b66541b20c8a05260966393938e2af296c1a39ca5aba8e21bd86fcce2db72715)"))
    if (haveExistingKind0) {
        div.appendChild(makeParagraph("Submit this form to claim _**" + kind0Objects.get(pubkey).name + "**_ now."))
    }
    div.appendChild(makeTextInput("Username", "Name or Pseudonym", "name input", 20, username))

    div.appendChild(makeTextField("About Me", "Introduce yourself to the community", "about input", 560, about))
    return div
}
function updateUsernameAndBioForm(div,haveExistingKind0,username,about){
    div.innerHTML = ""
    div.appendChild(makeH3("Create or modify your Nostrocket profile"))
    div.appendChild(makeParagraph("* Nostrocket usernames **cannot** be changed once set for your Pubkey   \n* Nostrocket usernames **must** be unique   \n* Protocol: [Non-fungible Identity](superprotocolo://b66541b20c8a05260966393938e2af296c1a39ca5aba8e21bd86fcce2db72715)"))
    if (haveExistingKind0) {
        div.appendChild(makeParagraph("Submit this form to claim _**" + kind0Objects.get(pubkey).name + "**_ now."))
    }
    div.appendChild(makeTextInput("Username", "Name or Pseudonym", "name input", 20, username))

    div.appendChild(makeTextField("About Me", "Introduce yourself to the community", "about input", 560, about))
    return div
}
function usernameAndBioForm() {
    div = document.createElement("div")
    let username = ""
    let about = ""
    let haveExistingIdentity = false
    let haveExistingKind0 = false
    let pubkeyId = identities().filter(item => item.Account === pubkey)
    if (pubkeyId.length === 0) {
        // no existing identity, try to get kind0 from other relays
        getKind0Object(pubkey,relays = ["wss://relay.damus.io"])
        waitForKind0Ready(function(){
            if (kind0Objects.get(pubkey) !== undefined) {
                if (kind0Objects.get(pubkey).name.length > 0) {
                    username = kind0Objects.get(pubkey).name
                    haveExistingKind0 = true
                }
                if (kind0Objects.get(pubkey).about.length > 0) {
                    about = kind0Objects.get(pubkey).about
                    haveExistingKind0 = true
                }
                updateUsernameAndBioForm(div,haveExistingKind0,username,about)
            }
        })

    } else if (pubkeyId.length === 1){
        haveExistingIdentity = true
        about = pubkeyId[0].About
        username = pubkeyId[0].Name
    } else {
        alert("Error: multiple identities found for this pubkey.")
    }


    
   
    return createUsernameAndBioForm(div,haveExistingKind0,username,about)
}

const classMap = {
    h1: 'title is-1',
    h2: 'title is-2',
    h3: 'title is-3',
    h4: 'title is-4',
    h6: 'subtitle'
}

const bindings = Object.keys(classMap)
    .map(key => ({
        type: 'output',
        regex: new RegExp(`<${key}(.*)>`, 'g'),
        replace: `<${key} class="${classMap[key]}" $1>`
    }));


function makeParagraph(markdown) {
    d = document.createElement("div")
    md = new showdown.Converter({
        extensions: [...bindings]
    })
    ht = md.makeHtml(markdown)
    mdht = document.createElement("div")
    mdht.innerHTML = ht
    d.appendChild(mdht)
    d.appendChild(document.createElement("br"))
    return d
}

function makeLink(url, text) {
    a = document.createElement("a")
    a.href = url
    a.innerText = text
    return a
}

function makeH3(title) {
    h3 = document.createElement("h3")
    h3.className = "is-3"
    h3.innerText = title
    return h3
}

function makeTextField(label, placeholder, id, maxlength, existing) {
    input = document.createElement("textarea")
    input.className = "textarea"
    if (existing.length > 0) {
        input.value = existing
    }
    input.placeholder = placeholder
    input.id = id
    input.maxLength = maxlength
    return makeFormField(label, input)
}

function makeTextInput(label, placeholder, id, maxlength, existing) {
    d = document.createElement("div")
    textInput = document.createElement("input")
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
    field = document.createElement("div")
    field.className = "field"
    field.appendChild(makeLabel(label))
    control = document.createElement("div")
    control.className = "control"
    control.appendChild(input)
    field.appendChild(control)
    return field
}

function makeLabel(name) {
    label = document.createElement("label")
    label.className = "label"
    label.innerText = name
    return label
}


async function setBio(name, about, pubkey) {
    if ((name.length > 0) || (about.length > 0)) {
        content = JSON.stringify({name: name, about: about})
        tags = makeTags(pubkey, "identity")
        signAsynchronously(makeUnsignedEvent(content, tags, 640400, pubkey)).then(signed => {
            publish(signed)
        })
    } else {
        console.log("username and bio can't both be empty")
    }
}
function makeTags(pubkey, type, r){
    tags = [["e", IgnitionEvent, "", "root"]]
    if (type === "identity") {tags.push(["e", IdentityRoot, "", "reply"])}
    if (type === "shares") {tags.push(["e", SharesRoot, "", "reply"])}
    if (type === "subrockets") {tags.push(["e", SubrocketsRoot, "", "reply"])}
    if (!r) {
        if (pubkeyInIdentity(pubkey)){
            tags.push(["r", getReplyByAccount(pubkey), "", "reply"])
        } else {
            tags.push(["r", ReplayRoot, "", "reply"])
        }
    }
    if (r) {
        tags.push(["r", r, "", "reply"])
    }
    return tags
}

function spacer() {
    s = document.createElement("span")
    s.innerText = " "
    return s
}
