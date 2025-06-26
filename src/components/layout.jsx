import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-40 md:pt-32 lg:pt-24 xl:pt-20 pb-12">
      {children}
    </div>
  )
}

export default Layout
