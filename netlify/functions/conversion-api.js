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

    // Get and clean the IP address
    let clientIp = event.headers['x-forwarded-for'] || event.headers['client-ip'] || '';
    // Take only the first IP if multiple are present
    clientIp = clientIp.split(',')[0].trim();
    
    // If no valid IP is found, use a default one
    if (!clientIp || clientIp === 'unknown') {
      clientIp = '0.0.0.0';
    }

    const userAgent = event.headers['user-agent'] || '';

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
          fbp: data.user_data?.fbp || undefined,
          fbc: data.user_data?.fbc || undefined,
          external_id: data.user_data?.external_id || undefined
        },
        custom_data: {
          ...data.custom_data,
          currency: data.custom_data?.currency || 'BDT',
          value: data.custom_data?.value || 0
        }
      }]
    };

    // Remove undefined values
    eventData.data[0].user_data = Object.fromEntries(
      Object.entries(eventData.data[0].user_data)
        .filter(([_, v]) => v != null)
    );

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
