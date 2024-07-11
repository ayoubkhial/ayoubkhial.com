'use client';

import { useFormState } from 'react-dom';
import { addSubscriber } from './actions';

export default function SubscriptionForm() {
  const [formState, action] = useFormState(addSubscriber, {
    success: null,
    message: ''
  });
  let style = '';
  if (formState?.success != null && formState.success) {
    style = 'text-madang-500';
  } else if (formState?.success != null && !formState.success) {
    style = 'text-chablis-500';
  }
  return (
    <div>
      <form action={action}>
        <div className="mb-3 flex items-end">
          <div className="mb-3 flex w-full items-center">
            <div className="relative mr-3 w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="size-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                name="email"
                aria-label="Email Address"
                placeholder="Your email address..."
                required
                type="email"
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-blue-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
      {formState?.message && <p className={`mb-3 text-sm font-medium ${style}`}>{formState.message}</p>}
    </div>
  );
}
