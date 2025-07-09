import "./PianoOctave.scss";
import PianoKey from "../PianoKey/PianoKey.tsx";
import type {OctaveLabel, OctaveName, OctaveNote} from "../../types/pianoKeys.ts";

interface PianoOctaveProps {
    name: OctaveName,
    label: OctaveLabel,
    showPianoKeyLabels?: boolean,
    showLabel?: boolean
}

const PianoOctave = ({name, label, showPianoKeyLabels = false, showLabel = false}: PianoOctaveProps) => {
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
        <div className="PianoOctave" data-piano-octave={name}>
            {showLabel && <div className="PianoOctave__label">{label}</div>}
            <div className="PianoOctave__wrapper">
                {octaveNotes.map(({pianoKey, pianoKeyLabel, color}) => (
                    <PianoKey key={pianoKey} pianoKey={pianoKey} pianoKeyLabel={pianoKeyLabel} color={color} showLabel={showPianoKeyLabels}/>
                ))}
            </div>
        </div>
    );
}

export default PianoOctave;