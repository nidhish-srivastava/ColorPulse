import Time from "../components/Icons/Time";
import Realistic from "../components/Icons/Realistic";
import Simple from "./Icons/Simple";

function Features({ primary, secondary, primaryButton }) {
  const FeaturesArr = [
    {
      icon: (
        <Time
          primary={primary}
          secondary={secondary}
          primaryButton={primaryButton}
        />
      ),
      label: "Saves time",
      description:
        "No need to spend hours implementing different variations of colors. Decide right away",
    },
    {
      icon: (
        <Realistic
          primary={primary}
          secondary={secondary}
          primaryButton={primaryButton}
        />
      ),
      label: "It's Realistic",
      description:
        "Color Palettes make it hard to pick. This tool distributes the colors on a real website",
    },
    {
      icon: <Simple primary={primary} primaryButton={primaryButton} />,
      label: "It's Simple",
      description:
        "Push a few buttons,and there you have it! Your very own branding colors,ready to export",
    },
  ];
  return (
    <>
      <h1 className="text-center text-4xl font-bold">Why ColorPulse?</h1>
      <div className="flex flex-col sm:flex-row gap-8 mt-12">
        {FeaturesArr.map((e) => (
          <FeatureCard
            icon={e.icon}
            label={e.label}
            description={e.description}
            primary={primary}
          />
        ))}
      </div>
    </>
  );
}

export default Features;

function FeatureCard({ icon, label, description,primary }) {
  return (
    <div style={{color : primary}} className="bg-gray-200 rounded-xl justify-between flex flex-col items-center gap-4 px-4 py-6">
      <div>{icon}</div>
      <h2 className="text-2xl font-medium">{label}</h2>
      <p>{description}</p>
    </div>
  );
}
