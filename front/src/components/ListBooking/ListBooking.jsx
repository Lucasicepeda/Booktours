import { useEffect } from "react";
import { getBookingByUser } from "../../helpers/getBookingByUser";

const ListBooking = () => {
    useEffect(() => {
        const data = async () => {
            const list = await getBookingByUser()
            console.log(list);
        }
        data()
    }, [])
    return (
        <div>
            {/* <br />
            <br />
            <br />
            <br />
            <br /> */}
            <h2>getBookingByUser</h2>
        </div>
    )
}

export default ListBooking
