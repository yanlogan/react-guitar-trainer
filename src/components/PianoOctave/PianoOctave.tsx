import {PianoKey} from "../PianoKey/PianoKey.tsx";

type PianoOctaveProps = {
    pianoOctave: string
}

type OctaveNote = {
    pianoKey: string
    color: 'white' | 'black'
}

export const PianoOctave = ({pianoOctave}: PianoOctaveProps) => {
    const octaveNotes: OctaveNote[] = [
        {
            pianoKey: "C",
            color: "white"
        },
        {
            pianoKey: "CisDes",
            color: "black"} ,
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
        <div className="piano-octave" data-piano-octave={pianoOctave}>
            {octaveNotes.map(({pianoKey, color}) => (
                <PianoKey key={pianoKey} pianoKey={pianoKey} color={color}/>
            ))}
        </div>
    );
}