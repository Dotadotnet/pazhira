

function RangeInput({ data , onChange , value }) {
    console.log(data);
    
    return ( <input defaultValue={value} placeholder={ data.data.min + " - " + data.data.max + " " + data.data.nameFa } onBlur={(event) =>{ onChange(parseInt(event.target.value)) ; console.log(parseInt(event.target.value));
     }} className="dark:!bg-gray-800 w-40 focus:dark:!bg-gray-800 before::!hidden bg-gray-100 cursor-pointer focus:!bg-gray-100 !shadow-none dir-rtl !border-none" type="number" id="" /> );
}

export default RangeInput;