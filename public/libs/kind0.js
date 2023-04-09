const kind0Objects = new Map();
const kind0Relays = ["wss://relay.damus.io"];

let kind0Ready = false

function waitForKind0Ready(callback) {
    var interval = setInterval(function() {
        if (kind0Ready) {
            clearInterval(interval);
            callback();
        }
    }, 200);
}

function enMapKind0Object(e) {
    c = e//JSON.parse(e)
    if (c.kind === 0) {
        d = JSON.parse(c.content)
        kind0Objects.set(c.pubkey, d)
    }
}
function getKind0Object(pubkey,relays = []) {
    const pool = new NostrTools.SimplePool()
    let sub = pool.sub(
    [...relays, 'wss://nostr.688.org'],
        [
            {
                kinds: [0],
                authors: [
                    pubkey
           ]
            }
        ]
    )


    sub.on('event', event => {
        let j = JSON.parse(event.content)

        enMapKind0Object(event)
        kind0Ready = true
        return kind0Objects
    })

   
}
