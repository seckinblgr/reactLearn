import "./tailwind.css"
import Button from "./components/Button";

function App() {
let name = "Seçkin"
let surname = "Bulgur"

  return (
   <main>
    <Button variant ="default">Default</Button>
    <Button variant ="success">Success</Button>
    <Button variant ="danger">Danger</Button>
    <Button variant ="warning">Warning</Button>

    <h1>{name}, {surname.toLocaleUpperCase()}</h1>
   </main>
    
  );
}

export default App;
