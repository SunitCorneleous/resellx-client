import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const AllSellers = () => {
  const { data, refetch } = useQuery({
    queryKey: ["allsellers"],
    queryFn: () => {
      return fetch("http://localhost:5000/allsellers", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then(res => res.json());
    },
  });

  const deleteHandler = (id, email) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this seller?"
    );

    if (!confirmation) {
      return;
    }

    axios
      .delete(`http://localhost:5000/allsellers?id=${id}&email=${email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then(res => {
        console.log(res);
        refetch();
      });
  };

  return (
    <div className="min-h-[70vh] w-full">
      <h1 className="text-center text-xl md:text-3xl mb-4 mt-5">
        All Sellers: {data?.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Seller Name</th>
              <th>Email</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((seller, index) => (
              <tr key={seller._id} className="text-center">
                <th>{index + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>

                <td>
                  <button
                    disabled={seller.verified}
                    className="btn btn-sm btn-warning"
                  >
                    {seller.verified ? "verified" : "unverified"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => deleteHandler(seller._id, seller.email)}
                    className="btn btn-sm btn-error"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
