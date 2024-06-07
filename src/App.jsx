
import './App.css'
import Grandpa from './Component/Grandpa/grandpa'
// import ReusableForm from './Component/ReusableForm/ReusableForm'
// import HookForm from './Component/HookForm/HookForm'
// import RefForm from './Component/RefForn/RefForm'
// import SimpleForm from './Component/SimpleForm/SimpleForm'
// import Stateful from './Component/Stateful/Stateful'

function App() {

  // const handleSignUpSubmit = data =>{
  //   console.log('log in', data);
  // }

  // const handleProfileUpdateSubmit = data =>{
  //   console.log('update ptofile', data);
// }

return (
  <>
    <h1>Form master</h1>
    {/* <Stateful></Stateful> */}
    {/* <SimpleForm></SimpleForm> */}
    {/* <RefForm></RefForm> */}
    {/* <HookForm></HookForm> */}
    {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit} >
      <div>
        <h2>sign up </h2>
        <p>Sign up here for log in</p>
      </div>
    </ReusableForm>
    <ReusableForm formTitle={'Profile Update'} submitButton={'Update'} handleSubmit={handleProfileUpdateSubmit}>
      <div>
        <h2>update profile</h2>
        <p>Update your profile here</p>
      </div>
    </ReusableForm> */}
    <Grandpa></Grandpa>
  </>
)
}

export default App
