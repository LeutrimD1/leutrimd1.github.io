import { styled } from "@mui/material"

const StyledContainer = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10%',
    marginRight: '10%',
    maxWidth: '100vw',
    overflowX: 'hidden',
    boxSizing: "border-box"
})

export default function Container({ children } : { children: React.ReactNode}) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}