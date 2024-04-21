import { useState } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Working from "./components/Working";
import Footer from "./components/Footer";

const App = () => {
  const [primaryButton, setPrimaryButton] = useState("#4685ff");
  const [secondary, setSecondary] = useState("#ffffff");
  const [primary, setPrimary] = useState("#000000");
  const [accent, setAccent] = useState("#ffb084");


  return <main className={`w-full`} style={{backgroundColor : secondary}}>
    <div style={{color : primary}} className="flex justify-between items-center w-full sm:w-4/5 mx-auto">
    <h1 className="font-montserrat text-center font-bold text-4xl py-8">ColorPulse</h1>
    <button  className=" border-transparent text-xl rounded-xl px-6 py-3" style={{backgroundColor : primaryButton}}>Contact Me</button>
    </div>
    <div className="mt-24 mb-[14rem]">
    <Hero accent={accent} setAccent={setAccent} primary={primary} setPrimary={setPrimary} secondary={secondary} setSecondary={setSecondary} primaryButton={primaryButton} setPrimaryButton={setPrimaryButton}/>
    </div>
    <div className="pb-24 w-[90%] sm:w-[70%] mx-auto">
    <Features primary={primary} secondary={secondary} primaryButton={primaryButton}/>
    </div>
    <div className="pb-24 w-[90%] sm:w-[70%] mx-auto">
      <Working primary={primary} accent={accent}/>
    </div>
    <Footer/>
  </main>;
};

export default App;
