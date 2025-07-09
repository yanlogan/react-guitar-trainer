import AppHeader from "./components/AppHeader/AppHeader.tsx";
import AppFooter from "./components/AppFooter/AppFooter.tsx";
import PianoKeyboard from "./components/PianoKeyboard/PianoKeyboard.tsx";
import Container from "./layout/Container/Container.tsx";
import Button from "./components/Button/Button.tsx";
import {useState} from "react";

const App = () => {
    const name = 'Янчес'
    const [showPianoKeyLabels, setShowPianoKeyLabels] = useState(false);
    const [showOctaveLabels, setShowOctaveLabels] = useState(false);

    const toggleShowPianoKeyLabels = () => {
        if (showPianoKeyLabels) {
            setShowPianoKeyLabels(false)
        } else {
            setShowPianoKeyLabels(true)
        }
    }

    const toggleShowOctaveLabels = () => {
        if (showOctaveLabels) {
            setShowOctaveLabels(false)
        } else {
            setShowOctaveLabels(true)
        }
    }

    return (
        <>
            <AppHeader username={name}/>
            <main>
                <Container>
                    {/*<p>Выбери режим тренировки 🎯</p>*/}
                    {/*<div className="mode-switcher">*/}
                    {/*    <button className="btn btn-primary">Тренировка</button>*/}
                    {/*    <button className="btn btn-accent">Тест</button>*/}
                    {/*</div>*/}
                    <section className={"piano"}>
                        <h2>Клавиши фортепиано</h2>
                        <div className={"piano-controls"}>
                            {/*TODO: сделать это тогглером*/}
                            <Button title={"Показать обозначения нот"} handleClick={toggleShowPianoKeyLabels}/>
                            <Button title={"Показать названия октав"} handleClick={toggleShowOctaveLabels}/>
                        </div>
                        <PianoKeyboard showPianoKeyLabels={showPianoKeyLabels} showOctaveLabels={showOctaveLabels}/>
                    </section>
                    {/*<h2>Гитарный гриф</h2>*/}
                </Container>
            </main>
            <AppFooter/>
        </>
    )
}

export default App
