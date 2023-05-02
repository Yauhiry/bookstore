import {
  Button,
  DetailItem,
  Header,
  PageLoader,
  StarsRating,
  SubscribeForm,
  Tabs,
} from "components";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  setCartItem,
  fetchBookDetails,
  selectBookDetails,
  useAppDispatch,
  useAppSelector,
  selectFavorites,
  selectUser,
} from "store";
import {
  BookDetails,
  StyledBookPage,
  Image,
  BookInfo,
  PriceWrapper,
  Price,
  DetailsList,
  StyledDropdownChevronIcon,
  MoreWrapper,
  MoreButton,
  Container,
  ImageWrapper,
  FavoriteButton,
  StyledFavoritesIcon,
  HiddenDetailItems,
} from "./styles";
import { useToggle } from "hooks";
import { removeFavorite, setFavorite } from "store/features/favoritesSlice";
import { ROUTE } from "router";
import { AnimatePresence } from "framer-motion";

export const BookPage = () => {
  const { isAuth } = useAppSelector(selectUser);
  const { book, isLoading } = useAppSelector(selectBookDetails);
  const { favorites } = useAppSelector(selectFavorites);
  const { isbn13 } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isMoreDetails, toggleMoreDetails] = useToggle();
  const { title, image, rating, price, authors, publisher, language, year, pages, desc } = book;
  const isAddedFavotite = favorites.some((item) => item.isbn13 === book.isbn13);

  const handleAddToCart = () => {
    dispatch(setCartItem(book));
  };
  const handleFavorite = () => {
    isAuth
      ? isAddedFavotite
        ? dispatch(removeFavorite(book.isbn13))
        : dispatch(setFavorite(book))
      : navigate(ROUTE.SIGN_IN);
  };

  useEffect(() => {
    isbn13 && dispatch(fetchBookDetails({ isbn13 }));
  }, [dispatch, isbn13]);

  if (isLoading === "idle" || isLoading === "pending") {
    return <PageLoader />;
  }
  return (
    <StyledBookPage>
      <Header title={title} />
      <Container>
        <BookDetails>
          <ImageWrapper>
            <Image src={image} />
            <FavoriteButton onClick={handleFavorite}>
              <StyledFavoritesIcon $isActive={isAuth && isAddedFavotite} />
            </FavoriteButton>
          </ImageWrapper>

          <BookInfo>
            <DetailsList>
              <PriceWrapper>
                <Price>{price}</Price>
                <StarsRating rating={rating} />
              </PriceWrapper>
              <DetailItem name="Authors" value={authors} />
              <DetailItem name="Publisher" value={publisher} />
              <DetailItem name="Language" value={language} />
              <DetailItem name="Format" value="Paper book / ebook (PDF)" />
              <AnimatePresence>
                {isMoreDetails && (
                  <HiddenDetailItems
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <DetailItem name="Year" value={year} />
                    <DetailItem name="Pages" value={pages} />
                  </HiddenDetailItems>
                )}
              </AnimatePresence>
              <MoreWrapper>
                {isMoreDetails ? (
                  <MoreButton onClick={toggleMoreDetails}>
                    Less detailse
                    <StyledDropdownChevronIcon style={{ transform: "rotate(180deg)" }} />
                  </MoreButton>
                ) : (
                  <MoreButton onClick={toggleMoreDetails}>
                    More detailse
                    <StyledDropdownChevronIcon />
                  </MoreButton>
                )}
              </MoreWrapper>
            </DetailsList>
            <Button type="button" text="Add to cart" onClick={handleAddToCart} />
          </BookInfo>
        </BookDetails>
        <Tabs description={desc} authors={authors} />
        <SubscribeForm />
      </Container>
    </StyledBookPage>
  );
};
