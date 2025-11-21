import React, { useState, useRef, useEffect } from "react";
import Tooltip from "@/components/Tooltip"; // بسته به ساختار پوشه‌ها مسیر را اصلاح کن

const MultiSelect = ({
  items = [],
  selectedItems = [],
  handleSelect,
  placeholder = "میتوانید چند مورد را انتخاب کنید",
  className,
  icon
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const filteredItems = items.filter((item) =>
    item.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleItemSelect = (item) => {
    if (selectedItems.includes(item.id)) {
      handleSelect( selectedItems.filter((selected) => selected !== item.id ))
    } else {
      handleSelect([...selectedItems, item.id]);
    }
  };

  const handleRemoveSelectedItem = (item) => {
    const updatedSelection = selectedItems.filter(
      (selected) => selected !== item.id
    );
    handleSelect(updatedSelection);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`inline-flex justify-between items-center px-2 py-2 text-center text-sm font-medium text-gray-900 bg-gray-100 dark:!bg-[#0a2d4d] border border-gray-300 dark:border-blue-500  rounded-md shadow-sm focus:outline-none ${className}`}
      >
        <div className="flex gap-1 h-full overflow-x-hidden overflow-y-hidden scrollbar-hidden w-full whitespace-nowrap">
          {selectedItems.length > 0 ? (
            filteredItems.map((item) => {
              if (selectedItems.includes(item.id)) {
                return (
                  <div
                    key={item.id}
                    className="bg-blue-100  text-blue-700 px-2 py-1 rounded-md flex items-center gap-1 "
                  >
                    {item.icon ? <div className="size-5" dangerouslySetInnerHTML={{ __html: item.icon }} /> : icon ? <span className="mr-1">{icon}</span> : <span className="mr-1"></span>}
                    {item.value}
                    <span
                      className="text-red-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveSelectedItem(item);
                      }}
                    >
                      &times;
                    </span>
                  </div>
                )
              }
            })

          ) : (
            <span className="flex justify-center items-center mr-2 text-gray-500">{placeholder}</span>
          )}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={"size-7 transition-all ml-2 text-gray-900 dark:text-white" + " " + (isOpen ? "rotate-180" : "")}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 z-50 dark:border-gray-700 rounded-md shadow-lg  p-2">
          <input
            type="text"
            placeholder="جستجو کن"
            className="w-full px-4 py-2 border-b dark:border-gray-700 focus:outline-none dark:bg-gray-800 "
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul className="max-h-40 overflow-y-auto mt-2 flex flex-col gap-1">
            {filteredItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleItemSelect(item)}
                className={`px-4 py-2 hover:opacity-80 rounded-md cursor-pointer ${selectedItems.includes(item.id)
                  ? "bg-gray-300 dark:bg-gray-700 text-blue-700  flex gap-x-4 "
                  : "bg-white hover:bg-gray-200 dark:bg-gray-900  flex gap-x-4 "
                  }`}
              >
                <span><div className="size-6 dark:text-white text-gray-900" dangerouslySetInnerHTML={{ __html: item.icon }} /></span>
                <span className="dark:text-white text-gray-900">{item.value}</span>
                {item.description && (
                  <Tooltip position="left" bg="dark" size="sm">
                    {item.description}
                  </Tooltip>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
