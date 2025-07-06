type AppHeaderProps = {
    username: string
}

export const AppHeader = ({username}: AppHeaderProps) => {
    return (
        <header>
            <h1>— 🎸 Guitar Trainer —</h1>
            <p>Привет, {username}!</p>
        </header>
    )
}