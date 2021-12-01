import { useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';

const SearchBar = ({ icon, type, id, placeholder, ...props }) => {
  const [input, setInput] = useState('');
  const [subreddits, setSubreddits] = useState([]);

  const handleSubmit = () => {
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

  const handleInput = ({ target: { value } }) => {
    setInput(value);
  };

  return (
    <div></div>
  );
};

export default SearchBar;
