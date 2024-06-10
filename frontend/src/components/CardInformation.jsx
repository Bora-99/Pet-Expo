import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

function CardInformation({ type, data }) {
  console.log(data);

  const [open, setOpen] = React.useState(false);
  const [infoType, setInfoType] = React.useState({});

  const handleClickOpen = (info) => {
    setInfoType(info);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      container
      sx={{
        padding: "40px",
        marginBottom: "60px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {data?.map((info) => (
        <Card
          key={info.id}
          sx={{
            maxWidth: 350,
            backgroundColor: "lightgrey",
            marginBottom: "30px",
            marginRight: "30px",
          }}
          onClick={() => handleClickOpen(info)}
        >
          <CardActionArea>
            <CardMedia component="img" image={info.image} alt={type} />{" "}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {info.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
      <Dialog
        onClose={() => handleClose()}
        open={open}
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "blur",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: "bold",
            fontSize: "30px",
            fontFamily: "sans-serif",
          }}
        >
          {infoType.name}
        </DialogTitle>
        <DialogContent>
          <Typography>LifeSpan :{infoType.lifespan}</Typography>
          <Typography>Origin :{infoType.origin}</Typography>
          <Typography> Size :{infoType.size}</Typography>
          <Typography>Temperament:{infoType.temperament}</Typography>
          <Typography>Colors:{infoType.colors}</Typography>
          <Typography sx={{ fontFamily: "cursive" }}>
            Description: {infoType.description}
          </Typography>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

export default CardInformation;
