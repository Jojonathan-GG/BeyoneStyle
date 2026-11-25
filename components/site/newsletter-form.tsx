'use client';

import { useState, type FormEvent } from 'react';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'error' | 'success';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!emailPattern.test(email.trim())) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setEmail('');
  }

  return (
    <form className={cn('mt-6', className)} onSubmit={handleSubmit} noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== 'idle') setStatus('idle');
          }}
          placeholder="Email address"
          aria-invalid={status === 'error'}
          aria-describedby="newsletter-status"
          className="field"
        />
        <button type="submit" className="button-primary shrink-0">
          Join the list
        </button>
      </div>
      <p
        id="newsletter-status"
        role="status"
        className={cn(
          'mt-3 text-small',
          status === 'error' ? 'text-ink' : 'text-ink-subtle',
        )}
      >
        {status === 'error'
          ? 'Please enter a valid email address.'
          : status === 'success'
            ? 'Thank you — you are on the list.'
            : 'One letter a month. Unsubscribe any time.'}
      </p>
    </form>
  );
}
