import React, { useEffect, useState } from "react";
import LibraryCard from "../../UI/library/LibraryCard";

const Libraryes = () => {
  const [lib, setLib] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    LibrAll();
  }, []);
  const LibrAll = async () => {
    const respon = await fetch("http://localhost:8000/admin/library/all", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const Data = await respon.json();
    console.log(Data);
    setLib(Data);
  };

  return (
    <div className="d-fex">
      {lib.length > 0 ? (
        lib.map((lp) => (
          <LibraryCard
            key={lp._id}
            title={lp.title}
            linkDescription={lp.linkDescription}
            id={lp._id}
            url={lp.urlLink}
          />
        ))
      ) : (
        <div>No Library</div>
      )}
    </div>
  );
};

export default Libraryes;
