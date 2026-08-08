export const SkillContainer = ({ itemsList = {}, heading = "" }) => {
    const list = itemsList;
    return (
        <div className="flex flex-col justify-center items-center py-5 w-fit">
            <h1 className="font-space-grotesk text-3xl lg:text-4xl">{heading}</h1>

            {/*Underline */}
            <div className="mt-2 h-1 w-full bg-highlight" />
            
            <div className="py-4">

                {/* Map the dictionary items into contents */}
                {Object.entries(list).map(([key,value]) => (
                    <div key={key} className="flex flex-row items-center py-2">
                        <div className="px-4">
                            <img src={value} alt={key} className="w-15 h-auto object-contain" ></img>
                        </div>
                        <p className="font-space-grotesk text-2xl lg:text-3xl">{key}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};