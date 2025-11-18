import { Button, Grid } from "@mui/material"

export default function QuickNav() {
    return (<>
        <Grid container alignSelf={"center"}>
            <Grid>
                <Button href="#projects">
                    Projects
                </Button>
                <Button href="#experience">
                    Experience
                </Button>
                <Button href="#contact-info">
                    Contact Info
                </Button>
            </Grid>
        </Grid>
    </>);
}