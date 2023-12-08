import { useContext } from "react";
import Card from "../UI/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

export default function MeetupItem(props) {
  const FavoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = FavoritesCtx.itemIsFavorite(props.id);

  const toggleFavoriteHandler = () => {
    if (itemIsFavorite) {
      FavoritesCtx.removeFavorite(props.id);
    } else {
      FavoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}>{itemIsFavorite ? "Remove from favorites": "Add to favorites"}</button>
        </div>
      </Card>
    </li>
  );
}
