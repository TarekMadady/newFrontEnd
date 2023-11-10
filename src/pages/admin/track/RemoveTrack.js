import React from "react";
import { useParams } from "react-router-dom";
import DeleteTrack from "../../../components/admin/adminTrack/DeleteTrack";
const RemoveTrack = () => {
  const parmas = useParams();
  const { trackid } = parmas;
  return (
    <>
      <DeleteTrack id={trackid} />
    </>
  );
};

export default RemoveTrack;
