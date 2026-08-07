import React from 'react'

const Home = () => {
    console.log("home render")
  return (
    <div>
      Home 
    </div>
  )
}
export default React.memo(Home)

//react.memo hold two perameters first is component and second is callback function which is also hold teo perameters(prevProps ,nextProps) ,its work with some conditions ...if condition return true then never rerender this component even if referance changes...
// export default React.memo(Home,(prev,next)=>{
// // return prev.user.id === next.user.id;
// return prev.user.name === next.user.name 
// })
