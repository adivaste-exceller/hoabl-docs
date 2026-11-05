import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import { gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: (
        <>
          {/* The source logo is white on transparent, so invert it on the light theme. */}
          <Image
            src="/logo.png"
            alt="The House of Abhinandan Lodha"
            width={323}
            height={176}
            priority
            className="h-10 w-auto pl-1 invert dark:invert-0"
          />
          <span className="border-l-[1.5px] border-[#cdcdcd] pl-2 text-sm leading-tight">
            Tech
            <br />
            Documentation
          </span>
        </>
      ),
    },
    links: [
      { icon: <BookOpen />, text: 'Documentation', url: '/docs', active: 'nested-url' },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
