import "./PianoKeyboard.scss";
import PianoOctave from "../PianoOctave/PianoOctave.tsx";
import type {Octave} from "../../types/pianoKeys.ts";

interface PianoKeyboardProps {
    showLabels?: boolean
}

const PianoKeyboard = ({showLabels = false}: PianoKeyboardProps) => {
    const octaves: Octave[] = [
        {octaveName: "great", octaveLabel: "Большая"},
        {octaveName: "small", octaveLabel: "Малая"},
        {octaveName: "one-line", octaveLabel: "Первая"},
        {octaveName: "two-line", octaveLabel: "Вторая"}
    ];

    return (
        <div className="PianoKeyboard">
            {octaves.map(({octaveName, octaveLabel}  ) => (
                <PianoOctave name={octaveName} label={octaveLabel} showLabels={showLabels}/>
            ))}
        </div>
    );
}

export default PianoKeyboard;