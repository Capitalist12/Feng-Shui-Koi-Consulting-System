import { useEffect, useState } from "react";
import FormModal from "./CreateKoiForm/FormModal";
import { Tooltip, Typography } from "antd";
import { TbLetterP, TbNumber1 } from "react-icons/tb";
import TableKoi from "./KoiTable/TableKoi";
import { getAllKoiFish } from "../../services/koiAPIService";
import BackToTopBtn from "../Utils/BackToTopBtn";
import { CircleLoading } from "../Utils/Loading";

const KoiContainer = () => {
    const [data, setData] = useState([]);
    const [isPaginate, setIsPaginate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchAPI = async () => {
        const response = await getAllKoiFish();
        response && response.data.code === 1000 && response.data.result.length > 0
            ? setData(response.data.result)
            : setData([]);
    };

    useEffect(() => {
        fetchAPI();
    }, []);

    const togglePaginate = () => {
        setIsPaginate(!isPaginate);
    };

    return (
        <div>
            {isLoading && <CircleLoading />}
            <div className='content-header'>
                <div>
                    <FormModal setIsLoading={setIsLoading} fetchAPI={fetchAPI} />
                </div>
                <div>
                    Chế độ xem
                    <div className='page-break' onClick={togglePaginate}>
                        <Tooltip placement="bottomLeft" title={isPaginate ? "Phân trang" : "Một trang"}>
                            <span>
                                {isPaginate ? <TbLetterP /> : <TbNumber1 />}
                            </span>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div>
                <TableKoi data={data} fetchAPI={fetchAPI} isPaginate={isPaginate} />
            </div>
            {!isPaginate && <BackToTopBtn />}
        </div>
    );
}

export default KoiContainer;
