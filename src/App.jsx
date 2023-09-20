import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  let [list, setList] = useState([]);
  let [item, setItem] = useState();
  const addToList = () => {
    setList((prev) => [...prev, item]);
  };
  const remove = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };
  const completed = (index) => {
    console.log(index);
  };
  return (
    <div>
      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element}</td>
                  <td>
                    <button
                      onClick={() => {
                        completed(index);
                      }}
                    >
                      Completed
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
      <h6>{item}</h6>
      <input
        onChange={(e) => {
          setItem(e.target.value);
        }}
        type="text"
        placeholder="item"
      />
      <button onClick={addToList}>updateList</button>
    </div>
  );
}

export default App;
