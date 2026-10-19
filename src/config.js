import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  base44: {
    appId: process.env.BASE44_APP_ID,
    accessToken: process.env.BASE44_ACCESS_TOKEN
  },
  inboundApiKey: process.env.INBOUND_API_KEY || ''
};
``