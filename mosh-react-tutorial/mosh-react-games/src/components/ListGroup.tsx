import { useState } from "react";

//{items: [], heading : string}
interface ListGroupProps {
  items: string[];
  heading: string;
  //(item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // let items = ["New York", "San Francisco", "Kyiv", "London", "Paris"];
  //   let selectedIndex = 0;
  //Hook  is a function that allows to use built in features in react
  //   const arr = useState(-1);
  //   arr[0]; // variable (selected index)
  //   arr[1]; // updater function
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //event handler
  const handleClick = (event: MouseEvent) => console.log("Clicked " + event);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
