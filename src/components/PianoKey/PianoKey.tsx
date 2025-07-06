type PianoKeyProps = {
    pianoKey: string,
    color: 'white' | 'black'
}

export const PianoKey = ({pianoKey, color}: PianoKeyProps) => {
    return (
        <div className={`piano-key piano-key--${color}`} data-piano-key={pianoKey}>{pianoKey}</div>
    );
}