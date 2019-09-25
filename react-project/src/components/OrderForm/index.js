import React from 'react';

const OrderForm = () => (
    <div className="row mb-5">
        <div className="col-md-12">
            <h2 className="h3 mb-3 text-black font-heading-serif">Your Order</h2>
            <div className="p-3 p-lg-5 border">
                <table className="table site-block-order-table mb-5">
                    <thead>
                        <tr>
                        <td>Product</td>
                        <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bioderma <strong className="mx-2">x</strong> 1</td>
                            <td>$55.00</td>
                        </tr>
                        <tr>
                            <td>Ibuprofeen <strong className="mx-2">x</strong> 1</td>
                            <td>$45.00</td>
                        </tr>
                        <tr>
                            <td className="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                            <td className="text-black">$350.00</td>
                        </tr>
                        <tr>
                            <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                            <td className="text-black font-weight-bold"><strong>$350.00</strong></td>
                        </tr>
                    </tbody>
                </table>

                <div className="border mb-3 p-3 rounded">
                    <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsebank" role="button"
                        aria-expanded="false" aria-controls="collapsebank">Direct Bank Transfer</a></h3>

                    <div className="collapse" id="collapsebank">
                        <div className="py-2 pl-0">
                            <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the
                          payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                        </div>
                    </div>
                </div>

                <div className="border mb-3 p-3 rounded">
                    <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsecheque" role="button"
                        aria-expanded="false" aria-controls="collapsecheque">Cheque Payment</a></h3>

                    <div className="collapse" id="collapsecheque">
                        <div className="py-2 pl-0">
                            <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the
                          payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                        </div>
                    </div>
                </div>

                <div className="border mb-5 p-3">
                    <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsepaypal" role="button"
                        aria-expanded="false" aria-controls="collapsepaypal">Paypal</a></h3>

                    <div className="collapse" id="collapsepaypal">
                        <div className="py-2 pl-0">
                            <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the
                          payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg btn-block" >Place
                      Order</button>
                </div>

            </div>
        </div>
    </div>
)

export default OrderForm;