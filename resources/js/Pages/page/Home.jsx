import React from 'react'
import Peta from '../../Assets/peta.png'
import illustration1 from '../../Assets/illustration1.png'
import stepPelaporan from '../../Data/StepPelaporan'
export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col gap-7 bg-[#5CE4CA] w-full items-center justify-center min-h-screen' style={{ backgroundImage: `url(${Peta})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className='flex justify-center items-center bg-white py-7 px-10 rounded-[22px] w-1/3 mt-11'>
          <h1 className='text-4xl font-bold text-[#003D31]'>Layanan</h1>
        </div>

        <div className='flex gap-9 w-full justify-center'>
          <div className='flex justify-center items-center py-7 px-10 rounded-[22px] w-1/3 bg-[#FFFAA4]'>
            <h1 className='text-4xl font-bold text-[#003D31]'>Aspirasi</h1>
          </div>
          <div className='flex justify-center items-center bg-white py-7 px-10 rounded-[22px] w-1/3'>
            <h1 className='text-4xl font-bold text-[#003D31]'>Pengaduan</h1>
          </div>
        </div>

        <div className='w-1/3 text-center text-[#003D31] mt-9'>
          <p>Sampaikan aspirasi dan pengaduan untuk Pemerintahan Karanganyar
            melalui LaporMin! yang berperan sebagai alat bantu untuk melakukan
            monitoring dan verifikasi capaian program pembangunan maupun pengaduan masyarakat terkait pelaksanaan program pembangunan nasional.</p>
        </div>

        <button className='outline-none bg-[#003D31] py-3 px-6 text-white rounded-[6px] mt-10 hover:bg-[#01725C]'>
          Buat Laporan
        </button>
      </div>


      <div className='flex flex-col items-center justify-center bg-white w-full items-center justify-center'>
        <div className='flex items-center justify-center w-4/5 min-h-screen'>
          <div className='w-2/5'>
            <img src={illustration1} alt="" />
          </div>
          <div className='w-3/5'>
            <p className='font-bold text-[46px]'>Sampaikan <span className='text-[#5CE4CA]'>aspirasi</span> dan <span className='text-[#5CE4CA]'>pengaduan</span> anda</p>
            <p className='mt-[48px] text-lg'>Pengelolaan pengaduan pelayanan publik di setiap organisasi penyelenggara di Indonesia belum terkelola secara efektif dan terintegrasi. Masing-masing organisasi penyelenggara mengelola pengaduan secara parsial dan tidak terkoordinir dengan baik. Akibatnya terjadi duplikasi penanganan pengaduan, atau bahkan bisa terjadi suatu pengaduan tidak ditangani oleh satupun organisasi penyelenggara, dengan alasan pengaduan bukan kewenangannya. Oleh karena itu, untuk mencapai visi dalam good governance maka perlu untuk mengintegrasikan sistem pengelolaan pengaduan pelayanan publik dalam satu pintu. Tujuannya, masyarakat memiliki satu saluran pengaduan secara Nasional.</p>
          </div>
        </div>

        <div className='flex flex-col w-4/5 min-h-screen items-center'>
          <p className='font-bold text-[46px] mb-[122px]'>Tata Cara <span className='text-[#5CE4CA]'>Pelaporan</span></p>
          <div className='grid grid-cols-3 grid-rows-2'>
            {stepPelaporan.map((item, index) => {
              return (
                <div key={index} className='flex flex-col justify-between p-5 m-2 gap-3  rounded-[22px] bg-[#FFFAE9]'>
                  <img src={item.image} width='55.81px' height='56px'></img>
                  <p className='font-bold'>{item.title}</p>
                  <p className='font-normal'>{item.sentence}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center w-full bg-[#5CE4CA] h-[329px]'>
        <p className='font-bold text-5xl mb-[35px]'>Jumlah Laporan Sekarang</p>
        <p className='font-bold text-white text-7xl'>69,420</p>
      </div>

      <div className='flex flex-col items-center justify-center w-full bg-[#FFFAE9] h-[230px]'>
        <p className='font-bold text-5xl mb-[35px]'>Jumlah Laporan Sekarang</p>
        <p className='font-bold text-white text-7xl'>69,420</p>
      </div>
    </div>
  )
}
