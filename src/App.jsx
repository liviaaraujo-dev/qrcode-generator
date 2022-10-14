import { useState } from 'react'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode';
import './styles/global.css';

function App() {
  const [link, setLink] = useState("")
  const [qrcodeLink, setQrcodeLink] = useState("")

  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 300,
      margin: 2
    }, function (err, url) {
      setQrcodeLink(url);
    })
  }

  return (
    <>
      <header>
        <h1 className="text-3xl mt-12 mb-10 text-center font-semibold">
          QR Code Generator
        </h1>
      </header>

      <main className="flex flex-col items-center h-[100%]">

        <input
          placeholder='Digite seu link...'
          className='h-10 rounded-lg w-[26%] m-6 p-2 border-solid border border-gray-400 outline-slate-600'
          value={link}
          onChange={(e) => handleQrcode(e)}
        />

        <a href={qrcodeLink} download={`qrcode.png`} className="mt-5 mb-16 bg-slate-600 text-white py-3 px-6 rounded hover:opacity-90">
          Baixar QrCode
        </a>
        <QRCode
          value={link}
        />

      </main>
    </>
  )
}

export default App
