"use client";

import MainPageShip from "@/icons/MainPageShip";
import Logout from "@/icons/Logout";
import PlayerStats from "@/components/PlayerStats/PlayerStats";
import GameStats from "@/components/GameStats/GameStats";

export default function Game(){
      return(
            <div>
                  <header className="relative flex items-center mt-5">
                        <div className="absolute left-1/2 w-[50px] transform -translate-x-1/2">
                              <MainPageShip />
                        </div>
                        <div className="ml-auto flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                    <span>Player</span>
                                    <div className="w-[30px] h-[30px] rounded-full bg-blue-500"></div>
                              </div>
                              <div><Logout/></div>
                        </div>
                  </header>
                  <div className="flex justify-between items-end mt-5">
                        <PlayerStats/>
                        <GameStats/>
                        <PlayerStats/>
                  </div>
            </div>
      )
}     