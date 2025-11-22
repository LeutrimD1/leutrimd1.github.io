import styled from "@emotion/styled";
import { Box, Typography, List, ListItem } from "@mui/material";

const Container = styled("div")({
    textAlign: "center"
});

export default function Experience() {
    return (
        <Container>
            <Box id="experience" sx={{ mt: 4 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Experience
                </Typography>

                {/* Paycom — Software Developer IV */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" fontWeight="bold">
                        Software Developer IV — Paycom
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        Feb 2023 – Nov 2025
                    </Typography>

                    <List dense sx={{ textAlign: "center" }}>
                        <ListItem>
                            <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", mb: 2 }}>
                                Built near real-time update systems for Paycom’s Mission Control Indicators,
                                serving 3,000+ daily users and processing tens of thousands of daily requests
                                using RabbitMQ, JavaScript, PHP, and WebSockets.
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", mb: 2 }}>
                                Developed a React + Redux chatbot UI integrated with Paycom’s internal LLM,
                                collaborating closely with the Data Science team to connect and refine model data flows.
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", mb: 2 }}>
                                Led architectural design for a customizable dashboard system utilizing Highcharts,
                                enabling dynamic user-built analytics dashboards.
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", mb: 2 }}>
                                Directed the modernization of legacy MVC pages into Slim and Laravel–based frameworks,
                                improving performance, structure, and long-term maintainability.
                            </Typography>
                        </ListItem>
                    </List>
                </Box>

                {/* Paycom — Software Developer III */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" fontWeight="bold">
                        Software Developer III — Paycom
                    </Typography>

                    <List dense sx={{ textAlign: "center" }}>
                        <ListItem>
                            <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", mb: 2 }}>
                                Mentored junior developers in API design, debugging strategies,
                                React development, and backend business logic patterns.
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", mb: 2 }}>
                                Performed high-quality code reviews to ensure consistency, clarity,
                                and adherence to engineering best practices.
                            </Typography>
                        </ListItem>
                    </List>
                </Box>

                {/* Paycom — Software Developer II */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" fontWeight="bold">
                        Software Developer II — Paycom
                    </Typography>

                    <List dense sx={{ textAlign: "center" }}>
                        <ListItem>
                            <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", mb: 2 }}>
                                Delivered production features across React, PHP, and SQL with a focus on clarity,
                                user experience, and performance.
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", mb: 2 }}>
                                Wrote unit tests using PHP PEST to ensure reliability and reduce regression.
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", mb: 2 }}>
                                Refactored high-traffic SQL queries to significantly reduce execution time
                                and improve application responsiveness.
                            </Typography>
                        </ListItem>
                    </List>
                </Box>

                {/* CG Infinity */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" fontWeight="bold">
                        Software Developer — CG Infinity
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        Oct 2021 – Feb 2023
                    </Typography>

                    <List dense sx={{ textAlign: "center" }}>
                        <ListItem>
                            <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", mb: 2 }}>
                                Contracted to Brinks Home to design and develop an ASP.NET Core API
                                for receiving Medallia survey results and storing them in SQL Server.
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", mb: 2 }}>
                                Automated survey intake, reducing manual processing and accelerating customer feedback workflows.
                            </Typography>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Container>
    );
}
