import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddNews = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);

  const handelAddNews = (event) => {
    event.preventDefault();
    const form = event.target;
    const authorName = form.authorName.value;
    const category = form.category.value;
    const title = form.title.value;
    const details = form.details.value;
    const image_url = form.image_url.files[0]; // Assuming there's an input with type="file" for image upload.
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }); // Get the current time in hh:mm format
    const authorEmail = user?.email;
    // console.log(time)
    // console.log(date)
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
          const news = {
            title,
            details,
            image_url,
            date,
            time,
            authorName,
            authorEmail,
            category
          };
          console.log(news);

          fetch("http://localhost:5000/news", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(news),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                toast.success("Successfully added news");
                event.target.reset();
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
        Add New News
      </h2>
      <form onSubmit={handelAddNews} className="grid  mx-auto gap-2">
        <input
          type="text"
          placeholder="Author Name"
          name="authorName"
          className="input input-bordered w-full"
        />
        <select className="select select-bordered w-full" name="category" >
          <option disabled selected>
            News Category?
          </option>
          <option>Breaking News</option>
          <option>Regular News</option>
          <option>International News</option>
          <option>Sports</option>
          <option>Entertainment</option>
          <option>Culture</option>
          <option>Arts</option>
        </select>
        <input
          type="text"
          placeholder="News Title*"
          name="title"
          required
          className="input input-bordered w-full "
        />

        <input
          type="text"
          placeholder="News Details*"
          name="details"
          required
          className="input input-bordered w-full "
        />

        <input
          type="file"
          name="image_url"
          required
          className="file-input file-input-bordered bg-red-400 text-white w-full max-w-xs"
        />

        <input type="submit" value="Add News" className="btn bg-red-400" />
      </form>
    </div>
  );
};

export default AddNews;
