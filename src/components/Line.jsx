const Line = ({ data, keywords }) => {
  const getDisplayData = () => {
    if (keywords === "") {
      return data.slice(0, 20);
    } else {
      return data.filter(
        (elem) =>
          elem.keywords.toLowerCase().includes(keywords.toLowerCase()) ||
          elem.title.toLowerCase().includes(keywords.toLowerCase())
      );
    }
  };

  const displayData = getDisplayData();

  const copyEmoji = (emoji) => {
    navigator.clipboard
      .writeText(emoji)
      .then(() => {
        alert("Emoji copié !");
      })
      .catch((err) => {
        console.error("Erreur lors de la copie :", err);
      });
  };

  return (
    <>
      {displayData.map((elem) => {
        return (
          <div
            className="line"
            key={elem.title}
            onClick={() => copyEmoji(elem.symbol)}
          >
            <span className="symbol">
              {elem.symbol} {elem.title}
            </span>
            <span className="display">Click to copy !</span>
          </div>
        );
      })}
    </>
  );
};

export default Line;
