import { Card, Row, Col, Divider, Input, Button } from "antd";
import './App.css';
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from "./components/FoodBox";
import Search from "./components/Search";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodsData, setFoodsData] = useState(foods)
  const [allFoods, setAllFoods] = useState(foods);

  function addFood(newFood){
    setFoodsData([...foodsData, newFood]);
    setAllFoods([...allFoods, newFood]);
  }

  function filterFoods(string){
    const filteredFoods = foodsData.filter((food)=>{

      if(string === "") return true;
      else return food.name.toLocaleLowerCase().includes(string.toLowerCase());
    })

    setAllFoods(filteredFoods);
  }

  function deleteFood(foodToBeDelete){
    const allFoodsCopy = allFoods.slice();
    delete allFoodsCopy[allFoodsCopy.indexOf(foodToBeDelete)];

    setFoodsData(allFoodsCopy);
    setAllFoods(allFoodsCopy);
  }

  return (
    <div className="App">
      <h1>Add Food Entry</h1>
      <AddFoodForm addFood={addFood}/>
      <br/>
      <h1>Search</h1>
      <Search filterFoods={filterFoods}/>
      <br/>
      <h1>Food List</h1>
      <section className="foods-section">
        {allFoods.map((food)=>{
          return (
            <FoodBox food={food} deleteFood={deleteFood}/>
          )
        })}
      </section>
    </div>
  );
}

export default App;
