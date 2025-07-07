import "./PianoKeyboard.scss";
import PianoOctave from "../PianoOctave/PianoOctave.tsx";
const PianoKeyboard = () => {
    return (
        <div className="PianoKeyboard">
            <PianoOctave pianoOctave={"great"}/>
            <PianoOctave pianoOctave={"small"}/>
            <PianoOctave pianoOctave={"one-line"}/>
            <PianoOctave pianoOctave={"two-line"}/>
        </div>
    );
}

export default PianoKeyboard;