const { Button } = ReactBootstrap;

const BreedButton = () => {
  return <Button>Beagle</Button>;
};

function App() {
  const { useState, useEffect } = React;
  const { Container } = ReactBootstrap;
  const [imageUrl, setImageUrl] = useState("");
  const [breed, setBreed] = useState("beagle");
  const { Button } = ReactBootstrap;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://dog.ceo/api/breeds/image/random");
      //console.log(result);
      setImageUrl(result.data.message);
    };
    fetchData();
  }, []);

  const trigger = () => {
    const fetchData = async () => {
      const result = await axios("https://dog.ceo/api/breeds/image/random");
      //console.log(result);
      setImageUrl(result.data.message);
    };
    fetchData();
  };

  return (
    <Container>
      <div>
        <input
          type="button"
          value="Click me for Random Dog"
          onClick={(e) => trigger()}
        ></input>
        <p>{imageUrl}</p>
        <img src={imageUrl}></img>
      </div>
    </Container>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));
