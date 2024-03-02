import React from 'react'
import MoreAboutUs from './components/moreAboutUs'
import Team from './components/team'
import Volunteers from './components/volunteers'
import HappyEnd from './components/happyEnd'

export default function aboutUsMore() {
  return (
    <div className=''>
      <MoreAboutUs/>
      <Team />
      <Volunteers />
      <HappyEnd />
    </div>
  )
}
