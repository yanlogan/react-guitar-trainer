import type {ReactNode} from "react";
import "./Container.scss";

type ContainerProps = {
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