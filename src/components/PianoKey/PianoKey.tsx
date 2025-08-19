import "./PianoKey.scss";
import type {KeyColor, KeyLabel, KeyName, OctaveName} from "../../types/pianoKeys";

interface PianoKeyProps {
    pianoKey: KeyName,
    octaveName: OctaveName,
    pianoKeyLabel: KeyLabel,
    color: KeyColor,
    showLabel?: boolean
}

const PianoKey = ({pianoKey, octaveName, pianoKeyLabel, color, showLabel = false}: PianoKeyProps) => {
    return (
        <div className={`PianoKey PianoKey--${color}`} data-piano-key={`piano_${octaveName}_${pianoKey}`}>
            {showLabel ? (
                <span className="PianoKey__label">{pianoKeyLabel}</span>
            ) : null}
        </div>
    );
}

export default PianoKey;