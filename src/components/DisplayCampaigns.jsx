import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import FundCard from './FundCard';
import { loader } from '../assets';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign })
  }

  return (
    <div>
      <div className="flex justify-start items-center flex-row gap-10 text-white">
        <h1 className="font-epilogue font-semibold text-[18px] text-left">{title} ({campaigns.length})</h1>
        <div className="max-[640px]:hidden flex flex-wrap gap-4">
          <button className="border-2 border-[#2c2f32] font-epilogue font-semibold text-sm sm:text-base leading-[30px] px-4 py-2 rounded-[5px] hover:text-[#92b8ef] hover:bg-[#2c2f32] transition-all duration-200">
            Campaigns
          </button>
          <button className="border-2 border-[#2c2f32] font-epilogue font-semibold text-sm sm:text-base leading-[30px] px-4 py-2 rounded-[5px] hover:text-[#92b8ef] hover:bg-[#2c2f32] transition-all duration-200">
            Quest
          </button>
        </div>
      </div>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}

        {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => <FundCard
          key={uuidv4()}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />)}
      </div>
    </div>
  )
}

export default DisplayCampaigns