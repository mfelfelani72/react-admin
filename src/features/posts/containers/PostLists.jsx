import React from "react";
import { DashboardIcon } from "../../core/components/Icon";
import TableCell from "../components/TableCell.jsx";
import TableRow from "../components/TableRow.jsx";
import Footer from "../components/Footer.jsx";
import Table from "../../core/components/Table/Table.jsx";

const PostLists = () => {
  const data = [
    {
      id: 1,
      name: "علی",
      age: 28,
      job: "توسعه‌دهنده",
      city: "تهران",
      country: "ایران",
      score: 95,
      status: "فعال",
      date: "1402/05/15",
    },
    {
      id: 2,
      name: "سارا",
      age: 32,
      job: "طراح",
      city: "مشهد",
      country: "ایران",
      score: 88,
      status: "غیرفعال",
      date: "1402/04/22",
    },
    {
      id: 3,
      name: "جان",
      age: 45,
      job: "مدیر",
      city: "نیویورک",
      country: "آمریکا",
      score: 76,
      status: "فعال",
      date: "1401/12/03",
    },
  ];
  return (
    <>
      <div className="relative z-5">
        <Table
          data={data}
          customColumnConfig={{
            id: { title: "id", sortable: false,  baseWidth: 50 },
          }}
          onDelete={(id) => console.log("Delete item with id:", id)}
          onView={(item) => console.log("View item:", item)}
          onEdit={(item) => console.log("Edit item:", item)}
        />
      </div>
    </>
  );
};

export default PostLists;
