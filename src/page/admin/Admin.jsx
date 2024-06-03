import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Admin.css'
import { BarChart } from '@mui/x-charts';
import { useGetProductsQuery } from '../../context/api/productsApi';


const Admin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "",
            name: "Create Category",
            icon: <FaTh />
        },
        {
            path: "",
            name: "Create User",
            icon: <FaUserAlt />
        },
        {
            path: "",
            name: "Manage User",
            icon: <FaUserAlt />
        },
        {
            path: "",
            name: "Create Product",
            icon: <FaShoppingBag />
        },
        {
            path: "",
            name: "Manage Product",
            icon: <FaThList />
        }
    ]


    const { data } = useGetProductsQuery();
    let productBarChar = data.products;
    console.log(productBarChar);
    return (
        <div style={{ background: "#000", }} className='bg-[#000] w-[100vw] h-[100vh]'>
            <div className=" admin kontainer">
                <div style={{ width: !isOpen ? "300px" : "50px", position: "fixed" }} className="sidebar border">
                    <div className="top_section">
                        <h1 style={{ display: !isOpen ? "block" : "none" }} className="logo">Logo</h1>
                        <div style={{ marginLeft: !isOpen ? "180px" : "0px" }} className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" >
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: !isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
                <main style={{ marginLeft: !isOpen ? "300px" : "50px" }} className=''>
                    <BarChart
                        xAxis={[
                            {
                                id: 'barCategories',
                                data: productBarChar.map((el, inx) => (el.title)),
                                scaleType: 'band',
                            },
                        ]}
                        series={[
                            {
                                data: productBarChar.map((el, inx) => (el.price)),
                            },
                        ]}
                        width={800}
                        height={400}
                    />
                </main>
            </div>
        </div>
    );
};

export default Admin;