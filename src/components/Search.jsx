const Search = ({ keywords, setKeywords }) => {
  return (
    <>
      <h1>😎 EmojiSearch 😎</h1>
      <input
        type="text"
        placeholder="What emoji are you looking for ?"
        name="question"
        onChange={(event) => {
          setKeywords(event.target.value);
        }}
        value={keywords}
      />
    </>
  );
};

export default Search;
