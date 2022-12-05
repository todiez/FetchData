const { Button } = ReactBootstrap;

const BreedButton = ({ breedChange, breedListOrigin }) => {
  const breedList = breedListOrigin.map((breed) => {
    return (
      <Button key={breed} onClick={breedChange}>
        {breed}
      </Button>
    );
  });

  return (
    <nav>
      <ul className="pagination">{breedList}</ul>
    </nav>
  );
};

function App() {
  const { useState, useEffect } = React;
  const { Container } = ReactBootstrap;
  const [breed, setBreed] = useState("beagle");
  const [breedList, setBreedList] = useState([
    "beagle",
    "african",
    "boxer",
    "retriever",
    "leonberg",
  ]);

  //get random image from breed
  useEffect(() => {
    const fetchData = async () => {
      try {
        const breedResult = await axios(
          `https://dog.ceo/api/breed/${breed}/images/random`
        );
        setBreed(breedResult.data.message);
      } catch (error) {
        console.log("basst scho");
      }
    };
    fetchData();
  }, [breed]);

  //get original breed list and pic random 4
  const trigger = () => {
    const breedListForWork = [];
    const breedListTemp = [];
    const fetchBreedList = async () => {
      try {
        const breedListOrigin = await axios(
          "https://dog.ceo/api/breeds/list/all"
        );
        //Object key to array
        for (var property in breedListOrigin.data.message) {
          breedListForWork.push(property);
        }
        //strip down complete array to 5 buttons
        for (let i = 0; i < 5; i++) {
          breedListTemp.push(breedListForWork[Math.floor(Math.random() * breedListForWork.length)]);
        }
        setBreedList(breedListTemp);
      } catch (error) {
        console.log("basst scho trigger");
      }
    };
    fetchBreedList();
  };

  const handleBreedChange = (e) => {
    setBreed(e.target.textContent);
  };

  return (
    <Container>
      <h1>Choose your favorite breed:</h1>
      <BreedButton
        breedChange={handleBreedChange}
        breedListOrigin={breedList}
      ></BreedButton>

      <input
        type="button"
        value="Randomize Breeds"
        onClick={(e) => trigger()}
      ></input>
      <br />
      <br />
      <div>
        <img src={breed}
        width="800"
        ></img>
      </div>
    </Container>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));
