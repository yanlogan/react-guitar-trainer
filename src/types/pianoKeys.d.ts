export type KeyColor = 'white' | 'black';

export type KeyName = 'C' | 'CisDes' | 'D' | 'DisEs' | 'E' | 'F' | 'FisGes' | 'G' | 'GisAs' | 'A' | 'AisB' | 'H';

export type OctaveNote = {
    pianoKey: KeyName;
    color: KeyColor;
};