"use client";

export default function Home() {
  const fetchData = async () => {
    const response = await fetch("http://localhost:1111/users");
    const data = await response.json();
    console.log(data);
  };

  fetchData();

  return <div className="">Hello</div>;
}
