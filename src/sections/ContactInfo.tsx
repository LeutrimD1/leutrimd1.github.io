import { GitHub, LinkedIn, Email, Phone } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Divider, Grid, Link, Typography } from "@mui/material";

const ContactInfoCard = ({ icon, title, link, linkValue }: { icon: any, title: string, link: string, linkValue: string }) => {
    return (<Card>
        <CardHeader
            avatar={
                icon
            }
            title={
                <Typography align="center">
                    {title}
                </Typography>
            }
        />
        <Divider />
        <CardContent>
            <Link
                href={linkValue}
                variant="body1"
            >{link}</Link>
        </CardContent>
    </Card>)
}

export default function ContactInfo() {
    return (<>
        <Grid id="contact-info" container alignSelf={"center"} spacing={"2em"} sx={{ padding: '10px 0px 10px 0px' }}>
            <ContactInfoCard
                icon={<GitHub />}
                title="GitHub"
                link="https://github.com/LeutrimD1"
                linkValue="https://github.com/LeutrimD1" />
            <ContactInfoCard
                icon={<LinkedIn />}
                title="LinkedIn"
                link="https://www.linkedin.com/in/leutrim-dema-82bb78220"
                linkValue="https://www.linkedin.com/in/leutrim-dema-82bb78220" />
            <ContactInfoCard
                icon={<Email />}
                title="Email"
                link="LeutrimD1@gmail.com"
                linkValue="mailto:leutrimD1@gmail.com" />
            <ContactInfoCard
                icon={<Phone />}
                title="Phone"
                link={"682-558-9208"}
                linkValue="tel:+6825589208" />
        </Grid>
    </>);
}