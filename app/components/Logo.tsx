import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.svg"
        alt="AI Red Packet"
        width={32}
        height={32}
        className="dark:invert"
      />
      <span className="font-bold text-xl">AI红包封面</span>
    </Link>
  );
} 