import React from "react";
import CardSwap, { Card } from "./CardSwap";

const GlassCardCarousel = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24">
      <div className="w-full max-w-6xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
        <CardSwap
          cardDistance={30}
          verticalDistance={40}
          delay={5000}
          pauseOnHover={true}
        >
          {/* Card 1 */}
          <Card className="
            w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[700px] lg:max-w-[800px]
            aspect-[16/9] sm:aspect-[16/9] md:aspect-[16/9]
            bg-gradient-to-br from-white/15 to-white/5
            backdrop-blur-2xl
            rounded-3xl
            border border-white/20
            shadow-2xl shadow-black/30
            p-4 sm:p-6 md:p-8
            transition-all duration-500 ease-out
            hover:scale-105 hover:shadow-3xl hover:border-white/30
            group
            overflow-hidden
          ">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <img
                src="https://picsum.photos/1600/900?random=1"
                alt="Beautiful Landscape"
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Stunning Visuals</h3>
                <p className="text-white/90 text-sm sm:text-base">Experience breathtaking imagery</p>
              </div>
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="
            w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[700px] lg:max-w-[800px]
            aspect-[16/9] sm:aspect-[16/9] md:aspect-[16/9]
            bg-gradient-to-br from-white/15 to-white/5
            backdrop-blur-2xl
            rounded-3xl
            border border-white/20
            shadow-2xl shadow-black/30
            p-4 sm:p-6 md:p-8
            transition-all duration-500 ease-out
            hover:scale-105 hover:shadow-3xl hover:border-white/30
            group
            overflow-hidden
          ">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <img
                src="https://picsum.photos/1600/900?random=2"
                alt="Urban Architecture"
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Urban Excellence</h3>
                <p className="text-white/90 text-sm sm:text-base">Modern architecture at its finest</p>
              </div>
            </div>
          </Card>

          {/* Card 3 */}
          <Card className="
            w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[700px] lg:max-w-[800px]
            aspect-[16/9] sm:aspect-[16/9] md:aspect-[16/9]
            bg-gradient-to-br from-white/15 to-white/5
            backdrop-blur-2xl
            rounded-3xl
            border border-white/20
            shadow-2xl shadow-black/30
            p-4 sm:p-6 md:p-8
            transition-all duration-500 ease-out
            hover:scale-105 hover:shadow-3xl hover:border-white/30
            group
            overflow-hidden
          ">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <img
                src="https://picsum.photos/1600/900?random=3"
                alt="Natural Beauty"
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Natural Wonders</h3>
                <p className="text-white/90 text-sm sm:text-base">Discover the beauty of nature</p>
              </div>
            </div>
          </Card>
        </CardSwap>
      </div>
    </div>
  );
};

export default GlassCardCarousel;