export default function Title() {
  return (
    <>
    <div className="col-12">
        <div className="section text-center">
            <h2 className="color-black justify-content-center row">
                <img src="/ghana.png" style={{ width: "5vw", marginRight:10, }} /> 
                2024 Election Results Live Summary 
                <img src="/ghana.png" style={{ width: "5vw", marginLeft:10, }} />
            </h2>
            <p className="color-black mt-3 mb-5 mx-auto">
                <b>
                <u>John Dramani Mahama (NDC)</u>
                </b>{" "}
                officially declared winner of the 2024 Presidential Elections with{" "}
                <br />
                56.55% of votes from all but 9 constituencies. 🎉 <br />
                {/*
                <a id="reload" href="javascript:void(0)" class="text-center color-black mb-5 mx-auto">
                    <u>
                        Click here to refresh
                    </u>
                </a>
                */}
            </p>
            {/*
            <p class="text-center color-black mb-5 mx-auto">
                Disclaimer: The results of the 2024 Ghana Presidential and Parliamentary elections presented here are provisional and not the official results. The Electoral Commission of Ghana remains the sole authority responsible for the declaration of official election results.
            </p>
            */}
        </div>
    </div>
    <div className="col-1">
        <img
        className="border-radius-bubble-1 d-none d-md-block"
        src="/img/116619170_889809.jpg"
        width="100%"
        alt=""
        />
    </div>
    <div className="col-10">
        <div className="progress w-label bg-linear-ndc">
        <div
            className="progress-bar bg-linear-npp"
            role="progressbar"
            style={{ width: "41.62%" }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            <span>41.62%</span>
        </div>
        <div
            className="progress-bar progress-bar-span bg-gray"
            role="progressbar"
            style={{ width: "1.83%" }}
            aria-valuenow={35}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            <span> </span>
        </div>
        <div
            className="progress-bar progress-bar-ndc bg-gray"
            role="progressbar"
            style={{ width: "0%" }}
            aria-valuenow={35}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            <span>56.55% </span>
        </div>
        <div
            className="bg-linear-ndc"
            role="progressbar"
            style={{ width: "0%" }}
            aria-valuenow={15}
            aria-valuemin={0}
            aria-valuemax={100}
        />
        </div>
        <div className="row">
        <div className="col-6">
            <img
            className="border-radius-bubble-1 d-block d-md-none my-2"
            src="/img/116619170_889809.jpg"
            width="50%"
            alt=""
            />
            <p className="color-black mb-2">
            <b>Dr Mahamudu Bawumia</b>
            </p>
            <p className="color-black mb-0">New Patriotic Party (NPP)</p>
            <p className="color-black mb-0">
            <b> 4,657,304 </b> votes (Out of national total)
            </p>
        </div>
        <div className="col-6" style={{ display: "grid" }}>
            <img
            style={{ justifySelf: "end !important" }}
            className="border-radius-bubble-1 d-block d-md-none my-2"
            src="/img/John_Dramani_Mahama_2014_(cropped).jpg"
            width="50%"
            alt=""
            />
            <p className="color-black mb-2 text-right">
            <b>John Dramani Mahama</b>
            </p>
            <p className="color-black mb-0 text-right">
            National Democratic Congress (NDC)
            </p>
            <p className="color-black mb-0 text-right">
            <b> 6,328,397 </b> votes (Out of national total)
            </p>
        </div>
        <div className="col-12 text-center mt-3 mt-md-2">
            <p className="color-black">
            Total Valid Votes: <b>11,191,422</b>
            </p>
        </div>
        </div>
    </div>
    <div className="col-1">
        <img
        className="border-radius-bubble-1 d-none d-md-block"
        src="/img/John_Dramani_Mahama_2014_(cropped).jpg"
        width="100%"
        alt=""
        />
    </div>
    </>
  );
}