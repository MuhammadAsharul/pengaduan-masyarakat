import { comment } from "postcss";
import amplop from "../Assets/amplop.png"
import komen from "../Assets/Comment.png"
import circle from "../Assets/Done Circle.png"
import done from "../Assets/done.png"
import message from "../Assets/message.png"

const stepPelaporan = [
    {
        id: 1,
        title: 'Tulis Laporan',
        sentence: 'Laporkan keluhan atau aspirasi anda dengan jelas dan lengkap',
        image: amplop,
    },
    {
        id: 2,
        title: 'Proses Verifikasi',
        sentence: 'Dalam 3 hari, laporan Anda akan diverifikasi dan diteruskan kepada instansi berwenang',
        image: circle,
    },
    {
        id: 3,
        title: 'Proses Tidak Lanjut',
        sentence: 'Dalam 5 hari, instansi akan menindaklanjuti dan membalas laporan Anda',
        image: komen,
    },
    {
        id: 4,
        title: 'Beri Laporan',
        sentence: 'Anda dapat menanggapi kembali balasan yang diberikan oleh instansi dalam waktu 10 hari',
        image: message,
    },
    {
        id: 5,
        title: 'Selesai',
        sentence: 'Laporan Anda akan terus ditindaklanjuti hingga terselesaikan',
        image: done,
    },
]

export default stepPelaporan;