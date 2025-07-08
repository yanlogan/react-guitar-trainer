import "./PianoOctave.scss";
import PianoKey from "../PianoKey/PianoKey.tsx";
import type {OctaveNote} from "../../types/pianoKeys.ts";

interface PianoOctaveProps {
    pianoOctave: string,
    showLabels?: boolean
}

const PianoOctave = ({pianoOctave, showLabels = false}: PianoOctaveProps) => {
    const octaveNotes: OctaveNote[] = [
        {
            pianoKey: "C",
            pianoKeyLabel: "C",
            color: "white"
        },
        {
            pianoKey: "CisDes",
            pianoKeyLabel: "C# / D♭",
            color: "black"
        },
        {
            pianoKey: "D",
            pianoKeyLabel: "D",
            color: "white"
        },
        {
            pianoKey: "DisEs",
            pianoKeyLabel: "D# / E♭",
            color: "black"
        },
        {
            pianoKey: "E",
            pianoKeyLabel: "E",
            color: "white"
        },
        {
            pianoKey: "F",
            pianoKeyLabel: "F",
            color: "white"
        },
        {
            pianoKey: "FisGes",
            pianoKeyLabel: "F# / G♭",
            color: "black"
        },
        {
            pianoKey: "G",
            pianoKeyLabel: "G",
            color: "white"
        },
        {
            pianoKey: "GisAs",
            pianoKeyLabel: "G# / A♭",
            color: "black"
        },
        {
            pianoKey: "A",
            pianoKeyLabel: "A",
            color: "white"
        },
        {
            pianoKey: "AisB",
            pianoKeyLabel: "A# / B♭",
            color: "black"
        },
        {
            pianoKey: "H",
            pianoKeyLabel: "H",
            color: "white"
        }
    ];

    return (
        <div className="PianoOctave" data-piano-octave={pianoOctave}>
            {octaveNotes.map(({pianoKey, pianoKeyLabel, color}) => (
                <PianoKey key={pianoKey} pianoKey={pianoKey} pianoKeyLabel={pianoKeyLabel} color={color} showLabel={showLabels}/>
            ))}
        </div>
    );
}

export default PianoOctave;