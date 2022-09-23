import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar(props) {
    return (
        <>
            <ul className="m-0 p-0" id="navbar">
                <li>
                    <NavLink to="/bang-gia/chung-khoan-co-so"
                        style={
                            isActive => ({
                                color: isActive ? "#EFF5F4" : "#8DA5A1",
                                borderBottom: isActive ? "2px solid #EFF5F4" : ""
                            })
                        }
                    >
                        Chứng khoán cơ sở
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/bang-gia/bond"
                        style={
                            isActive => ({
                                color: isActive ? "#EFF5F4" : "#8DA5A1",
                                borderBottom: isActive ? "2px solid #EFF5F4" : ""
                            })
                        }
                    >
                        Trái phiếu
                    </NavLink>
                </li>
            </ul>
        </>
    );
};
export default NavBar;