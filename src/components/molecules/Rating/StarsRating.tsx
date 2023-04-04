import { Rating } from "react-simple-star-rating";
import { StyledFillStarIcon, StyledEmptyStarIcon } from "./styles";

interface StarsRatingProps {
  rating: string;
}

export const StarsRating = ({ rating }: StarsRatingProps) => {
  return (
    <Rating
      style={{ display: "flex", gap: "8px" }}
      fillIcon={<StyledFillStarIcon />}
      emptyIcon={<StyledEmptyStarIcon />}
      iconsCount={5}
      readonly={true}
      initialValue={+rating}
    />
  );
};
