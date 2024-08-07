import React, { useEffect, useState } from "react";

export default function Images() {
  const [images, setImages] = useState();
  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:5000/api/images");
      const res = await data.json();
      setImages(res?.data);
    })();
  }, []);
  const imagesArr = images?.map((image,index) => (
    <>
    {console.log(image)}
    <img width={"100px"} src={"http://localhost:5000"+image?.imagePath} key={index}/>
    </>
  ));
  return (
    <>
      <div>{imagesArr}</div>
    </>
  );
}
