import Container from "../../layout/Container/Container.tsx";

type AppHeaderProps = {
    username: string
}

const AppHeader = ({username}: AppHeaderProps) => {
    return (
        <header>
            <Container>
                <h1>— 🎸 Guitar Trainer —</h1>
                <p>Привет, {username}!</p>
            </Container>
        </header>
    )
}

export default AppHeader;