// src/utils/sendSMSNotification.js
import axios from 'axios';

const HUBTEL_BASE_URL = 'https://sms.hubtel.com/v1/messages/send';

export const sendSMSNotification = async (formData) => {
  const { name, phone, date, time, department } = formData;

  const payload = {
    From: import.meta.env.VITE_HUBTEL_FROM,
    To: import.meta.env.VITE_HOSPITAL_PHONE,
    Content: `New Appointment:\nName: ${name}\nPhone: ${phone}\nDept: ${department}\nDate: ${date}\nTime: ${time}`,
    ClientId: import.meta.env.VITE_HUBTEL_CLIENT_ID,
    ClientSecret: import.meta.env.VITE_HUBTEL_CLIENT_SECRET,
    RegisteredDelivery: true,
  };

  try {
    const response = await axios.post(HUBTEL_BASE_URL, payload, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('✅ SMS Sent to Admin:', response.data);
    return true;
  } catch (error) {
    console.error('❌ SMS Error:', error.response?.data || error.message);
    return false;
  }
};

