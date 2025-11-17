import { Button, Grid } from "@mui/material"

export default function QuickNav() {
    return (<>
        <Grid container alignSelf={"center"}>
            <Grid>
                <Button>
                    Projects
                </Button>
                <Button>
                    Contact Info
                </Button>
                <Button>
                    Experience
                </Button>
            </Grid>
        </Grid>
    </>);
}