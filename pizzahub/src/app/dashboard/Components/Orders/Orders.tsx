import OrderRow from "../OrderRow"

const orders = [
    {name: 'Gabriel', table: 1, id: 'djasdasdkjasldkadla'},
    {name: 'Maria', table: 2, id: 'djasdasdkjasldkadla'},
    {name: 'Rozilene', table: 3, id: 'djasdasdkjasldkadla'},
    {name: 'Gueriton', table: 4, id: 'djasdasdkjasldkadla'},
]
export default function Order(){
    return(
        <div className="flex flex-col items-center w-96 border-2 rounded-lg">
            <h1>Orders</h1>
            <div className="flex flex-col w-full">
                <ul className="flex flex-col justify-center items-center w-full">
                    {
                        orders.map((order)=> {
                            return <OrderRow name={order.name} table={order.table} id={order.id} />
                        } )
                    }                    
                </ul>
            </div>
        </div>
    )
}