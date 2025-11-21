

function OneOptionInput({ data, onChange, value }) {
    return (
        <select onChange={(event) =>{ onChange(event.target.value) }} dir="rtl" className="dark:!bg-gray-800 focus:dark:!bg-gray-800 before::!hidden bg-gray-100 cursor-pointer focus:!bg-gray-100 !shadow-none dir-rtl !border-none" >
            <option value="" disabled selected hidden>موردی انتخاب نشده</option>
            {
                data.data.map((item) => (<option selected={ item.nameEn == value ? true : false } value={item.nameEn}>{item.nameFa}</option>))
            }
        </select>
    );
}

export default OneOptionInput;