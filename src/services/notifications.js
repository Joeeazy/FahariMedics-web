import { WHATSAPP_CONFIG } from '../config/whatsapp';

// WhatsApp Business API configuration
const WHATSAPP_API_URL = `${WHATSAPP_CONFIG.BASE_URL}/${WHATSAPP_CONFIG.API_VERSION}/${WHATSAPP_CONFIG.PHONE_NUMBER_ID}/messages`;
const WHATSAPP_TOKEN = WHATSAPP_CONFIG.ACCESS_TOKEN;

// Twilio configuration for SMS
const TWILIO_ACCOUNT_SID = 'YOUR_TWILIO_ACCOUNT_SID';
const TWILIO_AUTH_TOKEN = 'YOUR_TWILIO_AUTH_TOKEN';
const TWILIO_PHONE_NUMBER = 'YOUR_TWILIO_PHONE_NUMBER';

// Format date and time in a user-friendly way
const formatDateTime = (date, time) => {
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return `${new Date(date).toLocaleDateString('en-US', options)} at ${time}`;
};

// Format appointment details into a message
const formatAppointmentMessage = (formData) => {
  const formattedDateTime = formatDateTime(formData.date, formData.time);
  
  return `*New Appointment Request* 🏥

*Patient Information:*
• Type: ${formData.patientType === 'new' ? 'New Patient' : 'Existing Patient'}
• Name: ${formData.name}
• Phone: ${formData.phone}

*Appointment Details:*
• Date & Time: ${formattedDateTime}
• Department: ${formData.department}

${formData.patientType === 'new' ? `
*Additional Information:*
• Date of Birth: ${formData.dateOfBirth}
• Gender: ${formData.gender}
• Residence: ${formData.residence}
` : ''}

*Message:* ${formData.message || 'No additional message'}

Please respond with:
✅ Approve
🔄 Reschedule
❌ Decline`;
};

// Send WhatsApp message
export const sendWhatsAppNotification = async (formData) => {
  try {
    const message = formatAppointmentMessage(formData);
    
    // First, verify the phone number is registered with WhatsApp
    const verifyResponse = await fetch(`${WHATSAPP_CONFIG.BASE_URL}/${WHATSAPP_CONFIG.API_VERSION}/${WHATSAPP_CONFIG.PHONE_NUMBER_ID}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
      }
    });

    if (!verifyResponse.ok) {
      throw new Error('Failed to verify WhatsApp number');
    }

    // Send the message
    const response = await fetch(WHATSAPP_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: WHATSAPP_CONFIG.RECIPIENT_NUMBER,
        type: 'text',
        text: { 
          body: message,
          preview_url: false // Disable link previews
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('WhatsApp API Error:', data);
      throw new Error(data.error?.message || 'Failed to send WhatsApp message');
    }

    // Log successful message delivery
    console.log('WhatsApp message sent successfully:', {
      messageId: data.messages[0].id,
      timestamp: new Date().toISOString()
    });

    return true;
  } catch (error) {
    console.error('WhatsApp notification error:', error);
    
    // Handle specific error cases
    if (error.message.includes('rate limit')) {
      console.error('Rate limit exceeded. Please try again later.');
    } else if (error.message.includes('invalid phone number')) {
      console.error('Invalid phone number format.');
    } else if (error.message.includes('authentication')) {
      console.error('Authentication failed. Please check your API credentials.');
    }
    
    return false;
  }
};

// Send SMS using Twilio
export const sendSMSNotification = async (formData) => {
  try {
    const message = formatAppointmentMessage(formData);
    const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        To: WHATSAPP_CONFIG.RECIPIENT_NUMBER,
        From: TWILIO_PHONE_NUMBER,
        Body: message
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send SMS');
    }

    return true;
  } catch (error) {
    console.error('SMS notification error:', error);
    return false;
  }
}; 