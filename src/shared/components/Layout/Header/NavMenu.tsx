import Link from 'next/link';

interface NavMenuProps {
  navItems: { name: string; href: string }[];
}

export default function NavMenu({ navItems }: NavMenuProps) {
  return (
    <nav className="hidden items-center space-x-6 md:flex">
      {navItems.map(item => (
        <Link
          key={item.name}
          href={item.href}
          className="text-gray-700 transition hover:text-primary dark:text-gray-300"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
