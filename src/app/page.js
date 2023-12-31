'use client';

import Image from 'next/image';
import foto from '/public/assets/profil.png';
import { useRef, useState } from 'react';
import '@/styles/home.css';

export default function Home() {
  const [bravo, setBravo] = useState(0);

  function handlerTambah() {
    setBravo(bravo + 1);
  }

  const input = useRef(null);

  const [nama, setNama] = useState('Gusti Ngurah Adhi Astika');

  const handlerOnEnter = (event) => {
    if (event.key === 'Enter') {
      handlerNama(event);
    }
  };

  function handlerNama() {
    if (input.current.value !== '') {
      setNama(input.current.value);
      input.current.value = '';
      handlerTambah();
    } else {
      alert('Jangan Lupa Isi Namanya 😁🙏');
    }
  }

  return (
    <div className="body">
      <div className="banner-container">
        <div className="header-banner-wrapper">
          <div className="profile-header-banner">
            <Image
              src={foto}
              width={120}
              height={120}
              alt="Picture of the author"
            ></Image>
          </div>
          <div className="content-header-banner">
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
              <p>D121211029</p>
              <p>“To Infinity and Beyond”</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          <input
            className="cta-input"
            ref={input}
            type="text"
            placeholder="Masukkan Nama"
            onKeyDown={handlerOnEnter}
          />
          {/* Tombol CTA */}
          <div className="cta-button" onClick={handlerNama}>
            <p>Ganti Nama! {bravo}x</p>
          </div>
        </div>
      </div>
    </div>
  );
}
