import React from 'react'

const LogIn = () => {
  return (
    <div className='w-full h-[calc(100vh)] flex flex-row'>
      <div className='w-[55%] h-full bg-Background-light'>
        <img src="src/assets/auth-img1.png" alt="builder" className='mx-auto my-[29%]' />
      </div>
      <div className='w-[45%] h-full inline-block px-55 py-30'>
        <div className='border w-full h-full'>
          <img src="src/assets/react.svg" alt="logo" />
          <h2>Welcome Back</h2>
          <p>Please sign in to your account and start the adventure</p>
          <form action="#">
            <div className='bg-Error-100'></div>
            <div className='bg-Error-100'></div>
            <div className='bg-Error-100'></div>
            <button>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn