import { useParams } from "react-router-dom";

export default function noneType({ value }) {
    const { table, field, id, lang } = useParams();

    return (
        <>
            <div className="text-center text-lg">
                نوع این بخش انتخاب نشده است
            </div>
            <div className="text-center text-2xl text-blue-600 mt-9">
                <a href={"/edite/choice-type/" + table + "/" + field }>
                    از این لینک برای تعیین نوع این بخش اقدام کنید
                </a>
            </div>
        </>

    );
} 