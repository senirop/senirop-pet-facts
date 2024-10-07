import { useParams } from "react-router-dom";

export const CatDetail = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};
