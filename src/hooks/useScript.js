import { useEffect } from "react";

const useScript = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("src", url);
    head.appendChild(script);
    // script.src = src;
    // script.crossOrigin = crossOrigin;
    // script.type = "type/javascript";
    // script.async = true;
    // script.onload = () => this.scriptLoaded();

    // document.body.appendChild(script);
    return () => {
      head.removeChild(script);
      // document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
