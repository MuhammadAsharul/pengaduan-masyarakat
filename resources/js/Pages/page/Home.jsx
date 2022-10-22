import React from 'react'
import { useState } from 'react'
import Peta from '../../Assets/peta.png'
import illustration1 from '../../Assets/illustration1.png'
import stepPelaporan from '../../Data/StepPelaporan'
import karanganyar from '../../Assets/karanganyar.png'
import store from '../../Assets/store.png'
// import ModalLapor from '../../Components/PopupLapor'
export default function Home() {
  const [showModal, setShowModal] = useState(false);

  // document.addEventListener("click", (e) => {
  //   const target = e.target;
  //   if (showModal == true && !target.closest(".btn-modal")) {
  //     setShowModal(false);
  //   }
  // });

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

        <button className='btn-modal outline-none bg-[#003D31] py-3 px-6 text-white rounded-[6px] mt-10 hover:bg-[#01725C] duration-150'
          onClick={() => setShowModal(true)}>
          Buat Laporan
        </button>

        {showModal ? (
          <>
            <div
              className="justify-center w-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="gap-3 border-0 rounded-lg shadow-lg relative flex flex-col w-full p-4 bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between bg-[#5CE4CA] px-5 py-2 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl text-white font-semibold">
                      Sampaikan Laporan Anda
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <form>
                    <div className='flex flex-col w-full gap-4 items-center'>
                      <p>Pilih Klasifikasi Laporan</p>
                      <table className='w-full' border="1">
                        <tr>
                          <td><input type="radio" id="html" name="fav_language" value="Pengaduan"></input> Pengaduan</td>
                          <td><input type="radio" id="html" name="fav_language" value="Aspirasi"></input> Aspirasi</td>
                          <td><input type="radio" id="html" name="fav_language" value="Permintaan"></input> Permintaan</td>
                        </tr>
                      </table>
                    </div>
                    <div className='flex flex-col w-full gap-4 text-center'>
                      <p>Perlihatkan Cara Penyampaian yang Baik dan benar</p>
                      <div className='flex flex-col w-full gap-3'>
                        <input type="text" id="fname" name="fname" placeholder='Ketik Judul Laporan Anda *'></input>
                        <textarea placeholder="Ketik Isi Laporan Anda *"></textarea>
                        <input type="text" id="fname" name="fname" placeholder="Pilih Tanggal Kejadian"></input>
                        <input type="text" id="fname" name="fname" placeholder="Ketik Instansi Tujuan *"></input>
                        <input type="text" id="fname" name="fname" placeholder="Pilih Kategori Laporan Anda *"></input>
                        <div class="flex justify-center items-center w-full">
                          <label for="dropzone-file" className="cursor-pointer flex flex-col justify-center items-center w-full bg-gray hover:bg-gray-600">
                            <div className="flex flex-col justify-center items-center pt-4 pb-4">
                              <p className="text-xs text-gray-500 dark:text-gray-400">UPLOAD LAMIPRAN (MAX 2MB)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </form>
                  <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                    <div>
                    <label for="lampiran-file" className='cursor-pointer'>
                      <p className='text-[#003D31]'>Upload Lampiran</p>
                      <input id="lampiran-file" type="file" className="hidden" />
                    </label>
                    </div>
                    <div>
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-[#003D31] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Mulai Lapor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
          </>) : null}
      </div>


      <div className='flex flex-col items-center justify-center bg-white w-full items-center justify-center'>
        <div className='flex items-center justify-center w-4/5 min-h-screen'>
          <div className='w-2/5'>
            <img src={illustration1} alt="" />
          </div>
          <div className='w-3/5'>
            <p className='font-bold text-[#003D31] text-[46px]'>Sampaikan <span className='text-[#5CE4CA]'>aspirasi</span> dan <span className='text-[#5CE4CA]'>pengaduan</span> anda</p>
            <p className='mt-[48px] text-[#596966] text-lg'>Pengelolaan pengaduan pelayanan publik di setiap organisasi penyelenggara di Indonesia belum terkelola secara efektif dan terintegrasi. Masing-masing organisasi penyelenggara mengelola pengaduan secara parsial dan tidak terkoordinir dengan baik. Akibatnya terjadi duplikasi penanganan pengaduan, atau bahkan bisa terjadi suatu pengaduan tidak ditangani oleh satupun organisasi penyelenggara, dengan alasan pengaduan bukan kewenangannya. Oleh karena itu, untuk mencapai visi dalam good governance maka perlu untuk mengintegrasikan sistem pengelolaan pengaduan pelayanan publik dalam satu pintu. Tujuannya, masyarakat memiliki satu saluran pengaduan secara Nasional.</p>
          </div>
        </div>

        <div className='flex flex-col w-4/5 min-h-screen items-center'>
          <p className='font-bold text-[#003D31] text-[46px] mb-[122px]'>Tata Cara <span className='text-[#5CE4CA]'>Pelaporan</span></p>
          <div className='grid grid-cols-3 grid-rows-2'>
            {stepPelaporan.map((item, index) => {
              return (
                <div key={index} className='flex flex-col p-5 m-3 gap-1 rounded-[22px] bg-[#FFFAE9]'>
                  <img src={item.image} width='55.81px' height='56px'></img>
                  <p className='font-bold text-[#003D31]'>{item.title}</p>
                  <p className='font-normal text-[#596966]'>{item.sentence}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center w-full bg-[#5CE4CA] h-[329px]'>
        <p className='font-bold text-5xl text-[#003D31] mb-[35px]'>Jumlah Laporan Sekarang</p>
        <p className='font-bold text-white text-7xl'>69,420</p>
      </div>

      <div className='flex flex-col items-center justify-center w-full bg-[#FFFAE9] h-[282px]'>
        <div className='grid grid-cols-3 w-4/5'>
            <div className='flex flex-col p-5 m-3 gap-1 rounded-[22px] bg-[#FFFAE9] justify-between'>
              <p className='font-bold text-[#003D31]'>Download Aplikasi Mobile LaporMin</p>
              <img src={store} width='237px' height='158px'></img>
            </div>
            <div className='flex flex-col p-5 m-3 gap-1 rounded-[22px] bg-[#FFFAE9] items-center'>
              <p className='font-bold text-[#003D31]'>Dikelola Oleh</p>
              <img src={karanganyar} width='103px' height='125px'></img>
              <p className='font-normal text-[#003D31]'>Diskominfo Karanganyar</p>
              <p className='font-normal text-[#003D31]'>Copyright @LaporMin 2022</p>
            </div>
            <div className='flex flex-col p-5 m-3 gap-1 rounded-[22px] bg-[#FFFAE9] items-end'>
              <p className='font-bold text-[#003D31]'>Lebih Dekat Dengan Kami</p>
            </div>
        </div>
      </div>
    </div>
  )
}
