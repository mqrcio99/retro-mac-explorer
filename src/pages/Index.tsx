import { useState } from "react";
import { BootScreen } from "@/components/BootScreen";
import { Desktop } from "@/components/Desktop";

const Index = () => {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted ? (
        <BootScreen onBootComplete={() => setBooted(true)} />
      ) : (
        <Desktop />
      )}
    </>
  );
};

export default Index;
