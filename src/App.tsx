import AppHeader from "./components/AppHeader/AppHeader.tsx";
import AppFooter from "./components/AppFooter/AppFooter.tsx";
import PianoKeyboard from "./components/PianoKeyboard/PianoKeyboard.tsx";

const App = () => {
    const name = 'Янчес'
    return (
        <>
            <AppHeader username={name}/>
            {/*<p>Выбери режим тренировки 🎯</p>*/}
            {/*<div className="mode-switcher">*/}
            {/*    <button className="btn btn-primary">Тренировка</button>*/}
            {/*    <button className="btn btn-accent">Тест</button>*/}
            {/*</div>*/}
            <h2>Клавиши фортепиано</h2>
            <PianoKeyboard/>
            {/*<h2>Гитарный гриф</h2>*/}
            <AppFooter/>
        </>
    )
}

export default App
