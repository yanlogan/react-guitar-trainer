import "./PianoKeyboard.scss";
import PianoOctave from "../PianoOctave/PianoOctave.tsx";

interface PianoKeyboardProps {
    showLabels?: boolean
}
const PianoKeyboard = ({showLabels = false}: PianoKeyboardProps) => {
    return (
        <div className="PianoKeyboard">
            <PianoOctave pianoOctave={"great"} showLabels={showLabels}/>
            <PianoOctave pianoOctave={"small"} showLabels={showLabels}/>
            <PianoOctave pianoOctave={"one-line"} showLabels={showLabels}/>
            <PianoOctave pianoOctave={"two-line"} showLabels={showLabels}/>
        </div>
    );
}

export default PianoKeyboard;