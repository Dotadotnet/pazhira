import { useState, useRef, useEffect } from "react";

const Dropdown = ({
  items = [],
  value,
  handleSelect,
  onChange,
  className = "h-12 w-full",
  isReadOnly = false,
  iconOnly = false,
  placeholder = "موردی انتخاب نشده است"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [selectedItem, setSelectedItem] = useState(value);

  const filteredItems = items.filter(
    (item) => typeof item?.value === "string" && item.value.includes(searchTerm)
  );

  const handleItemSelect = (id) => {
    if (!isReadOnly) {
      setSelectedItem(id);
      if (handleSelect) {
        handleSelect(id);
      } else if (onChange) {
        onChange(id);
      }
      setIsOpen(false);
      setTooltipContent("");
    }
  };

  const handleMouseEnter = (e, description) => {
    const rect = e.target.getBoundingClientRect();
    setTooltipContent(description);
    setTooltipPosition({
      top: rect.top + window.scrollY,
      left: rect.right + 10
    });
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  const item = items.filter((item) => {
    if (item.id == selectedItem) {
      return (item)
    }
  })[0]

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !isReadOnly && setIsOpen((prev) => !prev)}
        className={`inline-flex justify-between items-center px-4 py-2 text-center text-sm font-medium text-gray-700 bg-white dark:!bg-[#0a2d4d] border border-gray-300 dark:border-blue-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 ${className} ${isReadOnly ? " opacity-50" : ""
          }`}
        disabled={isReadOnly}
      >
        <span className="ml-2  flex justify-center text-center">
          {
            item ?
              iconOnly && item?.icon ? (
                <div className="w-6 h-6"
                  dangerouslySetInnerHTML={{ __html: item.icon }} />
              ) : (
                <div className="flex items-center dark:text-gray-100 text-gray-800 gap-2 ">
                  <span
                    className={"w-5 h-5 dark:text-gray-100 text-gray-800" + (item?.icon)}
                    dangerouslySetInnerHTML={{ __html: item?.icon }}
                  />
                  <span className="dark:text-gray-100 text-gray-800">{item?.title || item?.value}</span>
                </div>
              )
              :
              placeholder
          }
        </span>
        {!isReadOnly && !iconOnly && (
          <span className="dark:text-gray-100">
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
          </span>
        )}
      </button>
      {isOpen && (
        <ul className="absolute max-h-60 overflow-y-auto  mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 !z-50 dark:border-gray-700 rounded-md shadow-lg  p-2">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemSelect(item.id)}
              onMouseEnter={(e) => handleMouseEnter(e, item.description)}
              onMouseLeave={handleMouseLeave}
              className={`marker:relative mt-1 bg-gray-100 hover:bg-blue-100 ${iconOnly ? "flex justify-center" : "px-2 py-2"
                } dark:bg-gray-700 dark:hover:bg-gray-900 rounded-md cursor-pointer group`}
            >
              {iconOnly ? (
                <div className="!w-6 !h-6"
                  dangerouslySetInnerHTML={{ __html: item.icon }} />
              ) : (
                <div className="flex items-center gap-2">
                  <div
                    className="!w-5 !h-5"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                  <span>{item.title || item.value}</span>
                </div>
              )}
            </div>
          ))}
        </ul>
      )}
      {tooltipContent && (
        <div
          className="absolute bg-red-600/70 text-white text-xs  py-1 px-2 rounded-md shadow-lg backdrop-blur-md text-justify transition-opacity duration-200"
          style={{
            left: "30%",
            transform: "translateX(-50%)",
            marginTop: "4px",
            whiteSpace: "wrap",
            pointerEvents: "none",
            zIndex: 50,
            opacity: tooltipContent ? 1 : 0
          }}
        >
          {tooltipContent}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
