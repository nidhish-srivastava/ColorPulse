import { useState } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";

const App = () => {
  const [primaryButton, setPrimaryButton] = useState("#4685ff");
  const [secondary, setSecondary] = useState("#ffffff");
  const [primary, setPrimary] = useState("#000000");

  return <main className={`w-full h-screen`} style={{backgroundColor : secondary}}>
    <div style={{color : primary}} className="flex justify-between items-center w-full sm:w-4/5 mx-auto">
    <h1  className="text-center font-bold text-5xl py-8">ColorPulse</h1>
    <button  className=" border-transparent text-2xl rounded-xl px-8 py-4" style={{backgroundColor : primaryButton}}>Contact Me</button>
    </div>
    <Hero primary={primary} setPrimary={setPrimary} secondary={secondary} setSecondary={setSecondary} primaryButton={primaryButton} setPrimaryButton={setPrimaryButton}/>
    {/* <div className="mt-24 py-24 pb-96 w-4/5 mx-auto"> */}
    {/* <Features backgroundColor={secondary} textColor={primary}/> */}
    {/* </div> */}
  </main>;
};

export default App;
