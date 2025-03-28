import iconStar from "./assets/icon-star.svg"

export function App() {
  return(
    <div className="bg-radial-gradient text-white rounded-2xl p-6 mx-w-103 font-overpass">
      <div className="bg-dark-blue w-fit p-4 rounded-full mb-4">
        <img src={iconStar} alt="icon star"/>
      </div>

      <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>

      <p className="text-sm text-light-gray leading-1 mb-6">Please let us know how we did with your support request. All
      feedback is apreciated to help us improve our offering!</p>

      <div className="flex justify-between">
        <button className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-gray focus:bg-medium-gray focus:text-white">1</button>
        <button className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-gray focus:bg-medium-gray focus:text-white">2</button>
        <button className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-gray focus:bg-medium-gray focus:text-white">3</button>
        <button className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-gray focus:bg-medium-gray focus:text-white">4</button>
        <button className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-gray focus:bg-medium-gray focus:text-white">5</button>
      </div>

      <button>Submit</button>
    </div>
  )
}