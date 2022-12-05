const { Button } = ReactBootstrap;

const BreedButton = () => {

 
    return (
      <Button>Beagle</Button>
    );
  
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
  },[]);

  const trigger = () => {
    const fetchData = async () => {
      const result = await axios("https://dog.ceo/api/breeds/image/random");
      //console.log(result);
      setImageUrl(result.data.message);
    };
    fetchData();
  }


  useEffect(() => {
    const fetchData = async () => {
      console.log(breed);
      const breedResult = await axios(`https://dog.ceo/api/breed/${breed}/images/random`);
      console.log("inside breed: " + breedResult.data.message);
      setBreed(breedResult.data.message);
    };
    fetchData();
  },[]);

 // console.log("imgage:" + imageUrlBreed);

  return (
    
    <Container>
      <BreedButton></BreedButton>
      <div>
      <input type="button" value="Click me for Random Dog" onClick={(e) => trigger()}></input>
        <p>{imageUrl}</p>
        <img src={imageUrl}></img>
        <p>{breed}</p>
        <img src={breed}></img>
        
      </div>


    </Container>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));
