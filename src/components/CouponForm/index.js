import React from 'react';
const CouponForm = () => {

    return (
        <>
            <h2 className="h3 mb-3 text-black font-heading-serif">Coupon Code</h2>
            <div className="p-3 border">
                <label htmlFor="couponcode" className="text-black mb-3">Enter your coupon code if you have one</label>
                <div className="input-group w-75">
                    <input type="text" className="form-control" id="couponcode" placeholder="Coupon Code" aria-label="Coupon Code"
                        aria-describedby="couponcode-apply" />
                    <div className="input-group-append">
                        <button className="btn btn-primary btn-sm rounded px-4" type="button" id="couponcode-apply">Apply</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CouponForm;