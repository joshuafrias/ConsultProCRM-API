import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  base44: {
    appId: process.env.BASE44_APP_ID,
    apiKey: process.env.BASE44_API_KEY
  },
  inboundApiKey: process.env.INBOUND_API_KEY || ''
};