const ContactComponent = () => {
    return (
        <>
            <header className="about-masthead">
                <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12">
                        <form>
                            <div className="row text-white">
                                <div className="col-lg-6">
                                    <h3>Say Hello :)</h3>
                                </div>
                                <div className="col-lg-6">
                                    <p><a href="mailto:nyilinhan@gmail.com">nyilinhan@gmail.com</a><br/>+95 9421025592</p>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nameInput" className="form-label text-white">Enter Your Name <span>*</span></label>
                                <input type="text" className="form-control" placeholder="Name" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label text-white">Enter Your Email <span>*</span></label>
                                <input type="email" className="form-control" placeholder="Email" required/>
                                <div id="textHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="subjectInput" className="form-label text-white">Enter Your Subject <span>*</span></label>
                                <input type="text" className="form-control" placeholder="Subject" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="subjectInput" className="form-label text-white">Enter Your Message <span>*</span></label>
                                <textarea className="form-control" placeholder="Message" required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Send</button>
                        </form>
                        </div>
                        
                    </div>
                </div>
            </header>
        </>
    )
}
export default ContactComponent