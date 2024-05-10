import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

const TileComponent = ({ imageSrc, githubLink, title, description }) => {
  return (
    <Card>
      <CardMedia component="img" alt="Tile Image" image={imageSrc} />
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={githubLink} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Link>
      </CardActions>
    </Card>
  );
};

export default TileComponent;
