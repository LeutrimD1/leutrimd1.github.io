import styled from "@emotion/styled"

const Container = styled("div")({
    textAlign: "center"
});

export default function AboutMe() {
    return (
        <>
            <Container>
                <p>
                    I'm Leutrim, a Full Stack Developer building creative 
                    and scalable web applications.
                </p>
                <p>
                    I'm currently working at Paycom LLC on an internal 
                    CRM application using PHP, React/Redux, and C#.
                </p>
                <p>
                    When I'm not outside touching grass, I like to 
                    develop personal projects that benefit myself and others.
                </p>
            </Container>
        </>
    );
}