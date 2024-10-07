import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const CatCard = ({ cat, index, deleteCat }) => {
  return (
    <Link to={`cats/${cat.id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={cat?.imgUrl}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${cat?.title} ${index}`}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {cat?.fact}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => deleteCat(cat.id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
};
