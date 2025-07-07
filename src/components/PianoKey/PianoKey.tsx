import type {KeyColor, KeyName} from "../../types/pianoKeys";

type PianoKeyProps = {
    pianoKey: KeyName,
    color: KeyColor,
    showLabel?: boolean
}

const PianoKey = ({pianoKey, color, showLabel = false}: PianoKeyProps) => {
    return (
        <div className={`PianoKey PianoKey--${color}`} data-piano-key={pianoKey}>{showLabel ? pianoKey : null}</div>
    );
}

export default PianoKey;