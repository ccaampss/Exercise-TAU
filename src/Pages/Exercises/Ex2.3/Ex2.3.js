import { useState } from "react";
import { Styled } from "./Styled";
import { IoSend } from "react-icons/io5";
import { TbDice5Filled } from "react-icons/tb";
const Ex2_3Page = () => {
  const animals = ["Dog", "Cat", "Fish", "Elefant", "Bird", "Snake", "Lion"];

  const [name, setName] = useState("");
  const [type, setType] = useState(animals[0]);

  const sentences = [
    "You are such a good boy/girl!",
    "You are the cutest thing ever!",
    "You make me so happy!",
    "You are so smart and clever!",
    "You are my best friend!",
    "You have the most beautiful eyes!",
    "You are so brave and strong!",
    "You are the best cuddler in the world!",
    "You have the most adorable tail wag!",
    "You are so loyal and faithful!",
    "You are the best listener!",
    "You are so kind and loving!",
    "You are my best friend!",
  ];

  const randomElementFromArray = (array) => {
    const max = array.length;
    return array[Math.floor(Math.random() * max)];
  };

  const petNames = [
    "Buddy",
    "Max",
    "Charlie",
    "Bella",
    "Dama",
    "Canela",
    "Perro Sánchez",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomSentence = randomElementFromArray(sentences);
    const prompt = `To my ${type} ${name}: ${randomSentence} `;
    alert(prompt);
  };
  const handleGenerateName = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const randomName = randomElementFromArray(petNames);
    setName(randomName);
  };

  return (
    <div>
      <Styled onSubmit={handleSubmit}>
        <input
          className="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name of pet"
        />
        <button onClick={handleGenerateName}>
          <TbDice5Filled size={20} />
        </button>
        <select
          value={type}
          className="select"
          onChange={(e) => setType(e.target.value)}
        >
          {animals.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
        <button className="submit" type="submit">
          <IoSend />
        </button>
      </Styled>
    </div>
  );
};

export default Ex2_3Page;
