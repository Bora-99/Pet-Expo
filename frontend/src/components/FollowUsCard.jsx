import { Box, Card, CardHeader, Paper, Typography } from "@mui/material";
import React from "react";
import { appList } from "../../lists/appList";
  
  
export default function FollowCard({ title, subheader, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box
        sx={ {
          p: 1,
          gap: 2,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        {appList.map((site) => (
          <Paper
            key={site.name}
            variant="outlined"
            sx={{ py: 2.5, textAlign: "center", borderStyle: "dashed" }}
          >
            <Box sx={{ mb: 0.5 }}>
              <img width={40} src={site.image} />
            </Box>

            <Typography variant="h6">{site.value}</Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {site.name}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Card>
  );
}
