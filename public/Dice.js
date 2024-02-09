import React, { useState } from 'react';

const Dice = () => {
  const [diceImage, setDiceImage] = useState('./images/dice-empty.png');

  const rollDice = () => {
    // Display empty dice image
    setDiceImage('./images/dice-empty.png');

    // Generate a random dice value (1 to 6)
    const randomDiceValue = Math.floor(Math.random() * 6) + 1;

    // Wait 1 second before updating the dice image
    setTimeout(() => {
      setDiceImage(`./images/dice${randomDiceValue}.png`);
    }, 1000);
  };

  return (
    <div>
      <img src={diceImage} alt="Dice" onClick={rollDice} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default Dice;
