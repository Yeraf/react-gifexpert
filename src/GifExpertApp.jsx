import { useState } from "react";
import  AddCategory  from './Components/AddCategory';
import {GitGrid} from './Components';

function GifExpertApp() {
  const [categories, setCategories] = useState(["Dragon BALL"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <hr />
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      <hr />

      {categories.map((category) => (
        <GitGrid key={category} category={category} />
      ))}
    </>
  );
}

export default GifExpertApp;
