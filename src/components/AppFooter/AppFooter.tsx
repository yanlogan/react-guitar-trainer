import Container from "../../layout/Container/Container.tsx";

const AppFooter = () => {
    const startDate = new Date(2025, 6, 1);
    const now = new Date();
    const daysGone = Math.ceil((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    return (
        <footer>
            <Container>
                <p>Сколько дней этому проекту: {daysGone}</p>
                <p>Made with love © 2025. All rights reserved.</p>
            </Container>
        </footer>
    )
}

export default AppFooter;