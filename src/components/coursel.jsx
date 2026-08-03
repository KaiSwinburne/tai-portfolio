import { useState } from "react";
import { ImageModal } from "@/components/image-modal";
import {MoveLeft, MoveRight} from "lucide-react";

export const Carousel = ({img_dict=[]}) => {

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const goToPrevious = () => {
        setActiveItemIndex((current) => (current === 0 ? img_dict.length - 1 : current - 1));
    };

    const goToNext = () => {
        setActiveItemIndex((current) => (current === img_dict.length - 1 ? 0 : current + 1));
    };

    return (
        <div className="py-8">
            <div className="py-2 flex items-center justify-between">
                <button
                    onClick={goToPrevious}
                    className="rounded-full bg-primary hover:cursor-pointer hover:bg-highlight hover:border-highlight transition-all duration-300 px-2 py-2"
                >
                    <MoveLeft className="size-5 lg:size-30"/>
                </button>

                {/*Contents*/}
                <div className="flex flex-col items-center px-4">
                    {/*Images */}
                    <ImageModal img={img_dict[activeItemIndex].image} alt={img_dict[activeItemIndex].subtitle}/>

                    <p className="font-space-grotesk text-[14px] lg:text-[16px] italic text-gray-300">{img_dict[activeItemIndex].subtitle}</p>
                </div>

                <button
                    onClick={goToNext}
                    className="rounded-full bg-primary hover:cursor-pointer hover:bg-highlight hover:border-highlight transition-all duration-300 px-2 py-2"
                >
                    <MoveRight className="size-5 lg:size-30"/>
                </button>
            </div>
            

            {/* Item indicator */}
            <div className="flex justify-center items-center gap-5">
                {/* Map Indicator to the carousel data index */}
                {img_dict.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        aria-label={`Show ${img_dict[index]} skills`}
                        aria-current={index === activeItemIndex ? "true" : undefined}
                        className={`h-4 w-4 rounded-full border-2 transition-colors ${
                            index === activeItemIndex
                                ? "bg-highlight border-highlight"
                                : "border-foreground/40 "
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};