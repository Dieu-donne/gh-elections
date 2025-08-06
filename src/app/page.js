import Image from "next/image";
import Title from "@/components/Title";
import RegMap from "@/components/RegMap";
import ParlMap from "@/components/ParlMap";

export default function Home() {
  return (
    <div className="section over-hide min-full-height">
		  <div className="section-1400">
			  <div className="container">
          <div className="row mt-5">
            <Title />
          </div>
          <div className="row mt-5">
            <RegMap />
            <ParlMap />
          </div>
        </div>
      </div>
    </div>
  );
}
