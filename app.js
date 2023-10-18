
import { animals } from "./animals";
import { React } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const showBackground = true ;
const background = showBackground &&  (<img class="background" alt="ocean" src="'./images/ocean.jpg'" />)
;
const root = createRoot(container);

const title = "";
const images = [];

for (const animal in animals){
  const image = (
      <img 
    key= {animal} 
    className = "animal"
    alt = {animal}
    src = {animals[animal].image}
    aria-label = {animal}
    role = "button"
    onClick = {displayFact}
    />
  );
  images.push(image);
}
  
const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {background}
    <div className = "animals">{images}</div>
    <p id = "fact"></p>
  </div>
);

root.render(animalFacts);

function displayFact(e) {
  let selectedAnimal = e.target.alt ;
  let random = Math.floor(Math.random()* animals[selectedAnimal].facts.length);
  let funFact = animals[selectedAnimal].facts[random];
  let fact = document.getElementById('fact');

  fact.innerHTML = funFact ;

}