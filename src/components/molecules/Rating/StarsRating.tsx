import { StyledFillStarIcon, StyledEmptyStarIcon, StyledRating } from "./styles";

interface StarsRatingProps {
  rating: string;
}

export const StarsRating = ({ rating }: StarsRatingProps) => {
  return (
    <StyledRating
      fillIcon={<StyledFillStarIcon />}
      emptyIcon={<StyledEmptyStarIcon />}
      iconsCount={5}
      readonly={true}
      initialValue={+rating}
    />
  );
};
