import { Link } from '@inertiajs/inertia-react';

export default function SidebarLink({ href, active, children, method, as }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'relative flex items-center p-2 space-x-2 rounded-md cursor-pointer hover:bg-emerald-400 hover:text-white font-bold bg-emerald-400 text-lg'
                    : 'relative flex items-center p-2 space-x-2 rounded-md cursor-pointer hover:bg-emerald-400 hover:text-white font-bold'
            }
            method={method}
            as={as}
        >
            {children}
        </Link>
    );
}
