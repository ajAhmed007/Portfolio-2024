import Navbar from "./scenes/Navbar"
import { useState } from "react";
import useMediaQuery from "./hooks/userMediaQuery";
function App() {
  const [selectedPage, setSelectePage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="app bg-deep-blue">
      <Navbar
      selectedPage={selectedPage} setSelectePage={selectedPage}
      />
    </div>
  );
}

export default App;
