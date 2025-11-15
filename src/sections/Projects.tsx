import styled from "@emotion/styled"
import { Button, Card, CardActions, CardContent, CardMedia } from "@mui/material"
import todoGif from '/Todo-list-gif-demo.gif';

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
                    image={todoGif}
                />
                <CardContent>
                    My personal to-do list app. I host the Nodejs API server at home and have a DNS CNAME record that points to the public repo for the frontend. 
                </CardContent>
                <CardActions>
                    <Button>
                        Go to Repo
                    </Button>
                    <Button>
                        Go to live demo
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