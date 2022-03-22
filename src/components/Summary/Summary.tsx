import { FC, useState } from "react";
import './Summary.scss'

const Summary: FC<any> = (props: any) => {
    const [summaryDetails] = useState(props.details)
    return summaryDetails && (
        <div className='summaryCard infoCard mt-3 px-4 py-3'>
            <div className='cardTitle'>
                Summary
            </div>
            <div className='summary'>
                {summaryDetails.summary}
            </div>
        </div>
    )
}
export default Summary