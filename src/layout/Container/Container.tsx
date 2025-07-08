import type {ReactNode} from "react";
import "./Container.scss";

interface ContainerProps {
    children: ReactNode
}

const Container = ({children}: ContainerProps) => {
    return (
        <div className="Container">
            {children}
        </div>
    )
}

export default Container;