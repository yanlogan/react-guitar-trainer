import "./PianoKey.scss";
import type {KeyColor, KeyLabel, KeyName} from "../../types/pianoKeys";

type PianoKeyProps = {
    pianoKey: KeyName,
    pianoKeyLabel: KeyLabel,
    color: KeyColor,
    showLabel?: boolean
}

const PianoKey = ({pianoKey, pianoKeyLabel, color, showLabel = false}: PianoKeyProps) => {
    return (
        <div className={`PianoKey PianoKey--${color}`} data-piano-key={pianoKey}>{showLabel ? pianoKeyLabel : null}</div>
    );
}

export default PianoKey;