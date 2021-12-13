import { useDarkMode } from '../hooks/useDarkMode.js';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="flex items-center justify-center">
      <label
        htmlFor="toggleButton"
        className="flex items-center cursor-pointer"
      >
        <div className="relative">
          <input
            type="checkbox"
            checked={isDark}
            id="toggleButton"
            className="sr-only"
            onChange={(e) => setIsDark(e.target.checked)}
          />
          <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
          <div className="dot absolute bg-white left-1 top-1 w-4 h-4 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
