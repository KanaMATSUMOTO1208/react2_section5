import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to="page1/detailA">detailA</Link>
      <br />
      <Link to="page1/detailB">detailB</Link>
    </div>
  );
};
