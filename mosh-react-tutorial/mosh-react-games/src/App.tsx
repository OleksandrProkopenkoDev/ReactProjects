import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import ButtonComp from "./components/ButtonComponent";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Kyiv", "London", "Paris"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <Alert text="Hello world" /> */}
      <Alert onClose={() => {}}>
        Hello
        <span> World</span>
      </Alert>
      <ButtonComp type="btn btn-primary" caption="OK" />
      <br></br>

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>MyButton</Button>

      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      /> */}
    </div>
  );
}

export default App;
