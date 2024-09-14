import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import logo from "./LOGO1.jpg"; // Path to the logo image

import { FaBars, FaTimes } from "react-icons/fa";
import {
  ShoppingCart as ShoppingCartIcon,
  Favorite as FavoriteIcon,
  PersonAdd as PersonAddIcon,
  AccountCircle as AccountCircleIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";
import FavoritesCount from "../Products/FavoritesCount";

const Navigation = () => {
  const [scrolling, setScrolling] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Overlay for Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 p-4 text-black duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center mb-6">
          <span className="text-3xl font-bold">Menu</span>
          <FaTimes className="text-2xl cursor-pointer" onClick={toggleSidebar} />
        </div>
        <nav className="flex flex-col space-y-4">
          <Link
            to="/"
            className="text-xl hover:bg-gray-200 p-2"
            onClick={toggleSidebar}
          >
            HOME
          </Link>
          <Link
            to="/shop"
            className="text-xl hover:bg-gray-200 p-2"
            onClick={toggleSidebar}
          >
            SHOP
          </Link>
          <Link
            to="/favorite"
            className="text-xl hover:bg-gray-200 p-2"
            onClick={toggleSidebar}
          >
            FAVOURITES
          </Link>
          <Link
            to="/cart"
            className="text-xl hover:bg-gray-200 p-2"
            onClick={toggleSidebar}
          >
            CART
          </Link>
          <Link
            to="/about"
            className="text-xl hover:bg-gray-200 p-2"
            onClick={toggleSidebar}
          >
            ABOUT
          </Link>
        </nav>
      </div>

      {/* Main Navbar */}
      <div
        className={`fixed top-0 left-0 w-full py-4 px-6 flex justify-between items-center z-30 transition-all ${
          scrolling
            ? "bg-white text-black shadow-md"
            : "bg-transparent text-black"
        } ${
          sidebarOpen ? "opacity-0" : "opacity-100"
        } duration-300 ease-in-out`}
      >
        {/* Mobile Hamburger Menu */}
        <div className="block md:hidden">
          <FaBars className="text-xl cursor-pointer mr-5" onClick={toggleSidebar} />
        </div>

        {/* Left: Logo or Brand Name */}
        <div className="flex items-center flex-grow md:flex-grow-0">
          <Link to="/">
            {scrolling ? (
              <img
                src={logo} // Path to your logo image
                alt="Brand Logo"
                className="w-40 h-[70px]" // Adjust size as needed
              />
            ) : (
              <span className="text-2xl font-extrabold">SHARMEENA KARIYANIYA</span> // Brand name
            )}
          </Link>
        </div>

        {/* Center: Navigation Links (Hidden on Small Screens) */}
        <div className="hidden md:flex items-center justify-center space-x-8">
          <Link to="/" className="text-lg font-semibold hover:text-gray-700">
            HOME
          </Link>
          <Link to="/shop" className="text-lg font-semibold hover:text-gray-700">
            SHOP
          </Link>
          <Link to="/skcircle" className="text-lg font-semibold hover:text-gray-700">
            SK CIRCLE
          </Link>
          <Link to="/about" className="text-lg font-semibold hover:text-gray-700">
            ABOUT
          </Link>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link
            to="/cart"
            className="hidden relative md:flex items-center transition-transform hover:translate-y-1"
          >
            <ShoppingCartIcon fontSize="medium" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs text-black bg-white rounded-full">
                {cartItems.reduce((a, c) => a + c.qty, 0)}
              </span>
            )}
          </Link>

          <Link
            to="/favorite"
            className="hidden relative md:flex items-center transition-transform hover:translate-y-1"
          >
            <FavoriteIcon fontSize="medium" />
            <FavoritesCount />
          </Link>

          {userInfo ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-black"
              >
                <AccountCircleIcon fontSize="medium" />
                <ArrowDropDownIcon
                  className={`transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-white text-black text-sm font-medium shadow-lg rounded-md">
                  {userInfo.isAdmin && (
                    <>
                      <li>
                        <Link
                          to="/admin/dashboard"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/categorylist"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Create Category
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/productlist"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Create Product
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/allproductslist"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Manage Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/orderlist"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Manage Orders
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/userlist"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Manage Users
                        </Link>
                      </li>
                    </>
                  )}
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={logoutHandler}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link
              to="/register"
              className="transition-transform hover:translate-y-1"
            >
              <PersonAddIcon fontSize="medium" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
