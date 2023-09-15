import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyOrder() {
  const [orderData, setorderData] = useState({});

  const fetchMyOrder = async () => {
    // console.log(localStorage.getItem("userEmail"));
    await fetch("http://localhost:5000/api/myOrderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      let response = await res.json();
      await setorderData(response);
    });

    // await res.map((data)=>{
    //    console.log(data)
    // })
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container">
        <div className="row">
          {orderData !== {}
            ? Array(orderData).map((data) => {
                return data.orderData
                  ? data.orderData.order_data
                      .slice(0)
                      .reverse()
                      .map((item) => {
                        return item.map((arrayData) => {
                          return (
                            <div>
                              {arrayData.Order_date ? (
                                <div className="m-auto mt-5">
                                  {(data = arrayData.Order_date)}
                                  <hr />
                                </div>
                              ) : (
                                <div className=" row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4 ">
                                  <div className="card">
                                    <div className="">
                                      <img
                                        src={arrayData.book_image}
                                        className="card-img-top "
                                        alt={arrayData.book_name}
                                        style={{
                                          height: "320px",
                                          objectFit: "fill",
                                        }}
                                      />
                                      <div className="card-body">
                                        <h5 className="card-title">
                                          {arrayData.book_name}
                                        </h5>
                                        <h6 className="font-weight-bold">
                                          Author name: {arrayData.author_name}
                                        </h6>
                                        <h6 className="font-weight-bold">
                                          Quantity: {arrayData.Quantity}
                                        </h6>
                                        <h6 className="font-weight-bold">
                                          Categoty: {arrayData.category}
                                        </h6>
                                        <h6 className="font-weight-bold">
                                          price: {arrayData.price}
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        });
                      })
                  : "";
              })
            : ""}
        </div>
      </div>

      <Footer />
    </div>
  );
}
