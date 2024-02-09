import React, { useState } from 'react';

const Dice = () => {
  const [diceImage, setDiceImage] = useState('./dice-empty.png');

  const rollDice = () => {
    // Display empty dice image
    setDiceImage('./dice-empty.png');

    // Generate a random dice value (1 to 6)
    const randomDiceValue = Math.floor(Math.random() * 6) + 1;

    // Wait 1 second before updating the dice image
    setTimeout(() => {
      setDiceImage(`./dice${randomDiceValue}.png`);
    }, 1000);
  };

  return (
    <div className='dice'>
      <img src={diceImage} alt="Dice" onClick={rollDice}/>
    </div>
  );
};

export default Dice;
