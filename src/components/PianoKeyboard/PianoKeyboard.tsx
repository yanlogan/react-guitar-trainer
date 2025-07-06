import {PianoOctave} from "../PianoOctave/PianoOctave.tsx";

export const PianoKeyboard = () => {
    return (
        <div className="piano">
            <PianoOctave pianoOctave={"great"}/>
            <PianoOctave pianoOctave={"small"}/>
            <PianoOctave pianoOctave={"one-line"}/>
            <PianoOctave pianoOctave={"two-line"}/>
        </div>
    );
}