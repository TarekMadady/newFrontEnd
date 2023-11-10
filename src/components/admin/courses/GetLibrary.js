import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Delete from "../../UI/library/Delete";

const GetLibrary = ({ id }) => {
  const token = localStorage.getItem("token");
  const [lib, setLib] = useState([]);
  const myData = async () => {
    const response = await fetch(
      `http://localhost:8000/admin/library/all/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setLib(data);
  };
  useEffect(() => {
    myData();
  }, []);

  return (
    <div className="w-100">
      <table className="table table-hover my-0">
        <thead>
          <tr>
            <th>الاسم</th>
            <th>الرابط</th>
            <th>الشرح</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {lib &&
            lib.map((lb) => (
              <tr key={lb.id}>
                <td>{lb.title}</td>
                <td>
                  <Link target="_blank" to={lb.url}>
                    الرابط
                  </Link>
                </td>
                <td>{lb.desc}</td>
                <td>
                  <Link to={`/admin/library/delete/${lb.id}`}>حذف</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetLibrary;
