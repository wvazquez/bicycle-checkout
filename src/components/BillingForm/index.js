import React from 'react';


const BillingForm = ()=> (
<div className="col-md-6 mb-5 mb-md-0">
            <h2 className="h3 mb-3 text-black font-heading-serif">Billing Details</h2>
            <div className="p-3 p-lg-5 border">
              
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="c_fname" name="c_fname"/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="c_lname" name="c_lname"/>
                </div>
              </div>
    
              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="c_companyname" className="text-black">Company Name </label>
                  <input type="text" className="form-control" id="c_companyname" name="c_companyname"/>
                </div>
              </div>
    
              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="c_address" className="text-black">Address <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="c_address" name="c_address" placeholder="Street address"/>
                </div>
              </div>
    
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)"/>
              </div>
    
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="c_state_country" className="text-black">State / Country <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="c_state_country" name="c_state_country"/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="c_postal_zip" className="text-black">Posta / Zip <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="c_postal_zip" name="c_postal_zip"/>
                </div>
              </div>
    
              <div className="form-group row mb-5">
                <div className="col-md-6">
                  <label htmlFor="c_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="c_email_address" name="c_email_address"/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="c_phone" className="text-black">Phone <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="c_phone" name="c_phone" placeholder="Phone Number"/>
                </div>
              </div>
    
              <div className="form-group">
                <label htmlFor="c_create_account" className="text-black" data-toggle="collapse" href="#create_an_account"
                  role="button" aria-expanded="false" aria-controls="create_an_account"><input type="checkbox" value="1"
                    id="c_create_account"/> Create an account?</label>
                <div className="collapse" id="create_an_account">
                  <div className="py-2">
                    <p className="mb-3">Create an account by entering the information below. If you are a returning customer
                      please login at the top of the page.</p>
                    <div className="form-group">
                      <label htmlFor="c_account_password" className="text-black">Account Password</label>
                      <input type="email" className="form-control" id="c_account_password" name="c_account_password"
                        placeholder=""/>
                    </div>
                  </div>
                </div>
              </div>
    
    
              
    
            </div>
          </div>
          
);

export default BillingForm;