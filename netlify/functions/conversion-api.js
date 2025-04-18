const axios = require('axios');

exports.handler = async (event) => {
  // Enable CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { data } = JSON.parse(event.body);
    const accessToken = process.env.FB_ACCESS_TOKEN;
    const pixelId = '1224675005739488'; // your pixel ID

    // Get the client's IP address
    const clientIp = event.headers['x-forwarded-for'] || event.headers['client-ip'];
    const userAgent = event.headers['user-agent'];

    const url = `https://graph.facebook.com/v17.0/${pixelId}/events?access_token=${accessToken}`;
    
    const eventData = {
      data: [{
        event_name: data.event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: 'https://mhfashions1.netlify.app/',
        action_source: "website",
        user_data: {
          client_ip_address: clientIp,
          client_user_agent: userAgent,
          fbp: data.user_data?.fbp || null,
          fbc: data.user_data?.fbc || null,
          external_id: data.user_data?.external_id || null
        },
        custom_data: {
          ...data.custom_data,
          currency: data.custom_data?.currency || 'BDT',
          value: data.custom_data?.value || 0
        }
      }]
    };

    console.log('Sending event to Facebook:', JSON.stringify(eventData, null, 2));

    const response = await axios.post(url, eventData);
    
    console.log('Facebook API response:', response.data);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ 
        success: true, 
        data: response.data 
      })
    };

  } catch (error) {
    console.error('Error details:', error.response?.data || error.message);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ 
        error: error.response?.data || error.message 
      })
    };
  }
} 
