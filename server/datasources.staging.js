
// Copyright IBM Corp. 2014. All Rights Reserved.
// Node module: loopback-example-offline-sync
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

module.exports = {
  jobDone: {
    connector: 'mongodb',
    hostname: process.env.MONGODB_ADDON_HOST,
    port: process.env.MONGODB_ADDON_PORT,
    user: process.env.MONGODB_ADDON_USER,
    password: process.env.MONGODB_ADDON_PASSWORD,
    database: process.env.MONGODB_ADDON_DB,
  },
};
