import React, { useState, useEffect, useRef } from "react";

const Table = ({
  data = [],
  customColumnConfig = {},
  defaultSort = { key: "id", direction: "asc" },
  onDelete = () => {},
  onView = () => {},
  onEdit = () => {},
}) => {
  // State management
  const initialData = data;
  const [displayData, setDisplayData] = useState(initialData);
  const [columns, setColumns] = useState();
  const [sortConfig, setSortConfig] = useState(defaultSort);
  const [searchTerm, setSearchTerm] = useState("");
  const [columnWidths, setColumnWidths] = useState({});
  const [selectedRows, setSelectedRows] = useState([]);
  const tableRef = useRef(null);
  const firstColRef = useRef(null);
  const lastColRef = useRef(null);

  // Generate columns from data keys
  const generateColumns = () => {
    if (initialData.length === 0) return [];
    
    const firstItemKeys = Object.keys(initialData[0]);
    
    return firstItemKeys.map((key) => {
      const defaultConfig = {
        key,
        title: key,
        sortable: true,
        baseWidth: 120,
      };
      return { ...defaultConfig, ...customColumnConfig[key] };
    });
  };

  // Row selection handlers
  const handleRowSelect = (rowId) => {
    setSelectedRows(prev => 
      prev.includes(rowId) 
        ? prev.filter(id => id !== rowId) 
        : [...prev, rowId]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === displayData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(displayData.map(row => row.id));
    }
  };

  // Sorting functionality
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

  // Search functionality
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredData = () => {
    if (!searchTerm) return initialData;
    return initialData.filter((item) => {
      return Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm)
      );
    });
  };

  // Sort indicator icon
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return "↕";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  // Empty state
  if (initialData.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No data available
      </div>
    );
  }

  // Initialize columns
  useEffect(() => {
    setColumns(generateColumns());
  }, []);

  // Apply search filter
  useEffect(() => {
    setDisplayData(filteredData());
  }, [searchTerm]);

  // Calculate column widths
  useEffect(() => {
    const updateWidths = () => {
      if (tableRef.current && firstColRef.current && lastColRef.current && columns?.length > 0) {
        const tableWidth = tableRef.current.offsetWidth;
        const firstColWidth = firstColRef.current.offsetWidth;
        const lastColWidth = lastColRef.current.offsetWidth;
        const availableWidth = tableWidth - firstColWidth - lastColWidth;

        const totalBaseWidth = columns.reduce((sum, col) => sum + col.baseWidth, 0);
        const expandFactor = Math.max(1, availableWidth / totalBaseWidth);

        const newWidths = {};
        columns.forEach((col) => {
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
      {/* Search input */}
      <div className="p-3 bg-gray-100 dark:bg-gray-700">
        <input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          placeholder="Search in all fields..."
          value={searchTerm}
        />
      </div>

      {/* Table structure */}
      <div className="flex w-full">
        {/* Fixed checkbox column */}
        <div
          ref={firstColRef}
          className="flex-shrink-0 sticky left-0 z-10 bg-white dark:bg-gray-800"
          style={{ width: 50 }}
        >
          <div className="p-3 bg-gray-100 dark:bg-gray-700 font-bold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-600 sticky top-0 z-20">
            <input
              type="checkbox"
              checked={selectedRows.length === displayData.length && displayData.length > 0}
              onChange={handleSelectAll}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
            />
          </div>

          {displayData.map((item, index) => (
            <div
              key={`checkbox-${item.id || index}`}
              className="p-3 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <input
                type="checkbox"
                checked={selectedRows.includes(item.id)}
                onChange={() => handleRowSelect(item.id)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
              />
            </div>
          ))}
        </div>

        {/* Main data columns */}
        <div className="flex-1 overflow-x-auto">
          <div className="flex flex-col">
            <div className="flex">
              {columns?.map((column) => (
                <div
                  key={`header-${column.key}`}
                  className="flex-shrink-0 p-3 bg-gray-100 dark:bg-gray-700 font-bold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-600 sticky top-0 z-10"
                  style={{ width: columnWidths[column.key] || column.baseWidth }}
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

            {displayData.map((item, rowIndex) => (
              <div 
                key={`row-${item.id || rowIndex}`} 
                className="flex hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                {columns?.map((column) => (
                  <div
                    key={`cell-${item.id || rowIndex}-${column.key}`}
                    className="flex-shrink-0 p-3 dark:text-white"
                    style={{ width: columnWidths[column.key] || column.baseWidth }}
                  >
                    {item[column.key]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Fixed action column */}
        <div
          ref={lastColRef}
          className="flex-shrink-0 sticky right-0 z-10 bg-white dark:bg-gray-800"
          style={{ width: 180 }}
        >
          <div className="p-3 bg-gray-100 dark:bg-gray-700 font-bold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-600 sticky top-0 z-20">
            Actions
          </div>

          {displayData.map((item, index) => (
            <div
              key={`action-${item.id || index}`}
              className="p-3 dark:text-white flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <button
                onClick={() => onView(item)}
                className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                View
              </button>
              <button
                onClick={() => onEdit(item)}
                className="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(item.id)}
                className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;