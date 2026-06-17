import { createClient } from '@base44/sdk';
import config from '../config.js';

let client;

export const getBase44 = () => {
  if (!client) {
    client = createClient({
      appId: config.base44.appId,
      headers: {
        api_key: config.base44.apiKey
      }
    });
  }
  return client;
};