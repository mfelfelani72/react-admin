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
      // country: "ایران",
      // score: 95,
      // status: "فعال",
      // date: "1402/05/15",
    },
    {
      id: 2,
      name: "سارا",
      age: 32,
      job: "طراح",
      city: "مشهد",
      // country: "ایران",
      // score: 88,
      // status: "غیرفعال",
      // date: "1402/04/22",
    },
    {
      id: 3,
      name: "جان",
      age: 45,
      job: "مدیر",
      city: "نیویورک",
      // country: "آمریکا",
      // score: 76,
      // status: "فعال",
      // date: "1401/12/03",
    },
  ];
  return (
    <>
      <div className="relative z-5">
        <Table
          data={data}
          onDelete={(id) => console.log("Delete item with id:", id)}
          onView={(item) => console.log("View item:", item)}
          onEdit={(item) => console.log("Edit item:", item)}
        />
      </div>
      {/* <div className="min-h-[calc(100vh-5.8rem)] flex flex-col overflow-hidden rounded-t-2xl">
        <table className="flex-1 overflow-y-auto bg-white rounded-2xl">
          <colgroup>
            <col className="width-[52px]" />
            <col className="width-[323px]" />
            <col className="width-[282px]" />
            <col className="width-[173px]" />
            <col className="width-[317px]" />
            <col className="width-[216px]" />
            <col className="width-[240px]" />
          </colgroup>

          <thead className="border-b h-[5rem]">
            <tr className="text-left">
              <th className="pl-[1.5rem]">
                <input type="checkbox" />
              </th>
              <TableCell title={"Students"} icon={<DashboardIcon />} />
              <TableCell title={"Email ID"} icon={<DashboardIcon />} />
              <TableCell title={"Courses"} icon={<DashboardIcon />} />
              <TableCell title={"Certificates Earned"} icon={<DashboardIcon />} />
              <TableCell title={"Status"} icon={<DashboardIcon />} />
              <TableCell title={"Actions"} />
            </tr>
          </thead>
          <tbody>
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
            <TableRow name={"Yasin Amini"} email={"ton.618@yahoo.com"} cours={"3"} certificate={"2"} />
          </tbody>
        </table>
        <Footer />
      </div> */}
    </>
  );
};

export default PostLists;
