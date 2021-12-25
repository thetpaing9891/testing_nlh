import {Link, Outlet} from 'react-router-dom';

const WorkComponent = () => {
    return (
        <>
             <header className="about-masthead">
                <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div className="row d-flex justify-content-center">
                        <div className="col-8">
                            <div className="text-center">
                                <h3 className="text-white mx-auto mt-4 mb-2 text-uppercase">FEATURED TVC CAMPAIGNS</h3>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <Link to='/work/HMZ-1K2AWts' className="text-decoration-none">
                                            <img className="img-fluid" src="assets/img/work/work-01.png" alt="..." />
                                            <p className="py-2 text-white">PEP Solidified Milk Commercial</p>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4">
                                        <Link to='/work/axjAJ1vXrUc' className="text-decoration-none">
                                            <img className="img-fluid" src="assets/img/work/work-02.png" alt="..." />
                                            <p className="py-2 text-white">Nescafe Black Ice 15sec TVC</p> 
                                        </Link>
                                    </div>
                                    <div className="col-lg-4">
                                        <Link to='/work/2o1e7lC1Lw0' className="text-decoration-none">
                                            <img className="img-fluid" src="assets/img/work/work-03.png" alt="..." />
                                            <p className="py-2 text-white">Nescafe Latte 15sec TVC</p> 
                                        </Link>
                                    </div>
                                </div>
                                <div className="row my-4">
                                    <div className="col-lg-4">
                                        <Link to='/work/qkhqNVdwwKA' className="text-decoration-none">
                                            <img className="img-fluid" src="assets/img/work/work-04.png" alt="..." />
                                            <p className="py-2 text-white">L'oreal Micellar Water</p>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4">
                                        <Link to='/work/jDwzq2LAKVs' className="text-decoration-none">
                                            <img className="img-fluid" src="assets/img/work/work-05.png" alt="..." /> 
                                            <p className="py-2 text-white">Canal+ Pu Tu Tue Indent Video</p>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4">
                                        <Link to='/work/--yLsMYgZZI' className="text-decoration-none">
                                            <img className="img-fluid" src="assets/img/work/work-06.png" alt="..." />
                                            <p className="py-2 text-white">Marketplace Thadingyut Festival Promo</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="projects-section bg-light" id="projects">
                <div className="container px-4 px-lg-5">
                    {/* <!-- Featured Project Row--> */}
                    <h3 className="text-center mb-4">Music Videos</h3>
                   {/* <!-- Project One Row--> */}
                   <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div className="col-lg-6"><img className="img-fluid" src="assets/img/work/work-07.png" alt="..." /></div>
                        <div className="col-lg-6">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <Link to='/work/b1Pg4kAvk2Y' className="text-decoration-none">
                                        <div className="project-text w-100 my-auto text-center text-lg-left">
                                            <h4 className="text-white">Sandy Myint Lwin - Feat. XBox - အသဲကွဲမနေနဲ့</h4>
                                            <p className="mb-0 text-white-50">
                                            Directed by - Kaung Myat Kyaw Saman Luciano <br/>
                                            Director of Photography - Ko Ag Ko Moe Thorn</p>
                                            <hr className="d-none d-lg-block mb-0 ms-0" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Project Two Row--> */}
                    <div className="row gx-0 justify-content-center">
                        <div className="col-lg-6"><img className="img-fluid" src="assets/img/work/work-08.png" alt="..." /></div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <Link to='/work/4Df-7DPZU9Y' className="text-decoration-none">
                                        <div className="project-text w-100 my-auto text-center text-lg-right">
                                            <h4 className="text-white">X Box -အရှိုက်တည့်တည့်လေးပဲ</h4>
                                            <p className="mb-0 text-white-50">
                                            Here is another trailer video of X-Box Music Video by Green Box Production. The album is coming out soon from Bo Bo Entertainment
                                            </p>
                                            <hr className="d-none d-lg-block mb-0 me-0" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default WorkComponent