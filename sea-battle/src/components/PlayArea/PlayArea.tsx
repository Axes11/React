import { useState } from "react";
import SmallShip from "@/icons/SmallShip";
import MiddleShip from "@/icons/MiddleShip";
import PreBiggestShip from "@/icons/PreBiggestShip";
import BiggestShip from "@/icons/BiggestShip";

export default function PlayArea() {
    const [area, setArea] = useState(Array(64).fill(0));

    function SetShip(index: number) {
        setArea(prev => {
            const newArea = [...prev];
            newArea[index] = 1;
            return newArea;
        });
    }

    return (
        <div>
            <div className="grid">
                {area.map((cell, i) => (
                    <div key={i} className="cell" onClick={() => SetShip(i)}>
                        {cell === 1 ? <SmallShip /> : null}
                    </div>
                ))}
            </div>
            <div>
                <div>
                    <div className="flex items-center justify-between p-4 hover:bg-[#212121] cursor-pointer">
                        <div className="flex items-center gap-1">
                            <div className="w-[20px] h-[20px] bg-[#0058FF]"></div>
                        </div>
                        <div className="h-[35px]">
                            <SmallShip />
                        </div>
                        <span>x4</span>
                    </div>
                    <div className="flex items-center justify-between p-4 hover:bg-[#212121] cursor-pointer">
                        <div className="flex items-center gap-1">
                            <div className="w-[20px] h-[20px] bg-[#0058FF]"></div>
                            <div className="w-[20px] h-[20px] bg-[#0058FF]"></div>
                        </div>
                        <div className="h-[35px]">
                            <MiddleShip />
                        </div>
                        <span>x3</span>
                    </div>
                    <div className="flex items-center justify-between p-4 hover:bg-[#212121] cursor-pointer">
                        <div className="flex items-center gap-1">
                            <div className="w-[20px] h-[20px] bg-[#0058FF]"></div>
                            <div className="w-[20px] h-[20px] bg-[#0058FF]"></div>
                            <div className="w-[20px] h-[20px] bg-[#0058FF]"></div>
                        </div>
                        <div className="h-[35px]">
                            <PreBiggestShip />
                        </div>
                        <span>x2</span>
                    </div>
                    <div className="flex items-center justify-between p-4 hover:bg-[#212121] cursor-pointer">
                        <div className="flex items-center gap-1">
                            <div className="w-[20px] h-[20px] bg-[#0058FF]"></div>
                            <div className="w-[20px] h-[20px] bg-[#0058FF]"></div>
                            <div className="w-[20px] h-[20px] bg-[#0058FF]"></div>
                            <div className="w-[20px] h-[20px] bg-[#0058FF]"></div>
                        </div>
                        <div className="h-[35px]">
                            <BiggestShip />
                        </div>
                        <span>x1</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
