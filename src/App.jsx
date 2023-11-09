import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile, Payment, Withdraw, CreateQuest } from './pages';
import { logoTitle } from './assets';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-contract" element={<CreateCampaign />} />
          <Route path="/create-quest" element={<CreateQuest />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
        <div className="flex justify-center items-center h-[100px] mt-10">
          <img src={logoTitle} alt="logo_title" className="w-[200px] h-[50px]" />
        </div>
      </div>
    </div>
  )
}

export default App