import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from 'lucide-react';
import logo from '../assets/Logo.png';
import { Button } from '../components/Button';
import { useState } from 'react';

export const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`flex gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? 'hidden' : 'flex'}`}
      >
        <Button variant="ghost" size="icon">
          <Menu></Menu>
        </Button>
        <a href="/">
          <img src={logo} alt="" className="h-6" />
        </a>
      </div>
      <form
        className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? 'flex' : 'hidden md:flex'}`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => {
              setShowFullWidthSearch(false);
            }}
            type="button"
            size="icon"
            variant="ghost"
            className="
        flex-shrink-0"
          >
            <ArrowLeft></ArrowLeft>
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border flex-shrink-0">
            <Search></Search>
          </Button>
        </div>
        <Button type="button" size="icon">
          <Mic></Mic>
        </Button>
      </form>
      <div
        className={`flex-nowrap flex-shrink-0 md:gap-2 ${showFullWidthSearch ? 'hidden' : 'flex'}`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Search></Search>
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Mic></Mic>
        </Button>
        <Button variant="ghost" size="icon">
          <Upload></Upload>
        </Button>
        <Button variant="ghost" size="icon">
          <Bell></Bell>
        </Button>
        <Button variant="ghost" size="icon">
          <User></User>
        </Button>
      </div>
    </div>
  );
};
