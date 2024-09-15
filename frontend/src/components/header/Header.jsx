import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const location = useLocation();
  const isAccount = location.pathname === "/";
  const clickHandler = async (e) => {
    try {
      // e.preventDefault(); // Prevents Link default navigation
      // e.stopPropagation(); // Stops event bubbling
      setShowDropDown((prev) => !prev);
    } catch (err) {
      console.log("Error In Header in mouseoverHandler :", err);
    }
  };

  const dropdownClickHandler = (e) => {
    // e.preventDefault(); // Prevents Link default navigation
    // e.stopPropagation(); // Prevents clicks inside the dropdown from propagating
    console.log("Drop Down Activated");
  };

  return (
    <div className="">
      <div className="h-20 border border-red-500">
        <ul className="flex justify-between mt-6">
          <li>
            <div className="border border-black rounded-md py-1 px-3">Logo</div>
          </li>
          <li>
            <div className="border border-black rounded-md py-1 px-3">
              Search Bar
            </div>
          </li>

          <li>
            <div>
              <Link to="/" className="border border-black rounded-md py-1 px-3">
                Home
              </Link>
            </div>
          </li>

          <li>
            <div>
              <Link
                to="/register"
                className="border border-black rounded-md py-1 px-3"
              >
                Register
              </Link>
            </div>
          </li>

          <li>
            <div>
              <Link
                to="/account"
                className="border border-black rounded-md py-1 px-3"
                onClick={clickHandler}
              >
                Account
              </Link>
              {showDropDown && (
                <ul className="border border-black rounded-md  bg-gray-500 text-white flex flex-wrap justify-center w-32 z-10 relative">
                  <Link to="account/profile">
                    <button
                      onClick={(e) => {
                        dropdownClickHandler(e);
                        clickHandler(e);
                      }}
                      className="py-1 px-3 hover:bg-gray-800"
                    >
                      Profile
                    </button>
                  </Link>

                  <Link to="account/odders">
                    <button
                      onClick={(e) => {
                        dropdownClickHandler(e);
                        clickHandler(e);
                      }}
                      className="py-1 px-3 hover:bg-gray-800"
                    >
                      Odders
                    </button>
                  </Link>

                  <Link to="account/wishList">
                    <button
                      onClick={(e) => {
                        dropdownClickHandler(e);
                        clickHandler(e);
                      }}
                      className="py-1 px-3 hover:bg-gray-800"
                    >
                      WishList
                    </button>
                  </Link>

                  <Link to="account/coupens">
                    <button
                      onClick={(e) => {
                        dropdownClickHandler(e);
                        clickHandler(e);
                      }}
                      className="py-1 px-3 hover:bg-gray-800"
                    >
                      Coupen
                    </button>
                  </Link>

                  <Link to="account/notifications">
                    <button
                      onClick={(e) => {
                        dropdownClickHandler(e);
                        clickHandler(e);
                      }}
                      className="py-1 px-3 hover:bg-gray-800"
                    >
                      Notification
                    </button>
                  </Link>

                  <Link to="account/logout">
                    <button
                      onClick={(e) => {
                        dropdownClickHandler(e);
                        clickHandler(e);
                      }}
                      className="py-1 px-3 hover:bg-gray-800"
                    >
                      Logout
                    </button>
                  </Link>
                </ul>
              )}
            </div>
          </li>

          <li>
            <div>
              <Link
                to="/userCart"
                className="border border-black rounded-md py-1 px-3"
              >
                Cart
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link
                to="/admin"
                className="border border-black rounded-md py-1 px-3"
              >
                Admin
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
