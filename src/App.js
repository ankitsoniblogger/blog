import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./common.css";
import Card from "./components/Card";
import Button from "./components/Button";
import blogData from "./Data";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className="home_box px-5 lg:px-60 gap-4 ">
        {blogData.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            author={data.author}
            views={data.views}
            comments={data.comments}
          />
        ))}
      </div>
      <Button />
      <Footer />
    </>
  );
}

export default App;
