import React, { useState } from "react";
import uploadCloudinary from "../../utils/uploadCloudinary";
const data = [
  "https://i.ibb.co/hVKWNxM/istockphoto-1457889029-612x612.jpg",
  "https://i.ibb.co/hVKWNxM/istockphoto-1457889029-612x612.jpg",
  "https://i.ibb.co/hVKWNxM/istockphoto-1457889029-612x612.jpg",
  "https://i.ibb.co/hVKWNxM/istockphoto-1457889029-612x612.jpg",
  "https://i.ibb.co/hVKWNxM/istockphoto-1457889029-612x612.jpg",
  "https://i.ibb.co/hVKWNxM/istockphoto-1457889029-612x612.jpg",
  "https://i.ibb.co/hVKWNxM/istockphoto-1457889029-612x612.jpg",
  "https://i.ibb.co/hVKWNxM/istockphoto-1457889029-612x612.jpg",
  "https://i.ibb.co/hVKWNxM/istockphoto-1457889029-612x612.jpg",
  "https://i.ibb.co/hVKWNxM/istockphoto-1457889029-612x612.jpg",
];
const UploadImageView = () => {
  const [images, setImages] = useState([]);
  const [link, setLinks] = useState([]);

  const uploadImageHandler = async (e) => {
    const images = e.target.files;
    console.log(images);
    if (images.length > 0) {
      console.log("upload")
      let arr = [];
      for (let i = 0; i < images.length; i++) {
        const data = await uploadCloudinary(images[i]);
        console.log(data);
        arr.push(data);
      }
      setLinks(arr);
    }
  };

  return (
    <div className="border  rounded-md">
      <div className="py-4 px-4 border-b  flex items-center justify-between">
        <h3 className="font-semibold font-sans py-1.5">
          Add Image in your Gallery
        </h3>
        <label className="bg-orange-800 cursor-pointer text-white px-4 py-1.5 rounded-md">
          Upload
          <input
            onChange={uploadImageHandler}
            className="hidden"
            multiple={true}
            type="file"
          />
        </label>
      </div>
      <div className="min-h-96 px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-5 justify-items-center xl:grid-cols-7 2xl:grid-cols-10 gap-x-2 gap-y-3">
          { link && link.map(({ url }) => (
            <div className="md:w-32 md:h-32 h-28 w-28 border">
              <img className="w-full h-full object-cover" src={url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadImageView;
