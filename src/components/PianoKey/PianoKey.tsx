import "./PianoKey.scss";
import type {KeyColor, KeyLabel, KeyName} from "../../types/pianoKeys";

interface PianoKeyProps {
    pianoKey: KeyName,
    pianoKeyLabel: KeyLabel,
    color: KeyColor,
    showLabel?: boolean
}

const PianoKey = ({pianoKey, pianoKeyLabel, color, showLabel = false}: PianoKeyProps) => {
    return (
        <div className={`PianoKey PianoKey--${color}`} data-piano-key={pianoKey}>
            {showLabel ? (
                <span className="PianoKey__label">{pianoKeyLabel}</span>
            ) : null}
        </div>
    );
}

export default PianoKey;