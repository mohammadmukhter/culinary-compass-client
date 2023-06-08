import { useForm } from "react-hook-form";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";
import useAuth from "../../../../hooks/useAuth";

const AddClass = () => {
  const { user } = useAuth();
  const imgURL = `https://api.imgbb.com/1/upload?expiration=600&key=${
    import.meta.env.VITE_image_upload
  }`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      instructorName: user.displayName,
      instructorEmail: user.email,
    },
  });

  const onSubmit = (data) => {
    const imageFile = data.classImage[0];

    const formData = new FormData();
    formData.append("image", imageFile);

    fetch(imgURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imageUrl = imgRes.data.display_url;
          const {
            className,
            instructorName,
            instructorEmail,
            availAbleSeat,
            price,
          } = data;
          const newItem = {
            className,
            instructorName,
            instructorEmail,
            availAbleSeat: parseInt(availAbleSeat),
            price: parseFloat(price),
            classImage: imageUrl,
          };

          console.log(newItem);
          reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mb-12">
      <div className="card  w-full mt-12 shadow-2xl bg-base-100/50">
        <h2 className="text-gray-800 text-3xl font-bold mt-6 text-center">
          Add a Class
        </h2>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("className", { required: true })}
              className="input input-bordered"
            />
            {errors.className && (
              <span className="text-red-600 text-left text-sm w-64 mt-1">
                Class Name is required
              </span>
            )}
          </div>

          <div className="flex flex-col md:flex-row  gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <input
                type="text"
                placeholder="Instructor Name"
                disabled
                {...register("instructorName", { required: true })}
                className="input input-bordered"
              />
              {errors.instructorName && (
                <span className="text-red-600 text-left text-sm w-64 mt-1">
                  Instructor Name is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Email</span>
              </label>
              <input
                type="email"
                placeholder="Instructor Email"
                disabled
                {...register("instructorEmail", { required: true })}
                className="input input-bordered"
              />
              {errors.instructorEmail && (
                <span className="text-red-600 text-left text-sm w-64 mt-1">
                  Email is required
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row  gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Seat</span>
              </label>
              <input
                type="number"
                placeholder="Available Seat"
                {...register("availableSeat", { required: true })}
                className="input input-bordered"
              />
              {errors.availableSeat && (
                <span className="text-red-600 text-left text-sm w-64 mt-1">
                  Available Seat is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered"
              />
              {errors.price && (
                <span className="text-red-600 text-left text-sm w-64 mt-1">
                  Price is required
                </span>
              )}
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="file"
              placeholder="Class Image"
              {...register("classImage", { required: true })}
              className="file-input file-input-bordered w-full"
            />
            {errors.classImage && (
              <span className="text-red-600 text-left text-sm w-64 mt-1">
                Class Image is required
              </span>
            )}
          </div>

          <div className="form-control mt-6 w-fit ml-auto">
            <PrimaryButton>Add Class</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
