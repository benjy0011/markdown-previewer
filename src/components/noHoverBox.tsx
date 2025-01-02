import { Box, Typography } from "@mui/material";

function NoHoverBox( props: { header?: string, colorTheme?: "primary" | "secondary" | "success" | "error" | "info" | "warning" }) {
    const color = `${props.colorTheme || "primary"}.main`;
    return (
        <Box
            sx={{
                width: "100%",
                height: "30px",
                borderRadius: "2px",
                backgroundColor: color,
                ":hover": {
                    backgroundColor: color,
                },
                cursor: "default",
                fontWeight: "bold",
            }}
        >
            <Typography variant="h6" sx={{ fontWeight: "bold", marginLeft: "5px" }}>{props.header}</Typography>
        </Box>
    )
}

export default NoHoverBox;