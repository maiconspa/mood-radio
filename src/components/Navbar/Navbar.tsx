import { NavbarContainer } from "./Navbar.styled";
import MoodRadioIcon from "../../assets/images/mood-radio.png";
import {
  PauseFilled,
  PlayFilled,
  SkipBackFilled,
  SkipForwardFilled,
} from "@carbon/icons-react";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import mySound from "../../assets/audio/test.mp3";

function Navbar() {
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
  }, [isPlaying, playSound, soundData])

  return (
    <NavbarContainer>
      <div>
        <img src={MoodRadioIcon} alt="mood radio logo" />
        <p>mood radio</p>
      </div>

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
    </NavbarContainer>
  );
}

export default Navbar;
