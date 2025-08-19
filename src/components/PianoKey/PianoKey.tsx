import "./PianoKey.scss";
import type {KeyColor, KeyLabel, KeyName, OctaveName} from "../../types/pianoKeys";
import {useRef, useState} from "react";

interface PianoKeyProps {
    pianoKey: KeyName,
    octaveName: OctaveName,
    pianoKeyLabel: KeyLabel,
    color: KeyColor,
    showLabel?: boolean
}

const PianoKey = ({pianoKey, octaveName, pianoKeyLabel, color, showLabel = false}: PianoKeyProps) => {
    const [active, setActive] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleKeyClick = () => {
        if (!audioRef.current) return;

        setActive(true);
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.play();

        setTimeout(() => {
            setActive(false);
        }, 500);
    }

    return (
        <>
            <audio id={`piano_${octaveName}_${pianoKey}`} src={`./audio/piano/piano_${octaveName}_${pianoKey}.mp3`} ref={audioRef}></audio>
            <div className={`PianoKey PianoKey--${color}${active ? ' PianoKey--active' : ''}`} data-piano-key={`piano_${octaveName}_${pianoKey}`} onClick={handleKeyClick}>
                {showLabel ? (
                    <span className="PianoKey__label">{pianoKeyLabel}</span>
                ) : null}
            </div>
        </>
    );
}

export default PianoKey;