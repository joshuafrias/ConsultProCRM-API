import { createClient } from '@base44/sdk';
import config from '../config.js';

let client;

export const getBase44 = () => {
  if (!client) {
    if (!config.base44.appId) {
      throw new Error('Missing BASE44_APP_ID');
    }

    if (!config.base44.accessToken) {
      throw new Error('Missing BASE44_ACCESS_TOKEN');
    }

    client = createClient({
      appId: config.base44.appId,
      token: config.base44.accessToken,
      options: {
        onError: (error) => {
          console.error('Base44 SDK error:', {
            message: error?.message,
            status: error?.status
          });
        }
      }
    });
  }

  return client;
};