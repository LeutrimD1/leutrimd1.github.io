import { styled } from "@mui/material"

const StyledContainer = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10%',
    marginRight: '10%',
    maxWidth: '100vw',
    overflowX: 'hidden',
    boxSizing: "border-box",
    minHeight: '100dvh',
    transform: 'translateZ(0)',
    WebkitOverflowScrolling: 'touch'
})

export default function Container({ children } : { children: React.ReactNode}) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}