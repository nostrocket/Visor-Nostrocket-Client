export const useProducten = defineStore("producten", {
  state: () => ({
    inventory: [
      {
        id: 1,
        identity: "1",
        type: "Product", //Options Product, Digital, Subscription
        category: "New",
        title: "Hoody with zipper",
        description: "Simple Black with logo",
        stock: "low", //Options: Low & Out By default products are in stock
        price: {
          usd: 40,
          eur: 35,
        },
        image: "https://production.flamewerk.com/stock/product1.jpg",
        imagelocal: "/stock/product1.jpg",
        features: [
          "100% Extra hacker power",
          "Can be used as a Emo/Hardcore hoody",
          "Makes you look badass",
        ],
      },
      {
        id: 2,
        identity: "2",
        type: "Product",
        category: "New",
        title: "Metal bottle",
        description: "Holds liquids",
        stock: "out",
        price: {
          usd: 25,
          eur: 20,
        },
        image: "https://production.flamewerk.com/stock/product2.jpg",
        imagelocal: "/stock/product2.jpg",
      },
      {
        id: 3,
        identity: "3",
        type: "Product",
        category: "New",
        title: "Sticker",
        description: "Flamewerk Logo Sticker",
        price: {
          usd: 4.2,
          eur: 2.5,
        },
        image: "https://production.flamewerk.com/stock/product3.jpg",
        imagelocal: "/stock/product3.jpg",
      },
      {
        id: 4,
        identity: "4",
        type: "Product",
        category: "New",
        title: "Beanie Hat",
        description: "Embroided cold weather hat",
        price: {
          usd: 20,
          eur: 15,
        },

        image: "https://production.flamewerk.com/stock/product4.jpg",
        imagelocal: "/stock/product4.jpg",
      },

      {
        id: 5,
        identity: "5",
        type: "Digital",
        category: "Downloads",
        title: "Band - Music Album",
        description: "Awesome Tunes by a band",
        price: {
          usd: 4.99,
          eur: 4.99,
        },
        image: "https://production.flamewerk.com/stock/product5.png",
        imagelocal: "/stock/product5.png",
      },

      {
        id: 6,
        identity: "6",
        type: "Digital",
        category: "Downloads",
        title: "Template",
        description: "Simple Black",
        price: {
          usd: 19,
          eur: 21,
        },
        image: "https://production.flamewerk.com/stock/product6.png",
        imagelocal: "/stock/product6.png",
      },

      {
        id: 7,
        identity: "7",
        type: "Digital",
        category: "Downloads",
        title: "Book",
        description: "Download our book",
        price: {
          usd: 9.99,
          eur: 12.4,
        },
        image: "https://production.flamewerk.com/stock/product7.png",
        imagelocal: "/stock/product7.png",
      },

      {
        id: 8,
        identity: "8",
        type: "Digital",
        category: "Downloads",
        title: "Purchase License",
        description:
          "Don't like monthly payments ? Neither do we ! Show some support and pay a one time lump of money instead of a monthly subscription plan!",
        price: {
          usd: 799,
          eur: 599,
        },
        image: "https://production.flamewerk.com/stock/product8.png",
        imagelocal: "/stock/product8.png",
      },


      {
        id: 9,
        identity: "9",
        type: "Subscription",
        cycle: "Month",
        trial: "14",
        category: "License",
        title: "Hobby License",
        description:
          "All the basics for starting a new business",
        price: {
          usd: 0,
          eur: 0,
        },
        features: [
          "Test for free with a 14 Day Trial",
        ],
      },

      {
        id: 10,
        identity: "10",
        type: "Subscription",
        cycle: "Month",
        trial: "14",
        category: "License",
        title: "Startup License",
        description:
          "Everything from Hobby and more !",
        price: {
          usd: 32,
          eur: 28,
        },
        features: [
          "Test the Startup License ",
          "Free with a 14 Day Trial !",
        ],
      },

      {
        id: 11,
        identity: "11",
        type: "Subscription",
        cycle: "Month",
        trial: "14",
        category: "License",
        title: "Enterprise License",
        description:
          "All the Enterprise tings",
        price: {
          usd: 80,
          eur: 72,
        },
        features: [
          "Test the Startup License ",
          "Free with a 14 Day Trial !",
          "Enterprise Features for Production!",
        ],
      },


      {
        id: 12,
        identity: "12",
        type: "Subscription",
        cycle: "Year",
        trial: "14",
        category: "License",
        title: "Hobby License",
        description:
          "All the basics for starting a new business",
        price: {
          usd: 0,
          eur: 0,
        },
        features: [
          "Still free with a Free trial",
        ],
      },

      {
        id: 13,
        identity: "13",
        type: "Subscription",
        cycle: "Year",
        trial: "14",
        category: "License",
        title: "Startup License",
        description:
          "Everything from Hobby and more !",
        price: {
          usd: 300,
          eur: 240,
        },
        features: [
          "Yearly Discounted Price !",
          "Free with a 14 Day Trial !",
        ],
      },

      {
        id: 14,
        identity: "14",
        type: "Subscription",
        cycle: "Year",
        trial: "14",
        category: "License",
        title: "Enterprise License",
        description:
          "All the Enterprise tings",
        price: {
          usd: 690,
          eur: 560,
        },
        features: [
          "Yearly Discounted Price !",
          "Free with a 14 Day Trial !",
          "Enterprise Features for Production!",
        ],
      },

    ],
  }),
});
