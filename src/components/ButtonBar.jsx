import Export from "./Icons/Export"
import Randomise from "./Icons/Randomise"

function ButtonBar({secondary,primaryButton,secondaryButton,accent,clickHandler,randomColorHandler,exportzipHandler}) {
  return (
    <>
    <button
      style={{ backgroundColor: secondary }}
      className="sm:py-6 py-4 text-[1.1rem] bg-white rounded px-6"
      onClick={(e) => clickHandler(e, "Text")}
    >
      Text
    </button>
    <button
      style={{ backgroundColor: secondary }}
      className="sm:py-6 py-4 text-[1.1rem] rounded px-6"
      onClick={(e) => clickHandler(e, "Background")}
    >
      Background
    </button>
    <button
      style={{ backgroundColor: primaryButton }}
      className="sm:py-6 py-4 text-[1.1rem] rounded px-6"
      onClick={(e) => clickHandler(e, "Primary Button")}
    >
      Primary Button
    </button>
    <button
      style={{ backgroundColor: secondaryButton }}
      className="sm:py-6 py-4 text-[1.1rem] rounded px-6"
      onClick={(e) => clickHandler(e, "Secondary Button")}
    >
      Secondary Button
    </button>
    <button
      style={{ backgroundColor: accent }}
      className="sm:py-6 py-4 text-[1.1rem]  rounded px-6"
      onClick={(e) => clickHandler(e, "Accent")}
    >
      Accent
    </button>
    <button
      onClick={exportzipHandler}
      className="flex  gap-3 sm:py-6 py-4 justify-center text-[1.1rem] bg-white text-black rounded px-6"
    >
      Export
      <span>
        <Export />
      </span>
    </button>
    <button
      className="flex sm:px-4 gap-3 justify-center sm:py-6 py-4 text-[1.1rem] bg-white text-black rounded"
      onClick={randomColorHandler}
    >
      Randomise
      <span>
        <Randomise />
      </span>
    </button>
  </>
  )
}

export default ButtonBar