export default function footer () {
    return(
        <>
        <div
        className="section over-hide padding-top pb-4 bg-white section-background-1"
        id="footer"
        >
        <div className="section-1400 z-bigger">
            <div className="container-fluid">
            <div className="row text-center text-md-left">
                <div className="col-md-auto">
                    <a
                        href="https://www.instagram.com/internetpeoplehq/"
                        style={{ color: "#000000" }}
                        className="link"
                    >
                        <i className="uil uil-instagram size-20" />
                    </a>
                    <a
                        href="https://x.com/intpeoplehq"
                        style={{ color: "#000000" }}
                        className="link mx-3"
                    >
                        <i className="uil uil-twitter size-20" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/internet-people-hq/"
                        style={{ color: "#000000" }}
                        className="link"
                    >
                        <i className="uil uil-linkedin size-20" />
                    </a>
                </div>

                <div className="col-md order-md-first">
                <p className="mb-0 size-14 w-100 color-black mt-1 font-weight-500">
                    Powered by <a className="color-black" href="https://myinternetpeople.com"> <u>Internet People</u> ©</a> | <a className="color-black" href="/sources">Sources &amp; Credits</a>
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div className="progress-wrap">
        <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
        >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
        </div>
        </>

    );
}