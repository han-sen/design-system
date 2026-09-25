import { type ReactNode } from 'react';
import type { HTMLAttributes } from 'react';
import { badgeVariants } from './Badge.variants';
import { cn } from '../../lib/utils';
import type { VariantProps } from 'class-variance-authority';

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  /**
   * Text content for the badge
   */
  children: ReactNode;
}

/**
 * Badge component
 *
 * @example
 * <Badge variant="primary">Test</Badge>
 */

export const Badge = ({
  variant,
  children,
  className,
  ...props
}: BadgeProps) => {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </span>
  );
};
