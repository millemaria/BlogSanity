import Bar from "../Components/Bar/Bar";
import Footer from "src/Components/Bar/Footer/Footer";
import Heading from "src/Components/Bar/Heading/Heading";


const MainLayout = ({ children }) => {
    return (
      <>
        <header>
          <Bar />
          <Heading />
        </header>
        <main>{children}</main>
        <Footer />
      </>
    );
  };
  
  export default MainLayout;