import DarkLuxury from "./themes/DarkLuxury";
import MinimalClean from "./themes/MinimalClean";
import AfroFuturiste from "./themes/AfroFuturiste";

export default function Preview({ config }) {
  const renderTheme = () => {
    switch (config.theme) {
      case "dark-luxury":
        return <DarkLuxury config={config} />;
      case "minimal-clean":
        return <MinimalClean config={config} />;
      case "afro-futuriste":
        return <AfroFuturiste config={config} />;
      default:
        return <DarkLuxury config={config} />;
    }
  };

  return (
    <div className="w-full h-full relative flex items-center justify-center p-4 lg:p-10">
      {/* Phone Mockup Container */}
      <div className="w-full max-w-[400px] h-[850px] max-h-full bg-black rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border-[8px] border-[#222] relative overflow-hidden flex flex-col">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
          <div className="w-40 h-6 bg-[#222] rounded-b-3xl"></div>
        </div>
        
        {/* Screen Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar relative w-full h-full bg-black">
          {renderTheme()}
        </div>
      </div>
    </div>
  );
}
