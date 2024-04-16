const FeaturesArr = [
  {
    icon: "",
    label: "Saves time",
    description:
      "No need to spend hours implementing different variations of colors. Decide right away",
  },
  {
    icon: "",
    label: "It's Realistic",
    description:
      "Color Palettes make it hard to pick. This tool distributes the colors on a real website",
  },
  {
    icon: "",
    label: "It's Simple",
    description:
      "Push a few buttons,and there you have it! Your very own branding colors,ready to export",
  },
];

function Features({backgroundColor,textColor}) {
  return (
    <div style={{color:textColor}}>
      <h1 className="text-center text-5xl font-bold">Why ColorPulse?</h1>
      <div style={{backgroundColor : backgroundColor}} className="flex flex-col sm:flex-row gap-8">
        {FeaturesArr.map((e)=>(
            <FeatureCard icon={e.icon} label={e.label} description={e.description} backgroundColor={backgroundColor}/>
        ))}
      </div>
    </div>
  );
}

export default Features;

function FeatureCard({icon,label,description,backgroundColor}) {
    return(
        <div style={{opacity : .38,backgroundColor : backgroundColor}} className="bg-opacity-50">
            <div>
            <img src={icon} alt="" />
            </div>
            <h2>{label}</h2>
            <p>{description}</p>
        </div>
    )
}
