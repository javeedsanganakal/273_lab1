import React from "react";
import cookie from "react-cookies";

function Dashboard() {
  return (
    <div>
      <div className="dash_board">
        {<h1 className="title">Welcome to Etsy!</h1>}
        <div className="dashboard_items">
          <div className="dashboard_item">
            <img
              src="https://images.pexels.com/photos/4530530/pexels-photo-4530530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Garden"
            ></img>
            <h3 style={{ fontSize: "20px", marginLeft: "-5px" }}>
              Accessories
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
