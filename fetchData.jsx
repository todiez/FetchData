function App() {
  const { useState, useEffect } = React;
  const { Container } = ReactBootstrap;
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://dog.ceo/api/breeds/image/random");
      console.log(result);
      setImageUrl(result.data.message);
    };
    fetchData();
  }, []);

  console.log("imgage:" + imageUrl);

  return (
    <Container>
      <div>
        <p>{imageUrl}</p>
        <img src={imageUrl}></img>
      </div>
    </Container>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));
