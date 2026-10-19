import { createClient } from '@base44/sdk';
import config from '../config.js';

let client;

export const getBase44 = () => {
  if (!client) {
    client = createClient({
      appId: config.base44.appId,
      headers: {
        Authorization: `Bearer ${config.base44.accessToken}`
      }
    });
  }

  return client;
};