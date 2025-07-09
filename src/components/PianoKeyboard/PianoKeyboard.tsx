import "./PianoKeyboard.scss";
import PianoOctave from "../PianoOctave/PianoOctave.tsx";
import type {Octave} from "../../types/pianoKeys.ts";

interface PianoKeyboardProps {
    showPianoKeyLabels?: boolean
}

const PianoKeyboard = ({showPianoKeyLabels = false}: PianoKeyboardProps) => {
    const octaves: Octave[] = [
        {octaveName: "great", octaveLabel: "Большая"},
        {octaveName: "small", octaveLabel: "Малая"},
        {octaveName: "one-line", octaveLabel: "Первая"},
        {octaveName: "two-line", octaveLabel: "Вторая"}
    ];

    return (
        <div className="PianoKeyboard">
            {octaves.map(({octaveName, octaveLabel}  ) => (
                <PianoOctave name={octaveName} label={octaveLabel} showPianoKeyLabels={showPianoKeyLabels}/>
            ))}
        </div>
    );
}

export default PianoKeyboard;