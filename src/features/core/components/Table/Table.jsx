import React, { useState, useEffect, useRef } from 'react';

const PerfectResponsiveTable = () => {
  // داده‌های نمونه
  const initialData = [
    { id: 1, name: 'علی', age: 28, job: 'توسعه‌دهنده', city: 'تهران', country: 'ایران', score: 95, status: 'فعال', date: '1402/05/15' },
    { id: 2, name: 'سارا', age: 32, job: 'طراح', city: 'مشهد', country: 'ایران', score: 88, status: 'غیرفعال', date: '1402/04/22' },
    { id: 3, name: 'جان', age: 45, job: 'مدیر', city: 'نیویورک', country: 'آمریکا', score: 76, status: 'فعال', date: '1401/12/03' },
  ];

  // ستون‌های جدول با عرض انعطاف‌پذیر
  const columns = [
    { key: 'name', title: 'نام', sortable: true, baseWidth: 120 },
    { key: 'age', title: 'سن', sortable: true, baseWidth: 80 },
    { key: 'job', title: 'شغل', sortable: true, baseWidth: 150 },
    { key: 'city', title: 'شهر', sortable: false, baseWidth: 120 },
    { key: 'country', title: 'کشور', sortable: true, baseWidth: 120 },
    { key: 'score', title: 'امتیاز', sortable: true, baseWidth: 80 },
    { key: 'status', title: 'وضعیت', sortable: false, baseWidth: 120 },
    { key: 'date', title: 'تاریخ ثبت', sortable: true, baseWidth: 120 }
  ];

  const [displayData, setDisplayData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');
  const tableRef = useRef(null);
  const firstColRef = useRef(null);
  const lastColRef = useRef(null);
  const [columnWidths, setColumnWidths] = useState({});

  // محاسبه عرض ستون‌ها به صورت دینامیک
  useEffect(() => {
    const updateWidths = () => {
      if (tableRef.current && firstColRef.current && lastColRef.current) {
        const tableWidth = tableRef.current.offsetWidth;
        const firstColWidth = firstColRef.current.offsetWidth;
        const lastColWidth = lastColRef.current.offsetWidth;
        const availableWidth = tableWidth - firstColWidth - lastColWidth +1; // 2px برای border
        
        // محاسبه مجموع عرض پایه ستون‌های میانی
        const totalBaseWidth = columns.slice(1, -1).reduce((sum, col) => sum + col.baseWidth, 0);
        
        // محاسبه ضریب گسترش
        const expandFactor = Math.max(1, availableWidth / totalBaseWidth);
        
        // محاسبه عرض نهایی هر ستون
        const newWidths = {};
        columns.slice(1, -1).forEach(col => {
          newWidths[col.key] = Math.floor(col.baseWidth * expandFactor);
        });
        
        setColumnWidths(newWidths);
      }
    };

    updateWidths();
    window.addEventListener('resize', updateWidths);
    return () => window.removeEventListener('resize', updateWidths);
  }, []);

  // تابع مرتب‌سازی
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredData()].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setDisplayData(sortedData);
  };

  // تابع جستجوی جامع
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  // فیلتر داده‌ها بر اساس جستجو
  const filteredData = () => {
    if (!searchTerm) return initialData;
    
    return initialData.filter(item => {
      return Object.values(item).some(value => 
        String(value).toLowerCase().includes(searchTerm)
      );
    });
  };

  // اعمال فیلتر هنگام تغییر جستجو
  useEffect(() => {
    setDisplayData(filteredData());
  }, [searchTerm]);

  // نمایش آیکون مرتب‌سازی
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return '↕';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="w-full overflow-hidden rounded-lg shadow dark:shadow-gray-700" ref={tableRef}>
      {/* فیلد جستجوی جامع */}
      <div className="p-3 bg-gray-100 dark:bg-gray-700">
        <input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          placeholder="جستجو در همه فیلدها..."
          value={searchTerm}
        />
      </div>

      {/* جدول اصلی */}
      <div className="flex w-full">
        {/* ستون اول (ثابت) */}
        <div 
          ref={firstColRef}
          className="flex-shrink-0 sticky left-0 z-10 bg-white dark:bg-gray-800"
          style={{ width: columns[0].baseWidth }}
        >
          {/* هدر */}
          <div className="p-3 bg-gray-100 dark:bg-gray-700 font-bold text-gray-700 dark:text-white border-b border-r border-gray-200 dark:border-gray-600 sticky top-0 z-20">
            <div className="flex items-center justify-between">
              {columns[0].title}
              <button 
                onClick={() => requestSort(columns[0].key)}
                className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none"
              >
                {getSortIcon(columns[0].key)}
              </button>
            </div>
          </div>
          
          {/* داده‌ها */}
          {displayData.map((item, index) => (
            <div 
              key={`first-${item.id}`}
              className={`p-3 border-b border-r border-gray-200 dark:border-gray-600 dark:text-white ${
                index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'
              }`}
            >
              {item[columns[0].key]}
            </div>
          ))}
        </div>

        {/* ستون‌های میانی (با عرض دینامیک) */}
        <div className="flex-1 overflow-x-auto">
          <div className="flex flex-col">
            {/* هدرهای ستون‌های میانی */}
            <div className="flex">
              {columns.slice(1, -1).map((column) => (
                <div
                  key={`mid-header-${column.key}`}
                  className="flex-shrink-0 p-3 bg-gray-100 dark:bg-gray-700 font-bold text-gray-700 dark:text-white border-b border-r border-gray-200 dark:border-gray-600 sticky top-0 z-10"
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

            {/* داده‌های ستون‌های میانی */}
            {displayData.map((item, rowIndex) => (
              <div 
                key={`mid-row-${item.id}`} 
                className="flex"
              >
                {columns.slice(1, -1).map((column) => (
                  <div
                    key={`mid-cell-${item.id}-${column.key}`}
                    className={`flex-shrink-0 p-3 border-b border-r border-gray-200 dark:border-gray-600 dark:text-white ${
                      rowIndex % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'
                    }`}
                    style={{ width: columnWidths[column.key] || column.baseWidth }}
                  >
                    {item[column.key]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ستون آخر (ثابت) */}
        <div 
          ref={lastColRef}
          className="flex-shrink-0 sticky right-0 z-10 bg-white dark:bg-gray-800"
          style={{ width: columns[columns.length - 1].baseWidth }}
        >
          {/* هدر */}
          <div className="p-3 bg-gray-100 dark:bg-gray-700 font-bold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-600 sticky top-0 z-20">
            <div className="flex items-center justify-between">
              {columns[columns.length - 1].title}
              <button 
                onClick={() => requestSort(columns[columns.length - 1].key)}
                className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none"
              >
                {getSortIcon(columns[columns.length - 1].key)}
              </button>
            </div>
          </div>
          
          {/* داده‌ها */}
          {displayData.map((item, index) => (
            <div 
              key={`last-${item.id}`}
              className={`p-3 border-b border-gray-200 dark:border-gray-600 dark:text-white ${
                index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'
              }`}
            >
              {item[columns[columns.length - 1].key]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerfectResponsiveTable;