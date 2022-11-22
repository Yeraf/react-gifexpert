import { useState } from "react";

function AddCategory({onNewCategory}) {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <=1) return;
    // console.log(inputValue);
    // setCategories( categories => [inputValue, ...categories])
    setInputValue('')
    onNewCategory(inputValue.trim())
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}

export default AddCategory;
