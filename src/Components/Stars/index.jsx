import { Container } from "./style";

import { MdStar, MdStarBorder } from "react-icons/md";

export function Stars(){
    return(
        <Container>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarBorder />
        </Container>
    )
}