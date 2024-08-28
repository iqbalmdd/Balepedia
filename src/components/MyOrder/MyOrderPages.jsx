import React from 'react'
import './MyOrderPage.css'
import Table from '../Common/Table'

const MyOrder = () => {
  return (
    <section className="align_center myorder_page">
        <Table headings={["Order", "Products", "Total", "Status"]}>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Iphone 14, Power Bank</td>
                    <td>Rp15.500.000</td>
                    <td>Shipped</td>
                </tr>
            </tbody>
        </Table>
    </section>
  )
}

export default MyOrder