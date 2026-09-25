import { Info, CircleCheck, TriangleAlert, OctagonAlert } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Status = 'primary' | 'info' | 'success' | 'warning' | 'danger';

export const statusIcons: Record<Status, LucideIcon> = {
  primary: Info,
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  danger: OctagonAlert,
};
