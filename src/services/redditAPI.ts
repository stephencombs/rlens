export const subredditNames = (query: string): Array<string> => {
  let response = [];

  fetch(
    `https://www.reddit.com/api/search_reddit_names.json?query=${query}&include_over_18=true`,
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      response = data.names;
    })
    .catch((e) => {
      console.error(e);
    });

  return response;
};
