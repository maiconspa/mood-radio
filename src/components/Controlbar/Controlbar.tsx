import { useEffect, useState } from "react";
import useSound from "use-sound";
import { ControlbarContainer } from "./Controlbar.styled";
import {
  PauseFilled,
  PlayFilled,
  SkipBackFilled,
  SkipForwardFilled,
  VolumeDown,
  VolumeDownFilled,
  VolumeUpFilled,
} from "@carbon/icons-react";
import musics from "../../utils/musics.json";

const AUDIO_FOLDER = "../../assets/audio/";
const INITIAL_AUDIO = require("../../assets/audio/" + musics[0].name + ".mp3");
const INITIAL_AUDIO2 = require("../../assets/audio/" + musics[1].name + ".mp3");

console.log(INITIAL_AUDIO)

function Controlbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [musicIndex, setMusicIndex] = useState(0);
  const [play, { stop }] = useSound(INITIAL_AUDIO, {
    volume: volume,
  });

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      stop();
    }
  }, [isPlaying, play, stop]);

  useEffect(() => {
    if (musicIndex !== 0) {
        stop();
        const next_audio = require("../../assets/audio/" + musics[1].name + ".mp3"); // TODO: arrumar esse cara
        console.log(INITIAL_AUDIO2)
        play({id: next_audio})
    }
  }, [musicIndex, play, stop])

  const handleVolume = (action: string) => {
    if (action === "down" && volume > 0) setVolume(volume - 0.1);

    if (action === "up" && volume < 1) setVolume(volume + 0.1);
  };

  const handleSkipMusic = (action: string) => {
    if (action === "next" && musics?.[musicIndex + 1])
      setMusicIndex(musicIndex + 1);
  };

  return (
    <ControlbarContainer>
      <div>
        <button>
          <SkipBackFilled />
        </button>

        <button onClick={() => handlePlay()}>
          {isPlaying ? <PauseFilled /> : <PlayFilled />}
        </button>

        <button onClick={() => handleSkipMusic("next")}>
          <SkipForwardFilled />
        </button>

        <button onClick={() => handleVolume("down")}>
          <VolumeDownFilled />
        </button>

        <button onClick={() => handleVolume("up")}>
          <VolumeUpFilled />
        </button>
      </div>
    </ControlbarContainer>
  );
}

export default Controlbar;
