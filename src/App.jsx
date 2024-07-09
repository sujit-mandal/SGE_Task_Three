import Contact_Us_Form from "./Component/Contact_Us_Form";
import Contact_Us_Map from "./Component/Contact_Us_Map";
import Contact_Us_Accordion from "./Component/Contact_Us_Accordion";
import Blog_Single_Blog from "./Component/Blog_Single_Blog";
import Latest_Blogs from "./Component/Latest_Blogs";
import Footer from "./Component/Footer";
import Subscribe from "./Component/Subscribe";
import Study from "./Component/Study";

function App() {
  return (
    <div>
      {/* <Contact_Us_Form />
      <Contact_Us_Map />
      <Contact_Us_Accordion />
      <Blog_Single_Blog /> */}
      <Latest_Blogs />
      <Subscribe />
      <Study />
      <Footer />
    </div>
  );
}

export default App;
