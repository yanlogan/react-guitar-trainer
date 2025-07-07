
import PianoKey from "../PianoKey/PianoKey.tsx";
import type {OctaveNote} from "../../types/pianoKeys";

type PianoOctaveProps = {
    pianoOctave: string
}

const PianoOctave = ({pianoOctave}: PianoOctaveProps) => {
    const octaveNotes: OctaveNote[] = [
        {
            pianoKey: "C",
            color: "white"
        },
        {
            pianoKey: "CisDes",
            color: "black"
        },
        {
            pianoKey: "D",
            color: "white"
        },
        {
            pianoKey: "DisEs",
            color: "black"
        },
        {
            pianoKey: "E",
            color: "white"
        },
        {
            pianoKey: "F",
            color: "white"
        },
        {
            pianoKey: "FisGes",
            color: "black"
        },
        {
            pianoKey: "G",
            color: "white"
        },
        {
            pianoKey: "GisAs",
            color: "black"
        },
        {
            pianoKey: "A",
            color: "white"
        },
        {
            pianoKey: "AisB",
            color: "black"
        },
        {
            pianoKey: "H",
            color: "white"
        }
    ];

    return (
        <div className="PianoOctave" data-piano-octave={pianoOctave}>
            {octaveNotes.map(({pianoKey, color}) => (
                <PianoKey key={pianoKey} pianoKey={pianoKey} color={color} showLabel={true}/>
            ))}
        </div>
    );
}

export default PianoOctave;