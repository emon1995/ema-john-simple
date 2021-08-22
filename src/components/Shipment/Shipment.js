import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { reviewContext } from '../../App';
import "./Shipment.css";

const Shipment = () => {
    const [loggedInUser, setLoggedInUser] =useContext(reviewContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
      <div>
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={loggedInUser.name} placeholder="Your Name" {...register("name", { required: true })} />
      {errors.name && <span className="error">This name is required</span>}

      <input defaultValue={loggedInUser.email} placeholder="Your Email" {...register("email", { required: true })} />
      {errors.email && <span className="error">This email is required</span>}

      <input placeholder="Your address" {...register("address", { required: true })} />
      {errors.address && <span className="error">This address is required</span>}
      
      <input placeholder="Phone Number" {...register("phone", { required: true })} />
      {errors.phone && <span className="error">This phone is required</span>}
      
      <input type="submit" />
    </form>
    </div>
  );
};

export default Shipment;