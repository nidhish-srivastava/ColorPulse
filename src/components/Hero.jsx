import { useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color";
import Export from "./Icons/Export";
import Randomise from "./Icons/Randomise";
function Hero({
  secondary,
  setSecondary,
  primaryButton,
  setPrimaryButton,
  primary,
  setPrimary,
  accent,
  setAccent
}) {
  //   const [width, setWidth] = useState(window.innerWidth);
  const [secondaryButton, setSecondaryButton] = useState("#f2f2f2");

  const [showPicker, setShowPicker] = useState(false);
  const [selected, setSelected] = useState("");
  const [pickerPosition, setPickerPosition] = useState({ x: 0, y: 0 });

  const updateUrlParams = () => {
    const colorsParam = `${primary}-${secondary}-${primaryButton}-${secondaryButton}-${accent}`;
    const searchParams = new URLSearchParams(window.location.search);
    const filterHashtagColorParams = colorsParam.replace(/#/g, ""); // regex--> g means global,jha jha hai udhar se hta do #
    // while setting remove hashtag from hex color value
    searchParams.set("colors", filterHashtagColorParams);
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState(null, "", newUrl);
  };

  const colorSets = [
    {
      colors: ["#e9c46a", "#264653", "#e76f51", "#2a9d8f", "#e9c46a"],
    },

    {
      colors: ["#223d49", "#ffe08a", "#ac5039", "#fff0c7", "#2a9d8f"],
    },

    {
      colors: ["#f6f7f9", "#212428", "#00ff00", "#313130", "#00bb00"],
    },

    {
      colors: ["#0e101a", "#ffffff", "#0d8065", "#f0f2fc", "#aff2ea"],
      source: "<b>Inspiration:</b><br>Grammarly",
    },

    {
      colors: ["#1d3557", "#f1faee", "#e63946", "#a8dadc", "#457b9d"],
    },

    {
      colors: ["#f1faee", "#1d3557", "#a8dadc", "#06446a", "#ffc7cc"],
    },

    {
      colors: ["#fffbe5", "#000814", "#ffc300", "#001d3d", "#003566"],
    },

    {
      colors: ["#344e41", "#dad7cd", "#3a5a40", "#b5c49c", "#588157"],
    },

    {
      colors: ["#2b2d42", "#edf2f4", "#d90429", "#8d99ae", "#201f33"],
    },

    {
      colors: ["#212529", "#f8f9fa", "#343a40", "#e9ecef", "#adb5bd"],
    },

    {
      colors: ["#231942", "#ffebf5", "#5e548e", "#efd9f2", "#8d73b0"],
    },

    {
      colors: ["#ffffff", "#191919", "#405bff", "#212121", "#ebff38"],
      source: "<b>Inspiration:</b><br>LaunchDarkly",
    },

    {
      colors: ["#eeeeee", "#000000", "#44d62c", "#222222", "#ff9c07"],
    },

    {
      colors: ["#eeeeee", "#000000", "#44d62c", "#222222", "#44d62c"],
      source: "<b>Inspiration:</b><br>Razer",
    },

    {
      colors: ["#ff8bff", "#193718", "#ff8bff", "#5eaa67", "#e9ffe8"],
      source: "<b>Inspiration:</b><br>OpenAI ChatGPT",
    },

    {
      colors: ["#000000", "#ffffff", "#000000", "#f2f2f2", "#000000"],
    },

    {
      colors: ["#000000", "#ffffff", "#0049db", "#f2f2f2", "#ff6bc1"],
    },

    {
      colors: ["#0f1419", "#ffffff", "#1d9bf0", "#f7f7f7", "#8ecdf7"],
      source: "<b>Inspiration:</b><br>Twitter",
    },

    {
      colors: ["#0f1419", "#ffffff", "#ffd400", "#f2f2f2", "#ffe97f"],
    },

    {
      colors: ["#fbf5d4", "#0099ab", "#5a39d0", "#006374", "#2156c0"],
      source: "<b>Inspiration:</b><br>Retro 80s Nike Jacket",
    },

    {
      colors: ["#000000", "#e7e7d7", "#006338", "#deded0", "#006338"],
      source: "<b>Inspiration:</b><br>Retro 80s Nike Jacket",
    },

    {
      colors: ["#0f1419", "#ffffff", "#f91880", "#f2f2f2", "#fc8bbf"],
    },

    {
      colors: ["#0f1419", "#ffffff", "#8756FF", "#f2f2f2", "#bbaaff"],
    },

    {
      colors: ["#0f1419", "#ffffff", "#ff7a00", "#f2f2f2", "#ffbc7f"],
    },

    {
      colors: ["#0f1419", "#ffffff", "#00ba7c", "#f2f2f2", "#7fdcbd"],
    },

    {
      colors: ["#006374", "#fbf5d4", "#5a39d0", "#cbddca", "#5a39d0"],
    },

    {
      colors: ["#0e101a", "#ffffff", "#ff686b", "#fff6f5", "#84dcc6"],
    },

    {
      colors: ["#584b53", "#fef5ef", "#9d5c63", "#ffffff", "#e4bb97"],
    },

    {
      colors: ["#424b54", "#ffffff", "#9b6a6c", "#e6eaeb", "#e2b4bd"],
    },

    {
      colors: ["#ffffff", "#1f2041", "#ffc857", "#4b3f72", "#ffc857"],
    },

    {
      colors: ["#050505", "#ffffff", "#121212", "#f6f5f4", "#ffb600"],
      source: "<b>Inspiration:</b><br>Notion",
    },

    {
      colors: ["#ffffff", "#000000", "#9d34da", "#1a1a1a", "#bd73e8"],
      source: "<b>Inspiration:</b><br>Notion AI",
    },

    {
      colors: ["#2b1c50", "#ffffff", "#565add", "#d1d1f7", "#9f92ec"],
      source: "<b>Inspiration:</b><br>Loom",
    },

    {
      colors: ["#00031f", "#ffffff", "#0b5cff", "#ffffff", "#00ede7"],
      source: "<b>Inspiration:</b><br>Zoom",
    },

    {
      colors: ["#000000", "#ffffff", "#611f69", "#f4ede4", "#ecb22e"],
      source: "<b>Inspiration:</b><br>Slack",
    },

    {
      colors: ["#171a22", "#ffffff", "#ff622d", "#f7f7f7", "#421983"],
      source: "<b>Inspiration:</b><br>SEMRush",
    },

    {
      colors: ["#000000", "#9de2d4", "#e27d5f", "#95d6d2", "#d3bbc2"],
    },

    {
      colors: ["#fffbff", "#252cbb", "#ca3f66", "#2e35c2", "#ffccda"],
    },

    {
      colors: ["#ffffff", "#4887b0", "#fbeec1", "#3f7897", "#fbeec1"],
    },

    {
      colors: ["#05396b", "#5cdb94", "#edf5e0", "#8de4af", "#05396b"],
    },

    {
      colors: ["#fcfcfc", "#151515", "#f54c28", "#1b1918", "#689775"],
    },

    {
      colors: ["#5d5c61", "#b4c6da", "#557a95", "#d0dce7", "#7a747b"],
    },

    {
      colors: ["#2e1115", "#ffffff", "#4f1b1d", "#eaeff2", "#83687b"],
    },

    {
      colors: ["#fcfcfc", "#000000", "#4201ff", "#171717", "#230090"],
    },

    {
      colors: ["#e5fffd", "#0b0c12", "#66fcf1", "#202833", "#c5c6c8"],
    },

    {
      colors: ["#2c221e", "#e3e2de", "#e10243", "#e5d1d6", "#9b1750"],
    },

    {
      colors: ["#6c6b66", "#f1f0eb", "#f13c1f", "#fff8e5", "#4056a1"],
    },

    {
      colors: ["#d6d6d6", "#272727", "#10f49c", "#424242", "#ffe401"],
    },

    {
      colors: ["#fdfffe", "#2f4455", "#da7b93", "#376f70", "#2e151b"],
    },

    {
      colors: ["#646561", "#eae8dc", "#e85a50", "#e6e2cc", "#977d59"],
    },

    {
      colors: ["#ededed", "#222546", "#29658a", "#474866", "#d1d2d6"],
    },
  ];


  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const colorsParam = searchParams.get("colors");

    if (colorsParam) {
      const [primary, secondary, primaryButton, secondaryButton, accent] =
        colorsParam.split("-");
      // while getting again add hashtag
      setPrimary(() => `#${primary}`);
      setSecondary(() => `#${secondary}`);
      setPrimaryButton(() => `#${primaryButton}`);
      setSecondaryButton(() => `#${secondaryButton}`);
      setAccent(() => `#${accent}`);
    }
  }, []);

  useEffect(() => {
    updateUrlParams();
  }, [primary, secondary, primaryButton, secondaryButton, accent]);

  const clickHandler = (event, e) => {
    const buttonRect = event.target.getBoundingClientRect();
    const pickerX = buttonRect.left;
    const pickerY = buttonRect.top - 300; // Adjust this value for the picker's vertical offset
    setPickerPosition({ x: pickerX, y: pickerY });

    if (e == "Text") {
      setSelected(primary);
    }
    if (e == "Background") {
      setSelected(secondary);
    }
    if (e == "Primary Button") {
      setSelected(primaryButton);
    }
    if (e == "Secondary Button") {
      setSelected(secondaryButton);
    }
    if (e == "Accent") {
      setSelected(accent);
    }
    setShowPicker((prev) => !prev);
  };
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    };
  }
  
  const changeColorInPickerHandler = (e) => {
    let hex = e.hex;
    if (selected == primary) {
      setSelected(hex);
      setPrimary(hex);
    }
    if (selected == secondary) {
      setSelected(hex);
      setSecondary(hex);
    }
    if (selected == primaryButton) {
      setSelected(hex);
      setPrimaryButton(hex);
    }
    if (selected == secondaryButton) {
      setSelected(hex);
      setSecondaryButton(hex);
    }
    if (selected == accent) {
      setSelected(hex);
      setAccent(hex);
    }
  };
  const randomColorHandler = () => {
    setShowPicker(false);
    const randomValue = Math.round(Math.random() * colorSets.length);
    const arr = colorSets[randomValue].colors;
    setPrimary(arr[0]);
    setSecondary(arr[1]);
    setPrimaryButton(arr[2]);
    setSecondaryButton(arr[3]);
    setAccent(arr[4]);
  };
  return (
    <>
      <div className="flex flex-col-reverse justify-center gap-12 md:flex-row-reverse w-full sm:w-4/5 mx-auto">
        <div style={{ color: primary }} className="w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 652 644"
            fill="none"
            width={`552`}
            height={`544`}
            //   className={`w-${width}`}
          >
            <rect
              x="4.69366"
              y="4"
              width="643.306"
              height="636"
              rx="10"
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="5"
              y="4"
              width="154.827"
              height="70.282"
              rx="10"
              fill={secondaryButton}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="411"
              y="4"
              width="202"
              height="67"
              rx="10"
              fill={accent}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="411"
              y="72"
              width="202"
              height="167"
              rx="10"
              fill={accent}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="411"
              y="405"
              width="202"
              height="84"
              rx="10"
              fill={secondary}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="241"
              y="615"
              width="372"
              height="25"
              rx="10"
              fill={secondary}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="76"
              y="569"
              width="166"
              height="71"
              rx="10"
              fill={secondary}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="242"
              y="570"
              width="169"
              height="45"
              rx="10"
              fill={primary}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="242"
              y="489"
              width="169"
              height="81"
              rx="10"
              fill={secondaryButton}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="242"
              y="404"
              width="169"
              height="85"
              rx="10"
              fill={secondaryButton}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="75"
              y="72"
              width="336"
              height="333"
              rx="10"
              fill={primaryButton}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="76"
              y="405"
              width="166"
              height="165"
              rx="10"
              fill={primary}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              opacity="0.5"
              x="411"
              y="489"
              width="202"
              rx="10"
              height="126"
              fill={accent}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="613"
              y="489"
              width="35"
              height="151"
              rx="10"
              fill={primaryButton}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="411"
              y="238"
              width="103"
              height="167"
              rx="10"
              fill={secondary}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="514"
              y="238"
              width="99"
              height="167"
              rx="10"
              fill={secondary}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="613.206"
              y="4"
              width="34.7942"
              height="484.655"
              rx="10"
              fill={secondary}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="159.827"
              y="4"
              width="250.853"
              height="67.1507"
              rx="10"
              fill={secondary}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="5"
              y="72"
              width="71"
              height="167"
              rx="10"
              fill={secondary}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="5"
              y="238"
              width="71"
              height="251"
              rx="10"
              fill={secondaryButton}
              stroke={secondary}
              stroke-width="8"
            ></rect>
            <rect
              x="4.69366"
              y="487.261"
              width="71.3258"
              rx="10"
              height="152.739"
              fill={accent}
              stroke={secondary}
              stroke-width="8"
            ></rect>
          </svg>
        </div>
        <div
          style={{ color: primary }}
          className="md:w-1/2 px-12 flex flex-col gap-16 items-start w-full"
        >
          <h2 className="text-5xl font-bold">
            Test Your <span>Colors</span>
            <br />
            On a Real Website
          </h2>
          <p className="text-2xl">
            Choosing a color palette for your website? Use the Toolbar below to
            realize your choices.
          </p>
          <div className="flex space-x-4">
            <button
              className="px-8 py-4  text-[1.2rem] rounded-xl"
              style={{ backgroundColor: primaryButton }}
            >
              Get started
            </button>
            <button
              className="px-8 py-4 text-[1.2rem] rounded-xl"
              style={{ backgroundColor: secondaryButton }}
            >
              <a href="#work">
              How does it work
              </a>
            </button>
          </div>
        </div>
      </div>
      {showPicker && (
        <div
          className="fixed"
          style={{
            left: pickerPosition.x,
            top: pickerPosition.y,
          }}
        >
          <SketchPicker
            color={selected}
            disableAlpha
            onChange={changeColorInPickerHandler}
          />
        </div>
      )}
      <div
        style={{ color: primary }}
        className="flex gap-2 fixed bottom-10 justify-center z-100 bg-slate-400 bg-opacity-35 left-[20%] p-2 rounded-xl"
      >
        <button
          style={{ backgroundColor: secondary }}
          className="py-6 text-[1.1rem] bg-white rounded px-6"
          onClick={(e) => clickHandler(e, "Text")}
        >
          Text
        </button>
        <button
          style={{ backgroundColor: secondary }}
          className="py-6 text-[1.1rem] rounded px-6"
          onClick={(e) => clickHandler(e, "Background")}
        >
          Background
        </button>
        <button
          style={{ backgroundColor: primaryButton }}
          className="py-6 text-[1.1rem] rounded px-6"
          onClick={(e) => clickHandler(e, "Primary Button")}
        >
          Primary Button
        </button>
        <button
          style={{ backgroundColor: secondaryButton }}
          className="py-6 text-[1.1rem] rounded px-6"
          onClick={(e) => clickHandler(e, "Secondary Button")}
        >
          Secondary Button
        </button>
        <button
          style={{ backgroundColor: accent }}
          className="py-6 text-[1.1rem]  rounded px-6"
          onClick={(e) => clickHandler(e, "Accent")}
        >
          Accent
        </button>
        <button
          className="flex  gap-3 py-6 text-[1.1rem] bg-white text-black rounded px-6"
        >
          Export
          <span>
            <Export/>
          </span>
        </button>
        <button
          className="flex  gap-3 py-6 text-[1.1rem] bg-white text-black rounded px-6"
          onClick={randomColorHandler}
        >
          Randomise
          <span>
            <Randomise/>
          </span>
        </button>
      </div>
    </>
  );
}

export default Hero;
