import React, { useState, useEffect, useRef } from "react";

const PerfectResponsiveTable = ({
  data = [],
  customColumnConfig = {},
  defaultSort = { key: "id", direction: "asc" },
}) => {
  // states and constants and refs

  const initialData = data;

  const [displayData, setDisplayData] = useState(initialData);
  const [columns, setColumns] = useState();
  const [sortConfig, setSortConfig] = useState(defaultSort);
  const [searchTerm, setSearchTerm] = useState("");
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const firstColRef = useRef(null);
  const lastColRef = useRef(null);


  // functions

  // generate Columns
  const generateColumns = () => {
    if (initialData.length === 0) return [];

    const firstItemKeys = Object.keys(initialData[0]);

    return firstItemKeys.map((key) => {
      // default configure for every column
      const defaultConfig = {
        key,
        title: key,
        sortable: true,
        baseWidth: 120,
      };

      // merge custom configure for columns
      return { ...defaultConfig, ...customColumnConfig[key] };
    });
  };


  // مرتب‌سازی داده‌ها
  const requestSort = (key) => {
    if (!columns.find((col) => col.key === key)?.sortable) return;

    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    setSortConfig({ key, direction });

    const sortedData = [...filteredData()].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setDisplayData(sortedData);
  };

  // full search
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  // filter data based on search
  const filteredData = () => {
    if (!searchTerm) return initialData;

    return initialData.filter((item) => {
      return Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm)
      );
    });
  };



  // آیکون مرتب‌سازی
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return "↕";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  // اگر داده‌ای وجود ندارد
  if (initialData.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        داده‌ای برای نمایش وجود ندارد
      </div>
    );
  }

  useEffect(()=>{
    setColumns(generateColumns());
  },[])

  // apply filter
  useEffect(() => {
    setDisplayData(filteredData());
  }, [searchTerm]);

  // calculate width
  useEffect(() => {
    const updateWidths = () => {
      if (
        tableRef.current &&
        firstColRef.current &&
        lastColRef.current &&
        columns.length > 0
      ) {
        const tableWidth = tableRef.current.offsetWidth;
        const firstColWidth = firstColRef.current.offsetWidth;
        const lastColWidth = lastColRef.current.offsetWidth;
        const availableWidth = tableWidth - firstColWidth - lastColWidth;

        const middleColumns = columns.slice(1, -1);
        const totalBaseWidth = middleColumns.reduce(
          (sum, col) => sum + col.baseWidth,
          0
        );
        const expandFactor = Math.max(1, availableWidth / totalBaseWidth);

        const newWidths = {};
        middleColumns.forEach((col) => {
          newWidths[col.key] = Math.floor(col.baseWidth * expandFactor);
        });

        setColumnWidths(newWidths);
      }
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, [columns]);

  return (
    <div
      className="w-full overflow-hidden rounded-lg shadow dark:shadow-gray-700"
      ref={tableRef}
    >
      {/* جستجو */}
      <div className="p-3 bg-gray-100 dark:bg-gray-700">
        <input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          placeholder="جستجو در همه فیلدها..."
          value={searchTerm}
        />
      </div>

      {/* جدول */}
      <div className="flex w-full">
        {/* ستون اول (ثابت) */}
        {columns?.length > 0 && (
          <div
            ref={firstColRef}
            className="flex-shrink-0 sticky left-0 z-10 bg-white dark:bg-gray-800"
            style={{ width: columns[0].baseWidth }}
          >
            {/* هدر */}
            <div className="p-3 bg-gray-100 dark:bg-gray-700 font-bold text-gray-700 dark:text-white border-b border-r border-gray-200 dark:border-gray-600 sticky top-0 z-20">
              <div className="flex items-center justify-between">
                {columns[0].title}
                {columns[0].sortable && (
                  <button
                    onClick={() => requestSort(columns[0].key)}
                    className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none"
                  >
                    {getSortIcon(columns[0].key)}
                  </button>
                )}
              </div>
            </div>

            {/* داده‌ها */}
            {displayData.map((item, index) => (
              <div
                key={`first-${item.id || index}`}
                className={`p-3 border-b border-r border-gray-200 dark:border-gray-600 dark:text-white ${
                  index % 2 === 0
                    ? "bg-white dark:bg-gray-800"
                    : "bg-gray-50 dark:bg-gray-700"
                }`}
              >
                {item[columns[0].key]}
              </div>
            ))}
          </div>
        )}

        {/* ستون‌های میانی (اسکرول شونده) */}
        {columns?.length > 2 && (
          <div className="flex-1 overflow-x-auto">
            <div className="flex flex-col">
              {/* هدرها */}
              <div className="flex">
                {columns.slice(1, -1).map((column) => (
                  <div
                    key={`mid-header-${column.key}`}
                    className="flex-shrink-0 p-3 bg-gray-100 dark:bg-gray-700 font-bold text-gray-700 dark:text-white border-b border-r border-gray-200 dark:border-gray-600 sticky top-0 z-10"
                    style={{
                      width: columnWidths[column.key] || column.baseWidth,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      {column.title}
                      {column.sortable && (
                        <button
                          onClick={() => requestSort(column.key)}
                          className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none"
                        >
                          {getSortIcon(column.key)}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* داده‌ها */}
              {displayData.map((item, rowIndex) => (
                <div key={`mid-row-${item.id || rowIndex}`} className="flex">
                  {columns.slice(1, -1).map((column) => (
                    <div
                      key={`mid-cell-${item.id || rowIndex}-${column.key}`}
                      className={`flex-shrink-0 p-3 border-b border-r border-gray-200 dark:border-gray-600 dark:text-white ${
                        rowIndex % 2 === 0
                          ? "bg-white dark:bg-gray-800"
                          : "bg-gray-50 dark:bg-gray-700"
                      }`}
                      style={{
                        width: columnWidths[column.key] || column.baseWidth,
                      }}
                    >
                      {item[column.key]}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ستون آخر (ثابت) */}
        {columns?.length > 1 && (
          <div
            ref={lastColRef}
            className="flex-shrink-0 sticky right-0 z-10 bg-white dark:bg-gray-800"
            style={{ width: columns[columns.length - 1].baseWidth }}
          >
            {/* هدر */}
            <div className="p-3 bg-gray-100 dark:bg-gray-700 font-bold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-600 sticky top-0 z-20">
              <div className="flex items-center justify-between">
                {columns[columns.length - 1].title}
                {columns[columns.length - 1].sortable && (
                  <button
                    onClick={() => requestSort(columns[columns.length - 1].key)}
                    className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none"
                  >
                    {getSortIcon(columns[columns.length - 1].key)}
                  </button>
                )}
              </div>
            </div>

            {/* داده‌ها */}
            {displayData.map((item, index) => (
              <div
                key={`last-${item.id || index}`}
                className={`p-3 border-b border-gray-200 dark:border-gray-600 dark:text-white ${
                  index % 2 === 0
                    ? "bg-white dark:bg-gray-800"
                    : "bg-gray-50 dark:bg-gray-700"
                }`}
              >
                {item[columns[columns.length - 1].key]}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PerfectResponsiveTable;
