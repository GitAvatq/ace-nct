import Link from 'next/link';
import { ComponentType } from 'react';

interface IContactButtonProps {
    title: string
    icon: ComponentType<any>,
    href: string
}

export const ContactButton = ({ title, icon: Icon, href }: IContactButtonProps) => (
    <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className='inline-flex items-center gap-2 mt-4 bg-white/80 hover:bg-white/50 transition-colors px-4 py-2 rounded-lg text-sm'
    >
        <span><Icon /></span>
        <span>{title}</span>
    </Link>
)