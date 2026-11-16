# Panduan: Latihan CPNS sebagai aplikasi di HP (versi file datar)

Semua file di folder ini diunggah ke GitHub langsung di tempat yang sama (tanpa folder).
Ada 9 file:

index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png, icon-maskable-512.png, apple-touch-icon.png, PANDUAN.md, dan .nojekyll (file tersembunyi, boleh dilewati)

## A. Unggah ke GitHub
1. Ekstrak zip dulu sampai terlihat file-filenya (jangan unggah file zip-nya).
2. github.com -> New repository -> nama `latihan-cpns` -> Public -> Create repository.
3. Klik "uploading an existing file", pilih/seret semua file (minimal 8 file di atas selain .nojekyll). Semua langsung di halaman utama repositori.
4. Commit changes.
5. Settings -> Pages -> Source: Deploy from a branch -> Branch: main, folder /(root) -> Save.
6. Tunggu 1-3 menit. Alamat: https://NAMA-GITHUB-ANDA.github.io/latihan-cpns/

## B. Pasang di HP
- Android (Chrome): buka alamat di atas -> menu titik tiga -> Instal aplikasi.
- iPhone (Safari): Bagikan -> Tambah ke Layar Utama.

## C. Pindah riwayat dari versi file lama
Di versi lama: tab Data -> cadangan JSON. Di versi web: tab Data -> pulihkan dari file itu.

## D. Memperbarui soal
Ganti index.html di GitHub, lalu ubah `latihan-cpns-v1` di sw.js menjadi v2, v3, dst.
