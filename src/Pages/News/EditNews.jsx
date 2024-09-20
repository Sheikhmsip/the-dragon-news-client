import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const EditNews = () => {
  const getNews = useLoaderData();

  const { _id, title, details, image_url } = getNews;

  console.log(_id);
  const handelEditNews = (event) => {
    // event.preventDefault();
    // const form = event.target;
    // const title = form.title.value;
    // const details = form.details.value;
    // const image_url = form.image_url.files[0];
    // const news = { "title": title, "details": details, "image_url":image_url };
    // console.log(news)
    // // const formData = new FormData();
    // // formData.append("title", title);
    // // formData.append("details", details);
    // // formData.append("image_url", image_url);
    // // console.log(formData);

    // fetch(`http://localhost:5000/news/${_id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(news)
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);

    //     if (data.modifiedCount > 0) {
    //       toast.success("Successfully Edited News");
    //       return;
    //     }
    //     if (data.modifiedCount === 0) {
    //       toast.success("Nothing Update");
    //     }
    //   });

    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const details = form.details.value;
    const image_url = form.image_url.files[0]; // Assuming there's an input with type="file" for image upload.

    const formData = new FormData();
    formData.append("image", image_url);

    // Upload the image to ImgBB
    // const imgBBApiKey = 'YOUR_IMGBB_API_KEY'; // Replace with your ImgBB API key
    const imgBBUrl = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    fetch(imgBBUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgBBData) => {
        if (imgBBData.success) {
          const image_url = imgBBData.data.url; // Get the image URL

          // Now send the news data along with the image URL to your backend
          const news = { title, details, image_url };
          console.log(news);

          fetch(`http://localhost:5000/news/${_id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(news),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);

              if (data.modifiedCount > 0) {
                toast.success("Successfully Edited News");
                return;
              }
              if (data.modifiedCount === 0) {
                toast.success("Nothing Update");
              }
            });
        } else {
          console.error("Image upload failed:", imgBBData.error.message);
        }
      })
      .catch((err) => console.error("Error uploading image:", err));
  };

  return (
    <div className="p-11">
      <h2 className=" py-2 my-2 rounded-tr-full rounded-tl-full bg-slate-400 text-4xl font-bold text-center ">
        Edit News
      </h2>
      <form onSubmit={handelEditNews} className="grid  mx-auto gap-2">
        <input
          type="text"
          defaultValue={title}
          name="title"
          required
          className="input input-bordered w-full "
        />

        <input
          type="text"
          defaultValue={details}
          name="details"
          required
          className="input input-bordered w-full "
        />

        <input
          type="file"
          name="image_url"
          //   required
          className="file-input file-input-bordered bg-red-400 text-white w-full max-w-xs"
        />

        <input type="submit" value="Edit News" className="btn bg-red-400" />
      </form>
    </div>
  );
};

export default EditNews;
