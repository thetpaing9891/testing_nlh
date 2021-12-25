import {Link, Outlet} from 'react-router-dom';

const HomeComponent = () => {
    return (
        <>
        <header className="masthead">
                <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <h1 className="mx-auto my-0 text-uppercase">Nyi Lin Han</h1>
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">PHOTOGRAPHER</h2>
                            <a className="btn btn-primary" href="#about">More about me</a>
                        </div>
                    </div>
                </div>
            </header>
            <section className="projects-section bg-light" id="projects">
                <div className="container px-4 px-lg-5">
                    {/* <!-- Featured Project Row--> */}
                    <h2 className="text-center mb-4">My Work</h2>
                    <Link to='/work/HMZ-1K2AWts' className="text-decoration-none">
                        <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                            <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src="assets/img/work/work-01.png" alt="..." /></div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="featured-text text-center text-lg-left">
                                    <h4>PEP Solidified Milk Commercial</h4>
                                    <p className="text-black-50 mb-0">Third Commercial for PEP with Green Screen Productions</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* <!-- Project One Row--> */}
                    <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div className="col-lg-6"><img className="img-fluid" src="assets/img/work/work-02.png" alt="..." /></div>
                        <div className="col-lg-6">
                            <Link to='/work/axjAJ1vXrUc' className="text-decoration-none">
                                <div className="bg-black text-center h-100 project">
                                    <div className="d-flex h-100">
                                        <div className="project-text w-100 my-auto text-center text-lg-left">
                                            <h4 className="text-white">Nescafe Black Ice 15sec TVC</h4>
                                            <p className="mb-0 text-white-50">Nescafe Promo TVC<br/>
                                            Production - Green Screen Productions<br/>
                                            Director - Saman Lucianio</p>
                                            <hr className="d-none d-lg-block mb-0 ms-0" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- Project Two Row--> */}
                    <div className="row gx-0 justify-content-center">
                        <div className="col-lg-6"><img className="img-fluid" src="assets/img/work/work-03.png" alt="..." /></div>
                        <div className="col-lg-6 order-lg-first">
                            <Link to='/work/2o1e7lC1Lw0' className="text-decoration-none">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="text-white">Nescafe Latte 15sec TVC</h4>
                                        <p className="mb-0 text-white-50">
                                        Nescafe Promo TVC <br/>
                                        Production - Green Screen Productions <br/>
                                        Director - Saman Lucianio
                                        </p>
                                        <hr className="d-none d-lg-block mb-0 me-0" />
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-section text-center" id="about">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="text-white mb-4">About Me</h2>
                            <p className="text-white-50">
                            Nyi Lin Han started his career in Yangon after getting his bachelor degree from Oxford Brookes University. After coming back to Yangon, he started working in E-commerce industries and advertising agencies. Then, he moved into film industry with the help of Kaung Myat Kyaw and started learning and working as a producer for 4 years from the start of Green Box to Green Screen which become established itself as one of Myanmar’s best video production companies, delivering professional, compelling and memorable films for clients in all sorts of businesses and for all sorts of budgets. Today Green Screen Productions works for a number of agencies, charities and individual companies delivering a huge variety of contents.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomeComponent