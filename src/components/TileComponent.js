import {
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";

const TileComponent = ({ githubLink, title, description }) => {
  return (
    <Card>
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
