// WhatsApp Business API Configuration
export const WHATSAPP_CONFIG = {
  // Replace these with your actual credentials from Meta Developer Console
  PHONE_NUMBER_ID: 'YOUR_PHONE_NUMBER_ID',
  BUSINESS_ACCOUNT_ID: 'YOUR_BUSINESS_ACCOUNT_ID',
  ACCESS_TOKEN: 'YOUR_PERMANENT_ACCESS_TOKEN',
  RECIPIENT_NUMBER: '0597328517',
  
  // API Endpoints
  API_VERSION: 'v17.0',
  BASE_URL: 'https://graph.facebook.com',
  
  // Message Templates
  TEMPLATES: {
    APPOINTMENT: {
      name: 'appointment_notification',
      language: 'en',
      category: 'UTILITY'
    }
  }
}; 