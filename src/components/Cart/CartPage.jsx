import React from "react";
import "./CartPage.css";
import user from "../../assets/image/user.webp";
import Table from "../Common/Table";
import QuantityInput from "../SingleProduct/QuantityInput";
import remove from "../../assets/image/remove.png"

const CartPage = () => {
  return (
    <section className="align_center cart_page">
      <div className="align_center user_info">
        <img src={user} alt="user profile" />
        <div>
          <p className="user_name">Iqbal</p>
          <p className="user_email">bale@gmail.com</p>
        </div>
      </div>

      <Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}>
        <tbody>
            <tr>
                <td>Iphone 14</td>
                <td>Rp14.000.000</td>
                <td className="align_center table_quantity_input">
                    <QuantityInput />
                </td>
                <td>Rp14.000.000</td>
                <td>
                  <img src={remove} alt="remove icon" className="cart_remove_icon"/>
                </td>
            </tr>
        </tbody>
      </Table>

      <table className="cart_bill">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>Rp13.999.999</td>
          </tr>
          <tr>
            <td>Shipping Charge</td>
            <td>Rp0</td>
          </tr>
          <tr className="cart_bill_final">
            <td>Total</td>
            <td>Rp13.999.999</td>
          </tr>
        </tbody>
      </table>

      <button className="search_button checkout_button">Checkout</button>
    </section>
  );
};

export default CartPage;
