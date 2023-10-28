// DonationHistory.js
import React from 'react';
import donationData from '@/components/donationData';// Import the mock donation data
import Layout from '@/components/Layout';

function Donations() {
  return (
    <div className="bg-primary">
        <Layout>
      <div className="bg-white p-5">
      <h1 className=''>Donation History</h1>
      <div className='py-5 flex justify-center'>
      <table className='w-full'>
        {/* <thead>
          <tr className='items-center flex gap-12'>
            <th>Donation ID</th>
            <th>Amount</th>
          </tr>
        </thead> */}
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