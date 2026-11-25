import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { NewsletterForm } from '@/components/site/newsletter-form';

afterEach(cleanup);

describe('NewsletterForm', () => {
  it('rejects an invalid email address', () => {
    render(<NewsletterForm />);

    const input = screen.getByLabelText('Email address');
    fireEvent.change(input, { target: { value: 'not-an-email' } });
    fireEvent.click(screen.getByRole('button', { name: 'Join the list' }));

    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('status')).toHaveTextContent('valid email address');
  });

  it('confirms a valid subscription and clears the field', () => {
    render(<NewsletterForm />);

    const input = screen.getByLabelText('Email address');
    fireEvent.change(input, { target: { value: 'hello@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: 'Join the list' }));

    expect(input).toHaveValue('');
    expect(screen.getByRole('status')).toHaveTextContent('you are on the list');
  });
});
