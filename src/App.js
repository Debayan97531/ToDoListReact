import "./styles.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import List from "./List.js";

export default function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = (e) => {
    console.log("current value", e.target.value);
    setCurrentItem(e.target.value);
  };
  const addItemToList = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
    console.log("list items", itemList);
    setCurrentItem("");
  };

  return (
    <div className="App">
      <div className="box">
        <div className="box-2">
          <h1>To Do List</h1>
          <input
            type="text"
            id="item"
            value={currentItem}
            onChange={onChangeHandler}
            autofocus
            placeholder="Enter task.."
          ></input>
          <button id="item2" onClick={addItemToList}>
            Add
          </button>
        </div>

        {/* <ul id="to-do-box">
          <li> */}
        {/* create a video */}
        {/* <FontAwesomeIcon icon="fa-solid fa-xmark" /> */}
        <List itemList={itemList} updateItemList={updateItemList} />
        {/* </li>
        </ul> */}
      </div>
    </div>
  );
}
