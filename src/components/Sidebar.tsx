import { Clapperboard, Home, Library, Repeat } from 'lucide-react';
import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonStyles } from './Button';

export const Sidebar = () => {
  return (
    <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
      <SmallSidebarItem Icon={Home} title="Home" url="/"></SmallSidebarItem>
      <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts"></SmallSidebarItem>
      <SmallSidebarItem
        Icon={Clapperboard}
        title="Subscriptions"
        url="/subscriptions"
      ></SmallSidebarItem>
      <SmallSidebarItem Icon={Library} title="Library" url="/library"></SmallSidebarItem>
    </aside>
  );
};

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

export const SmallSidebarItem = ({ Icon, title, url }: SmallSidebarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: 'ghost' }),
        'py-4 px-1 flex flex-col items-center rounded-lg gap-1'
      )}
    >
      <Icon className="size-6"></Icon>
      <div className="text-sm">{title}</div>
    </a>
  );
};
