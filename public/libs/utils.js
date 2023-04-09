// var mindmachineSocket = new WebSocket(relays);
async function signAsynchronously(event) {
    event.id = window.NostrTools.getEventHash(event)
    if (!window.nostr) {
        alert('Nostr extension not found.')
    } else if (window.nostr) {
        let signatureOrEvent = await window.nostr.signEvent(event)
        switch (typeof signatureOrEvent) {
            case 'string':
                event.sig = signatureOrEvent
                break
            case 'object':
                event.sig = signatureOrEvent.sig
                break
            default:
                throw new Error('Failed to sign with Nostr extension.')
        }
    }
    return event
}

function makeUnsignedEvent(note, tags, kind, pubkey) {
    var now = Math.floor((new Date().getTime()) / 1000);
    k = 1
    if (kind !== undefined) {
        k = kind
    }
let event = {
    kind: kind,
    pubkey: pubkey,
    created_at: now,
    tags: tags,
    content: note
  }
  event.id = window.NostrTools.getEventHash(event)
    return event
}


function publish(signed){
    let pubs = pool.publish([...relays, 'wss://nostr.688.org'], signed)
    pubs.on('ok', () => {
        console.log("published")
        // this may be called multiple times, once for every relay that accepts the event
        return 'ok!'
      })
    pubs.on('failed', relay => {
        console.log(`failed to publish event to: ${relay}`)
        return false
      })

}


