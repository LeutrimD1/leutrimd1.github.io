import styled from "@emotion/styled"
import { Button, Card, CardActions, CardContent, CardMedia } from "@mui/material"

const Container = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: "1rem"  // Adds spacing between cards
});

const StyledCard = styled(Card)({
    flex: "1 1 calc(50% - 1rem)",
    minWidth: "300px",  
    maxWidth: "500px" 
});

export default function Projects() {
    return (
        <Container>
            <StyledCard>
                <CardMedia
                    component={"img"}
                    image="https://picsum.photos/200/200"
                />
                <CardContent>
                    Project 1
                </CardContent>
                <CardActions>
                    <Button>
                        Go to 
                    </Button>
                </CardActions>
            </StyledCard>
            <StyledCard>
                <CardMedia
                    component={"img"}
                    image="https://picsum.photos/200/200"
                />
                <CardContent>
                    Project 2
                </CardContent>
                <CardActions>
                    <Button>
                        Go to 
                    </Button>
                </CardActions>
            </StyledCard>
        </Container>
    )
}