import { useState } from "react";
import { BootScreen } from "@/components/BootScreen";
import { Desktop } from "@/components/Desktop";
import { MacintoshFrame } from "@/components/MacintoshFrame";

const Index = () => {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted ? (
        <BootScreen onBootComplete={() => setBooted(true)} />
      ) : (
        <MacintoshFrame>
          <Desktop />
        </MacintoshFrame>
      )}
    </>
  );
};

export default Index;
