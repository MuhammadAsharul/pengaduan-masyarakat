import React from 'react'
import Peta from '../../Assets/peta.png'
export default function Home() {
  return (
    <div className='flex w-full'>

      <div className='flex flex-col gap-7 bg-[#5CE4CA] w-full items-center justify-center min-h-screen'>
        <div className='flex justify-center items-center bg-white py-7 px-10 rounded-[22px] w-[506px]'>
            <h1 className='text-4xl font-bold'>Layanan</h1>
        </div>

        <div className='flex gap-9'>
          <div className='flex justify-center items-center py-7 px-10 rounded-[22px] w-[506px] bg-[#FFFAA4]'>
            <h1 className='text-4xl font-bold'>Aspirasi</h1>
          </div>
          <div className='flex justify-center items-center bg-white py-7 px-10 rounded-[22px] w-[506px]'>
            <h1 className='text-4xl font-bold'>Pengaduan</h1>
          </div>
        </div>

        <div className='w-1/3 text-center'>
          <p>Sampaikan aspirasi dan pengaduan untuk Pemerintahan Karanganyar
            melalui LaporMin! yang berperan sebagai alat bantu untuk melakukan 
            monitoring dan verifikasi capaian program pembangunan maupun pengaduan masyarakat terkait pelaksanaan program pembangunan nasional.</p>
        </div>
      </div>


      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
