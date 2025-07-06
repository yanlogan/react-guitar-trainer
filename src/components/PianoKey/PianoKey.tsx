type PianoKeyProps = {
    pianoKey: string,
    color: 'white' | 'black'
}

const PianoKey = ({pianoKey, color}: PianoKeyProps) => {
    return (
        <div className={`PianoKey PianoKey--${color}`} data-piano-key={pianoKey}>{pianoKey}</div>
    );
}

export default PianoKey;