import { memo } from "react";
import type { FC } from "react";

export interface IProps {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductsPage: FC<IProps> = (props) => {
  const {
    params: { slug },
    searchParams: { sortOrder },
  } = props;
  return (
    <div>
      ProductsPage: {slug} {sortOrder}
    </div>
  );
};
export default memo(ProductsPage);
