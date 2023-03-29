
export const useAPI = defineStore('api', {
    state: () => ({

        //DEMO API FROM THE OFFICIAL GHOST TEAM
        ghost:{ 
          url: 'https://demo.ghost.io',
          key: '22444f78447824223cefc48062',
          version: "v5.0",
          filter: false
        }

    })
})
