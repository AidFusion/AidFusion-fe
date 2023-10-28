// DonationHistory.js
import React, { useState } from 'react';
import donationData from '@/components/donationData';// Import the mock donation data
import Layout from '@/components/Layout';


function Donations() {
    const [searchTerm, setSearchTerm] = useState('');

  const filteredDonations = donationData.filter((donation) =>
    donation.donor.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="bg-primary">
        <Layout>
      <div className="bg-white p-5 py-10 max-h-screen h-[73vh]">
     <div className="flex flex-col gap-4 md:justify-between md:flex-row">
     <h1 className=''>Donation History</h1>
      <input
        type="text"
        placeholder="Search Donor..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/2 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
     </div>
      <div className='py-5 flex justify-center'>
      <table className='w-full'>
        <tbody>
          {donationData.map((donation) => (
            <tr key={donation.id} className='items-center flex justify-evenly w-full bg-slate-50 mb-4 border-b'>
              <td className='text-center flex flex-col'>
                <div>{donation.id}</div>
                <div>{donation.date}</div>                 
              </td>
              <td className='text-center flex flex-col gap-2 justify-center'>
                <div>${donation.amount}</div>
                <div>From: <span className='text-gray-500'>{donation.donor}</span></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </Layout>
    </div>
  );
}

export default Donations;