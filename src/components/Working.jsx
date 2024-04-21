function Working({primary,accent}) {
  return (
    <div id="work" style={{ color: primary, backgroundColor: accent }} className="flex flex-col items-center sm:flex-row px-12 py-8 sm:px-20 sm:py-16 gap-6 bg-teal-200">
  <div className="w-full sm:w-2/5 space-y-4">
    <span className="text-3xl font-bold">How Does it Work?</span>
    <p className="text-lg">You'll get your finalized color palette in 4 simple steps.</p>
  </div>
  <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8  w-full sm:w-3/5">
      <p className="text-lg">
      <span className="text-2xl font-bold mr-2">1</span> 
      Start with two neutral colors for the text and the background.</p>
      <p className="text-lg">
      <span className="text-2xl font-bold mr-2">2</span> 
      Choose your buttons. Primary is for main CTAs, and Secondary is for less important buttons and info cards.</p>
      <p className="text-lg">
      <span className="text-2xl font-bold mr-2">3</span> 
      Accent color is an additional color. It appears in images, highlights, hyperlinks, boxes, cards, etc. It can be the same as your third color (primary button) or another color.</p>
      <p className="text-lg">
      <span className="text-2xl font-bold mr-2">4</span> 
      Happy with the results? Press on “Export” and receive a .zip file with your color palette in .png and your color codes in .txt files.</p>
  </div>
</div>

  );
}

export default Working;
