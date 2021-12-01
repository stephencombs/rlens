import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <div className="flex justify-between items-center h-[60px] mx-4">
      <span className="bg-red-500 rounded-full p-5"></span>
      <SearchBar icon="search" type="text" id="search" placeholder="Search" />
      <ThemeToggle />
    </div>
  );
}
