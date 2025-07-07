export type KeyColor = 'white' | 'black';

export type KeyName = 'C' | 'CisDes' | 'D' | 'DisEs' | 'E' | 'F' | 'FisGes' | 'G' | 'GisAs' | 'A' | 'AisB' | 'H';

export type KeyLabel = 'C' | 'C# / D♭' | 'D' | 'D# / E♭' | 'E' | 'F' | 'F# / G♭' | 'G' | 'G# / A♭' | 'A' | 'A# / B♭' | 'H';

export type OctaveNote = {
    pianoKey: KeyName;
    pianoKeyLabel: KeyLabel;
    color: KeyColor;
};