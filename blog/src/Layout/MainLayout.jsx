import Bar from "../Components/Bar/Bar";
import Footer from 'src/Components/Footer/Footer';
import Heading from 'src/Components/Heading/Heading';


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