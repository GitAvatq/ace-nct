import { Sparkles } from "lucide-react";
import { ComponentType } from "react";

export const Badge = ({ title, icon: Icon }: { title: string, icon: ComponentType<any> }) => {
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                                  bg-gradient-to-r from-[#1C352D]/5 to-[#3D8D7A]/5 
                                  border border-[#3D8D7A]/10 dark:border-[#3D8D7A]/40 mb-6">
            <Icon className="w-4 h-4 text-[#3D8D7A]" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
                {title}
            </span>
        </div>);
};
