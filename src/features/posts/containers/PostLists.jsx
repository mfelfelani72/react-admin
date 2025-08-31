import React from "react";
import { DashboardIcon } from "../../core/components/Icon";
import TableCell from "../components/TableCell.jsx";
import TableRow from "../components/TableRow.jsx";
import Footer from "../components/Footer.jsx";
import Table from "../../core/components/Table/Table.jsx"

const PostLists = () => {
  return (
    <>
    <div>
      <Table />
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
          </tbody>
        </table>
        <Footer />
      </div> */}
    </>
  );
};

export default PostLists;
