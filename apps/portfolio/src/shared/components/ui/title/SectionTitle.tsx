'use client';

import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export const SectionTitle = ({ label, icon: Icon, className }: SectionTitleProps) => (
  <div className={cn('flex items-center gap-3 text-xl font-semibold text-gray-900', className)}>
    {Icon && <Icon className="w-6 h-6 text-gray-700" />}
    <h2 className={cn('text-2xl font-semibold text-gray-800', className)}>{label}</h2>
  </div>
);
