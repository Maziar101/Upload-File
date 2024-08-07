import React, { useState } from "react";

export default function Upload() {
  const [filename, setFileName] = useState("");
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    if (filename && file) {
      const formData = new FormData();
      formData.append("file", file[0]); // Assuming only one file is selected
      formData.append("filename", filename);
      
      try {
        const response = await fetch("http://localhost:5000/api/images/upload", {
          method: "POST",
          
          body: formData,
        });
        const data = await response.json();
        if(data.status == "success"){
          alert("File Uploaded");
          window.location.href = "/images"
        }
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    } else {
      alert("Please Set Your File Name And Upload File");
    }
  };

  return (
    <>
      <input type="text" value={filename} onChange={(e) => setFileName(e.target.value)} />
      <input type="file" onChange={(e) => setFile(e.target.files)} />
      <button onClick={uploadFile}>Upload</button>
    </>
  );
}