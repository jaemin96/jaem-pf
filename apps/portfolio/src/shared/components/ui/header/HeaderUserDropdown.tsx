import * as React from 'react';
import { User } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger } from '@shared/components/ui/dropdown';

export const HeaderUserDropdown: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 rounded px-2 py-1 text-white hover:bg-gray-700 transition">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black">
            <User className="w-4 h-4" />
          </div>

          <div className="flex-col items-start hidden md:flex">
            <span className="text-sm font-medium">Administrator</span>
            <span className="text-xs text-gray-400">System Administrator</span>
          </div>
        </div>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};
