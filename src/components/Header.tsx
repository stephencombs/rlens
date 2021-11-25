import ButtonInput from './ButtonInput';

export default function Header() {
  return (
    <div className="flex items-center h-[60px] mx-4">
      <span className="bg-red-500 rounded-full p-5"></span>
      <div className="ml-auto">
        <ButtonInput
          icon="search"
          type="text"
          id="search"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
