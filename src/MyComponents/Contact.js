import React from 'react'

export const Contact = () => {
    let mystyle={
        color:"white"
    }
    return (
        <>
            <div className="container" style={mystyle}>
                <h1 className="my-3 ">Contact Us</h1>
                <form >
                    <div className="form-group">
                        <label htmlFor="name"> Name:</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your Name" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="email"> Email Address:</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="phone"> Phone Number:</label>
                        <input type="phone" className="form-control" id="phone" name="phone" placeholder="Enter your phone number" />
                    </div>
                    <br />

                    <div className="form-group">
                        <label htmlFor="message"> Message:</label>
                        <textarea name="message" className="form-control" id="message" cols="30" rows="10"
                            placeholder="Enter your message"></textarea>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary my-2" >Submit</button>
                </form>
            </div>
        </>
    )
}
