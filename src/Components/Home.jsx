import React from "react";
import "./Home.css";
import { FaSafari } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";

function Home() {
  return (
    <div className="d-flex home ">
      <div className="d-flex sidebar flex-column flex-shrink-0 text-white bg-dark mt-2">
        <ul className="nav nav-pills flex-column mb-auto px-0">
          <li className="nav-item">
            <a href="" className="nav-link text-white">
              <FaSafari /> <span className="ms-2"> Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="" className="nav-link text-white">
              <FaCartArrowDown /> <span className="ms-2"> Cars</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="" className="nav-link text-white">
              <FaUserAlt /> <span className="ms-2"> Drivers</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link text-white">
              <FaTasks /> <span className="ms-2"> Report</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="content container mt-3">
        <div className="row">
          <div className="col-md-3 col text-white bg-success d-flex justify-content-around px-1 py-3 rounded">
            <p>Total Cars</p>
            <FaCartArrowDown />
          </div>
          <div className="col-md-3 col text-white bg-danger d-flex justify-content-around px-1 py-3 rounded">
            <p>Total Driver</p>
            <FaCartArrowDown />
          </div>
          <div className="col-md-3 col text-white bg-warning d-flex justify-content-around px-1 py-3 rounded">
            <p>Total Expense</p>
            <FaCartArrowDown />
          </div>
          <div className="col-md-3 col text-white bg-success d-flex justify-content-around px-1 py-3 rounded">
            <p>Report</p>
            <FaCartArrowDown />
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <h2>Cars</h2>
          <button className="btn btn-success">+Add</button>
        </div>

        <table className="table w-100">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Title</th>
              <th scope="col">Title</th>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>Toyota</td>
              <td>Corolla</td>
              <td>Four R</td>
              <td>
                <button className="btn btn-success mx-2">U</button>
                <button className="btn btn-danger mx-2">D</button>{" "}
              </td>
            </tr>

            <tr>
              <td>1,001</td>
              <td>Toyota</td>
              <td>Corolla</td>
              <td>Four R</td>
              <td>
                <button className="btn btn-success mx-2">U</button>
                <button className="btn btn-danger mx-2">D</button>{" "}
              </td>
            </tr>
            <tr>
              <td>1,001</td>
              <td>Toyota</td>
              <td>Corolla</td>
              <td>Four R</td>
              <td>
                <button className="btn btn-success mx-2">U</button>
                <button className="btn btn-danger mx-2">D</button>{" "}
              </td>
            </tr>
            <tr>
              <td>1,001</td>
              <td>Toyota</td>
              <td>Corolla</td>
              <td>Four R</td>
              <td>
                <button className="btn btn-success mx-2">U</button>
                <button className="btn btn-danger mx-2">D</button>{" "}
              </td>
            </tr>
            <tr>
              <td>1,001</td>
              <td>Toyota</td>
              <td>Corolla</td>
              <td>Four R</td>
              <td>
                <button className="btn btn-success mx-2">U</button>
                <button className="btn btn-danger mx-2">D</button>{" "}
              </td>
            </tr>
            <tr>
              <td>1,001</td>
              <td>Toyota</td>
              <td>Corolla</td>
              <td>Four R</td>
              <td>
                <button className="btn btn-success mx-2">U</button>
                <button className="btn btn-danger mx-2">D</button>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
