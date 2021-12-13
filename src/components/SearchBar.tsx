import { useRef, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useOnClickOutside } from '../hooks/useOnClickOutside.js';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  position: relative;
  background: #fff;
  border-radius: 5px;
  box-shadow: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))
    drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06));
  width: 24rem;
  height: 2rem;
`;

const SearchBar = () => {
  const ref = useRef();
  const [input, setInput] = useState('');
  const [subreddits, setSubreddits] = useState([]);
  const [isExpanded, setExpanded] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setInput(value);

    fetch(
      `https://www.reddit.com/api/search_reddit_names.json?query=${input}&include_over_18=true`,
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSubreddits(data.names);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const expandContainer = () => {
    setExpanded(true);
  };

  const collapseContainer = () => {
    setExpanded(false);
  };

  useOnClickOutside(ref, collapseContainer);

  return (
    <SearchBarContainer ref={ref}>
      <div className="flex items-center w-full h-8">
        <input
          className="bg-transparent rounded-sm border-none outline-none transition-all px-2 w-full"
          type="text"
          placeholder="Search"
          onFocus={expandContainer}
          onChange={handleChange}
        />
        <IoSearch className="text-xl text-gray-500 select-none" />
      </div>
      {isExpanded && (
        <ul className="absolute bg-white rounded-sm drop-shadow overflow-y-auto w-full max-h-32">
          {subreddits.length > 0 ? (
            subreddits.map((name, index) => (
              <li
                className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                key={index}
              >
                <a href={`r/${name}.astro`}>{name}</a>
              </li>
            ))
          ) : (
            <li key="-999">No results</li>
          )}
        </ul>
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;
