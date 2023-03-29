# flamewerk-app
Problem: there is no frontend for nostrocket

# solution
Build: client components for reusability using the Flamewerk template.

# Short introduction

JavaScript frameworks are built in layers, such as Vue and React, which are considered tier 1 layers. On top of these layers, there are more development structures that provide additional common functionality out of the box, such as NextJS, NuxtJS, and MeteorJS.

Currently, the industry has mostly standardized around React, with NextJS being commonly used these days. However, because of Facebook's backing of React and Vercel's association with NextJS, they hold more power due to the support of large corporations. This might not be appealing to everyone.

Flamewerk, on the other hand, is built on the community version of Vue, specifically Nuxt. It is not tied to any corporate backing, and is purely community-built open source software. Flamewerk builds on the Nuxt paradigm by creating reusable blocks that allow for fast MVP development, while still allowing flexibility in integrating new features and direct access to building blocks, all for free!

For this build it will be common practice to try and make the nostr blocks agnostic so they can be pushed into the flamewerk startup environment.
