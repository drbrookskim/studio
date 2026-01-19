'use client';

import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              &copy; {year} Planning Lens. All rights reserved.
            </p>
          </div>
          <nav className="flex space-x-4">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/editor"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Write
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
