import LoseShip from "@/icons/LoseShip"
import SurrenderShip from "@/icons/SurrenderShip"
import WinShip from "@/icons/WinShip"

export default function PlayerStats(){
      return(
            <div className="flex items-center flex-col gap-3">
                  <div className="w-[75px] h-[75px] rounded-full bg-blue-500"></div>
                  <span className="text-base font-bold">Axes</span>
                  <hr className="border w-[300px]"/>
                  <div className="flex gap-5">
                        <div className="flex">
                              <WinShip/>
                              <span className="text-base font-bold">: 10</span>
                        </div>
                        <div className="flex">
                              <LoseShip/>
                              <span className="text-base font-bold">: 10</span>
                        </div>
                        <div className="flex">
                              <SurrenderShip/>
                              <span className="text-base font-bold">: 10</span>
                        </div>
                  </div>
            </div>
      )
}