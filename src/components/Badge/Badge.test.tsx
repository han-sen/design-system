import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders a badge variant', () => {
    render(<Badge variant="danger">Test</Badge>);

    expect(screen.getByText('Test')).toHaveClass('bg-danger');
  });
});
