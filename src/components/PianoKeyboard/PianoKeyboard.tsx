import "./PianoKeyboard.scss";
import PianoOctave from "../PianoOctave/PianoOctave.tsx";
import type {Octave} from "../../types/pianoKeys.ts";

interface PianoKeyboardProps {
    showPianoKeyLabels?: boolean,
    showOctaveLabels?: boolean
}

const PianoKeyboard = ({showPianoKeyLabels = false, showOctaveLabels = false}: PianoKeyboardProps) => {
    const octaves: Octave[] = [
        {octaveName: "G", octaveLabel: "Большая"},
        {octaveName: "S", octaveLabel: "Малая"},
        {octaveName: "1L", octaveLabel: "Первая"},
        {octaveName: "2L", octaveLabel: "Вторая"}
    ];

    return (
        <div className="PianoKeyboard">
            {octaves.map(({octaveName, octaveLabel}  ) => (
                <PianoOctave key={octaveName} name={octaveName} label={octaveLabel} showPianoKeyLabels={showPianoKeyLabels} showLabel={showOctaveLabels}/>
            ))}
        </div>
    );
}

export default PianoKeyboard;