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
      <form className="flex flex-col flex-wrap items-center gap-2 xs:flex-row" action={action}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="What should I call you?"
          className="rounded-sm border border-solitude-200 bg-solitude-100 px-2 py-1 text-solitude-900 transition-colors duration-300 placeholder:text-slate-500 hover:border-solitude-300 dark:border-solitude-700 dark:bg-solitude-800 dark:text-solitude-200 dark:placeholder:text-slate-300 dark:hover:border-solitude-600"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="What's your email?"
          className="rounded-sm border border-solitude-200 bg-solitude-100 px-2 py-1 text-solitude-900 transition-colors duration-300 placeholder:text-slate-500 hover:border-solitude-300 dark:border-solitude-700 dark:bg-solitude-800 dark:text-solitude-200 dark:placeholder:text-slate-300 dark:hover:border-solitude-600 md:basis-96"
          required
        />
        <button
          type="submit"
          className="group rounded border border-solitude-200 bg-solitude-100 px-2 py-1 transition-colors duration-300 hover:border-solitude-300 dark:border-solitude-700 dark:bg-solitude-900 dark:hover:border-solitude-600"
        >
          <span className="text-sm font-medium text-solitude-900 dark:text-solitude-300">Subscribe</span>
        </button>
      </form>
      {formState?.message && <p className={`mt-4 text-sm font-medium ${style}`}>{formState.message}</p>}
    </div>
  );
}
