import React from 'react';

const CouponForm = ()=>{

    return (
    <div className="col-md-6">
    <div className="row mb-5">
        <div className="col-md-12">
            <h2 className="h3 mb-3 text-black font-heading-serif">Coupon Code</h2>
            <div className="p-3 p-lg-5 border">

                <label htmlFor="c_code" className="text-black mb-3">Enter your coupon code if you have one</label>
                <div className="input-group w-75">
                    <input type="text" className="form-control" id="c_code" placeholder="Coupon Code" aria-label="Coupon Code"
                        aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary btn-sm rounded px-4" type="button" id="button-addon2">Apply</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>);
}

export default CouponForm;