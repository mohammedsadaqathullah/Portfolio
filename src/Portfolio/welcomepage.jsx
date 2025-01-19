// import { useState } from 'react';
// import './welcomepage.css'
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// function Welcomepage() {
//     // const [vals, setVals] = useState()
//     const [info, setInfo] = useState('ENTER YOUR NAME')
//     const [selections, setSelections] = useState()

//     function selection(e) {
//         let selected = e.target.value;
//         setSelections(selected)
//         console.log(selections)
//     }

//     function storing(e) {
//         let ins = e.target.value;
//         setInfo(`Hello!
//             ${selections}${ins}
//             Welcome🙌`)
//     }

//     return (
//         <form>
//             <div className="welcomecont">
//                 {/* <p className='welcoming'>{vals}</p> */}
//                 <div className="box">
//                     <span className='nametext'>{info}</span>
//                     <div className='scndcont'><select className="selecting" onClick={selection}><option value="">-----</option><option value="Mr.">Mr.</option><option value="Mrs.">Mrs.</option><option value="Ms.">Ms.</option><option value="Miss.">Miss.</option></select><input type="text" className='welcomenameinput' onChange={storing} />
//                     </div>
//                     <Link to='/Homepage'> <button className='submitbtn'>Go To Portfolio</button></Link>
//                 </div>
//             </div >
//         </form>
//     )
// }
// export default Welcomepage

