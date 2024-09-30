import { Grid } from "react-loader-spinner";

const Loader = () => {
  return (
    <h2>
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </h2>
  );
};

export default Loader;
