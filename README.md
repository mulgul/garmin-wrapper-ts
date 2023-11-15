<br /><br />

<div align="center">
  <h1 align="center">@mulgul/garmin-wrapper-ts</h1>
  <h4 align="center"> Typescript API wrapper for the Garmin IPCBound API </h4>
  <p align="center">
    <a href="https://www.npmjs.com/package/@mulgul/garmin-wrapper-ts">
      <img alt="npm" src="https://img.shields.io/npm/v/@mulgul/garmin-wrapper-ts" />
    </a>
    <a href="https://github.com/mulgul/Garmin-Wrapper-TS/actions">
      <img alt="Github Actions" src="https://github.com/mulgul/Garmin-Wrapper-TS/workflows/pr/badge.svg" />
    </a>
    <a href="https://github.com/mulgul/Garmin-Wrapper-TS/blob/main/LICENSE">
      <img alt="GPL-3.0-or-later" src="https://img.shields.io/npm/l/@mulgul/garmin-wrapper-ts" />
    </a>
  </p>
</div>

<br /><br />

Thw following library is wrapper around the Garmin IPCBound API. Garmin has two specific API's - The [IPC Inbound API](https://developer.garmin.com/inReach/IPC_Inbound.pdf), and the [IPC Outbound API](https://developer.garmin.com/inReach/IPC_Outbound.pdf). This API focuses on giving the tools to access these exact api's with ease. Currently this wrapper focuses on Inbound requests. Outbound service requires more than the scope of this library offers. 

## How to

### `InboundGarminWrapper`

```typescript
import { InboundGarminWrapper } from '@mulgul/garmin-wrapper-ts';

const credentials = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
};
const ipcUrl = process.env.IPCURL;
const imei = process.env.IMEI;

const api = new InboundGarminWrapper(ipcUrl, credentials, imei);

let data;
try {
    data = await api.getTrackingVersion();
} catch (e) {
    console.error(e)
}
```

### `options`

All api calls take in an option param of type [`RequestInit`](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.requestinit.html). These contain basic header options etc.

```typescript
await api.getTrackingVersion({
    body: 'foo',
    headers: {
        ...
    }
});
```

## About this repository

### License

The source code in this repository is distributed under the Apache-2.0 license. See the <LICENSE> file.

This source code comes with absolutely no warranty. Use at your own risk.
