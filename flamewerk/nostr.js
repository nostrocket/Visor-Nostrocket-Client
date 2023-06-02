
export const useNostr = defineStore('key', {
    state: () => ({

        //Simple Nostr Key Operation
        nostr:{ 
          sk: "",
          pk: "",
          skhex: "",
          pkhex: ""
        }

    })
})
