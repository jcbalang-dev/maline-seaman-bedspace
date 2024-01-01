import { useEffect } from "react";
import { useRouter } from "next/router";

const SplashListener = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/systems/hms/login");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      router.push("/systems/hms/login");
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClick);

    document.body.addEventListener("keypress", handleKeyPress);

    return () => {
      document.body.removeEventListener("click", handleClick);
      document.body.removeEventListener("keypress", handleKeyPress);
    };
  }, []);
};

export default SplashListener;
