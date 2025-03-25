import MainPageShip from "@/icons/MainPageShip"
import Apple from "@/icons/Apple"
import Google from "@/icons/Google"

export default function Register(){
      return(
            <div className="flex items-center justify-center h-screen">
                  <MainPageShip/>
                  <div className="flex items-start flex-col gap-4">
                        <span className="text-3xl font-bold">SIGN UP</span>
                        <span className="secondary font-bold">Start fight with other players in sea-battle online!</span>
                        <form action="" className="flex flex-col gap-3">
                              <input className="input w-100" placeholder="name" type="text" name="" id="" />
                              <input className="input w-100" placeholder="e-mail" type="email" name="" id="" />
                              <input className="input w-100" placeholder="password" type="password" name="" id="" />
                              <button className="button">Register</button>
                        </form>
                        <div className="w-100 flex flex-col items-center justify-center">
                              <div className="flex items-center justify-center">
                                    <Google/>
                                    <Apple/>
                              </div>
                              <div className="flex flex-col items-center space-y-2 mt-4">
                                    <span className="text-gray-500 hover:text-sky-400 cursor-pointer">Already have an account</span>
                                    <span className="text-gray-500 hover:text-sky-400 cursor-pointer">Forgot password</span>
                              </div>
                        </div>
                  </div>
            </div>
      )
}