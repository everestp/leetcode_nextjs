



import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div>
       <main className='flex flex-col items-center justify-center h-screen '>
                {children}
       </main>
    </div>
  )
}

export default AuthLayout
