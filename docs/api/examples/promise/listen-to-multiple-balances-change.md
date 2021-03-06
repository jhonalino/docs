---
title: Listen to balance changes
---

This example shows how to instantiate a Polkadot API object and use it to connect to a node and retrieve balance updates.

```javascript
// Import the API
const { ApiPromise } = require('@polkadot/api');

// Known account we want to use (available on dev chain, with funds)
const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const BOB = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';

async function main () {
  // Create an await for the API
  const api = await ApiPromise.create();

  console.log('Tracking balances for:', [ALICE, BOB]);

  // Subscribe and listen to several balance changes
  api.query.system.account.multi([ALICE, BOB], (balances) => {
    console.log('Change detected, new balances: ', balances.map(({ data: { free } }) => free));
  });
}

main().catch(console.error);
```
