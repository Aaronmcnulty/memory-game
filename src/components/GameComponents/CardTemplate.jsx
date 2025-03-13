function CardTemplate({
  pokemonCardDetails,
  setCurrentScore,
  currentScore,
  setGameResults,
}) {
  const handleCardClick = () => {
    if (pokemonCardDetails.isClicked != true) {
      setCurrentScore(currentScore + 1);
      pokemonCardDetails.isClicked = true;
    } else {
      setGameResults(true);
      console.log("game over");
    }
  };

  return (
    <>
      {pokemonCardDetails && (
        <div onClick={handleCardClick}>
          <p value={pokemonCardDetails.name}>{pokemonCardDetails.name}</p>
          <img width="50px" src={pokemonCardDetails.imageUrl}></img>
          <p>{pokemonCardDetails.type}</p>
        </div>
      )}
    </>
  );
}

export default CardTemplate;
