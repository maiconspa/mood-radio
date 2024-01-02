import styled from "styled-components";
import images from "../../utils/images.json"

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${images[0].url});
    background-size: cover;
    background-repeat: no-repeat;
`