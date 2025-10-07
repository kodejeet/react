// import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data =  useLoaderData()
  // useEffect(() => {
  //   const [data, setData] = useState([]);
  //   fetch("https://api.github.com/users/kodejeet")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setData(data)
  //     });
  // }, []);
  return (
    <div className="text-center flex m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers :{data.followers}
      <img className="text-center" src= {data.avatar_url} alt="GitHub pfp"  width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/kodejeet")
    return response.json()
}