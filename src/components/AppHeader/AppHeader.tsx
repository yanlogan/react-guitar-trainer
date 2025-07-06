type AppHeaderProps = {
    username: string
}

const AppHeader = ({username}: AppHeaderProps) => {
    return (
        <header>
            <h1>— 🎸 Guitar Trainer —</h1>
            <p>Привет, {username}!</p>
        </header>
    )
}

export default AppHeader;