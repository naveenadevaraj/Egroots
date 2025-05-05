"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import logo from "../images/LOGO.png"
import { useCart } from "../pages/CartProvider"
import { FiChevronDown } from "react-icons/fi"

const Navbar = () => {
  const { totalItems } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const closeDropdown = () => {
    setDropdownOpen(false)
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo || "/placeholder.svg"} alt="E-GROOTS Logo" />
      </div>
      <div className="nav-content">
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="dropdown-container">
              <div className="dropdown-trigger" onClick={toggleDropdown}>
                <span>Products List</span>
                <FiChevronDown className={`dropdown-icon ${dropdownOpen ? "open" : ""}`} />
              </div>
              <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                <NavLink
                  to="/products"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={() => {
                    setMenuOpen(false)
                    closeDropdown()
                  }}
                >
                  All Products
                </NavLink>
                <NavLink
                  to="/competition-bots"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={() => {
                    setMenuOpen(false)
                    closeDropdown()
                  }}
                >
                  Competition Bots
                </NavLink>
                <NavLink
                  to="/electronics-kit"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={() => {
                    setMenuOpen(false)
                    closeDropdown()
                  }}
                >
                  Electronics Kit
                </NavLink>
              </div>
            </li>
            <li>
              <a
                href="#footer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("footer").scrollIntoView({ behavior: "smooth" })
                  setMenuOpen(false)
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* <Link to="/cart" className='icon'>
          <HiOutlineShoppingBag className='cart-icon' />
          {totalItems > 0 && <span>({totalItems})</span>}
        </Link> */}
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </div>
  )
}

export default Navbar

