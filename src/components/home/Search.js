import { useEffect, useState } from "react";

function Search(props) {
  const [images, setImages] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&per_page=12&query=${props.name}&client_id=CPvH3kNA3Cb8sEer7VIuw69ErSVYws3yyh-RDSs7myg`
      );
      if (!response.ok) {
        throw new Error("There is an error");
      }
      const data = await response.json();
      // console.log(data);
      const results = data.results.map((result) => {
        return {
          id: result.id,
          alt: result.alt_description,
          src: result.urls.small,
        };
      });
      setImages(results);
       console.log( "hj: "+ results);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, [props.name]);
  
  return (
    <div>
      <h1>{props.name} Images</h1>
      <div className="images-container">
        {images.map((image) => (
          <div className="images-container__image" key={image.id}>
            <img
            src={image.src}
            alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
