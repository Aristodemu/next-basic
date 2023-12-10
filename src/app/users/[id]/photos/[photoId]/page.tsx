import { memo } from "react";
import type { FC } from "react";

interface IProps {
  params: { id: number; photoId: number };
}

const PhotoPage: FC<IProps> = (props) => {
  const {
    params: { id, photoId },
  } = props;
  return (
    <div>
      PhotoPage{id}
      {photoId}
    </div>
  );
};
export default memo(PhotoPage);
