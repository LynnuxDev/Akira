# Edited Node_Modules

This file explains what changes have been made to the `node_modules` folder.

- [Edited Node\_Modules](#edited-node_modules)
  - [ForgeScript](#forgescript)
    - [FunctionManager](#functionmanager)
    - [encrypt.js / decrypt.js](#encryptjs--decryptjs)

## [ForgeScript]

### FunctionManager

This removes the Function Spam from Function overrides.

- location: `node_modules/@tryforge/forgescript/dist/managers/` [.](./node_modules/@tryforge/forgescript/dist/managers/ForgeFunctionManager.js)

### encrypt.js / decrypt.js

Changed FIXED_IV to a custom IV so it doenst use the default IV of [ForgeScript]

- location: `node_modules/@tryforge/forgescript/dist/native/crypto/` [.](./node_modules/@tryforge/forgescript/dist/native/crypto/encrypt.js)

[ForgeScript]: https://github.com/tryforge/forgescript
