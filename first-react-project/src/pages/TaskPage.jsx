import { useNavigate, useSearchParams } from "react-router";
import { ChevronLeftIcon } from "lucide-react";
import Title from "../components/Title.jsx";

function TaskPage(){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return(
        <div className="flex justify-center w-screen h-screen p-6 bg-slate-500">
            <div className="w-[500px] space-y-4">
                <div className="relative flex justify-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-0 bottom-0 left-0 text-slate-100">
                        <ChevronLeftIcon />
                    </button>
                    <Title>Detalhes da Tarefa</Title>
                </div>

                <div className="p-4 bg-slate-200 rounded-md">
                    <h2 className="text-xl font-bold text-slate-600">{title}</h2>
                    <p className="text-slate-600">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskPage;
