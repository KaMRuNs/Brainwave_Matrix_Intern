import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="mt-15 bg-gray-900 p-6 md:p-20 text-white">
      <h1 className="font-bold text-lg mb-6">Our top cities</h1>
      <div className="grid grid-rows-5 grid-cols-2 md:grid-cols-4 grid-flow-col text-sm gap-2">
        <p>San Francisco</p>
        <p>Miami</p>
        <p>San Diego</p>
        <p>East Bay</p>
        <p>Long Beach</p>
        <p>Los Angeles</p>
        <p>Washington DC</p>
        <p>Seattle</p>
        <p>Portland</p>
        <p>Nashville</p>
        <p>New York City</p>
        <p>Orange County</p>
        <p>Atlanta</p>
        <p>Charlotte</p>
        <p>Denver</p>
        <p>Chicago</p>
        <p>Phoenix</p>
        <p>Las Vegas</p>
        <p>Sacramento</p>
        <p>Oklahoma City</p>
        <p>Columbus</p>
        <p>New Mexico</p>
        <p>Albuquerque</p>
        <p>Sacramento</p>
        <p>New Orleans</p>
      </div>
      <hr className="my-10 text-gray-600" />
      <div className="md:flex justify-between">
        <div className="md:w-1/2">
          <div className="grid grid-cols-3">
            <h1 className="font-bold text-lg mb-6">Company</h1>
            <h1 className="font-bold text-lg mb-6">Contact</h1>
            <h1 className="font-bold text-lg mb-6">Legal</h1>
          </div>
          <div className="grid grid-rows-4 grid-cols-3 grid-flow-col text-sm gap-2">
            <p>About us</p>
            <p>Team</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Help & Support</p>
            <p>Partner with us </p>
            <p>Ride with us</p>
            <p>Blog</p>
            <p>Terms & Conditions</p>
            <p>Refund & Cancellation</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-gray-400 text-lg mb-6">Follow us</h1>
          <div className="flex gap-3 mb-4 text-gray-400">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
          <p>Receive exclusive offers in your mailbox</p>
          <form action="" className="flex mt-4">
            <input
              type="email"
              placeholder="Enter Your email"
              required
              className="bg-gray-700 border-none rounded-xl px-4"
            />
            <Button
              title={"Subscribe"}
              classname={"bg-light text-white text-sm px-4 py-2 ml-1"}
            />
          </form>
        </div>
      </div>
      <hr className="my-10 text-gray-600" />
      <p className="text-sm">
        All rights Reserved copyright{" "}
        <span className="font-bold">Your Company, 2025</span>
      </p>
    </div>
  );
};

export default Footer;
