import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  NextPageLink,
  PreviousPageLink,
  ResponsivePaginationContainer,
  StyledPagination,
  StyledResponsivePagination,
} from "./styles";
import { useWindowSize } from "hooks";

interface PaginationProps {
  page: string;
  total: string;
}

export const Pagination = ({ page, total }: PaginationProps) => {
  const { width = 0 } = useWindowSize();
  const mediaSize = width >= 481;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(+total / itemsPerPage);
  const actualTotalPages = totalPages < 100 ? totalPages : 99;

  const navigate = useNavigate();

  const handlePageClick = (page: number) => {
    navigate(`../${page}`, { relative: "path" });
  };
  return (
    <StyledPagination>
      <PreviousPageLink to={`../${+page - 1}`} relative="path" $isActive={+page > 1 ? true : false}>
        <ArrowLeft />
        {mediaSize && "Prev"}
      </PreviousPageLink>
      <ResponsivePaginationContainer>
        <StyledResponsivePagination
          current={+page}
          total={actualTotalPages}
          onPageChange={handlePageClick}
          renderNav={false}
        />
      </ResponsivePaginationContainer>
      <NextPageLink
        to={`../${+page + 1}`}
        relative="path"
        $isActive={+page < actualTotalPages ? true : false}
      >
        {mediaSize && "Next"}
        <ArrowRight />
      </NextPageLink>
    </StyledPagination>
  );
};
