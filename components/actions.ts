'use server';

import { createClient } from 'supabase/server';
type FormState = {
  success: boolean;
  message: string;
};
export const addSubscriber = async (formState: FormState, formData: FormData) => {
  'use server';
  const supabase = createClient();
  const email = formData.get('email') as string;
  const name = formData.get('name');
  if (!email) {
    return { success: false, message: 'Please provide your email.' };
  }
  if (!isValidEmail(email)) {
    return { success: false, message: 'Please provide a valid email.' };
  }

  const { data, error } = await supabase.from('subscribers').select('email').eq('email', email);
  if (error) {
    return { success: false, message: 'An error occurred. Please try again later.' };
  }

  if (data.length > 0) {
    return { success: false, message: "You're already subscribed." };
  }

  const { error: insertError } = await supabase.from('subscribers').insert([{ email, name }]);
  if (insertError) {
    return { success: false, message: 'An error occurred. Please try again later.' };
  }
  return { success: true, message: "You're In! Welcome aboard." };
};

// write me a function to check valid email
export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
