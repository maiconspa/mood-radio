import { useEffect, useState } from "react";
import useSound from "use-sound";
import mySound from "../../assets/audio/test.mp3";
import { ControlbarContainer } from "./Controlbar.styled";
import { PauseFilled, PlayFilled, SkipBackFilled, SkipForwardFilled } from "@carbon/icons-react";

function Controlbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playSound, soundData] = useSound(mySound);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      playSound();
    } else {
      soundData.stop();
    }
  }, [isPlaying, playSound, soundData]);

  return <ControlbarContainer>
    <div>
        <button>
          <SkipBackFilled />
        </button>

        <button onClick={() => handlePlay()}>
          {isPlaying ? <PauseFilled /> : <PlayFilled/> }
        </button>

        <button>
          <SkipForwardFilled />
        </button>
      </div>
  </ControlbarContainer>;
}

export default Controlbar;
