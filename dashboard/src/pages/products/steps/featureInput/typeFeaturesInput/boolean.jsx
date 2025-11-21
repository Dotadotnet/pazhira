import StatusSwitch from "@/components/shared/button/StatusSwitch";

function BooleanInput({ data , onChange , value }) {
    return ( <StatusSwitch defaultChecked={value} onChange={onChange} /> );
}

export default BooleanInput;