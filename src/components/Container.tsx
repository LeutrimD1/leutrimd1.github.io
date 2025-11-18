import { styled } from "@mui/material"

const StyledContainer = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10%',
    marginRight: '10%',
    overscrollBehavior: 'none',  // Prevents overscroll
    WebkitOverflowScrolling: 'touch',
    overflowX: 'hidden'
})

export default function Container({ children } : { children: React.ReactNode}) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}