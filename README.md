# Hacktiv Restaurant DB
## Learning Competencies
- Mampu memodelkan requirement ke dalam bentuk database schema ERD
- Mampu membuat database, table, dan seeding dengan menggunakan node postgres
- Mampu melakukan manipulasi query SQL untuk menampilkan suatu data 
- Mampu menggunakan Aggregate Function dalam query SQL
- Mampu menggunakan node-postgres callback untuk menampilkan data
- Mampu menggunakan konsep OOP dan MVC untuk menyelesaikan solusi yang diberikan

## Summary
Restaurant bernama Hacktiv Restaurant yang baru saja dibuka membutuhkan suatu program yang dapat menyimpan data dari menu/product di Restaurant . Hacktiv memiliki menu dengan beberapa kategori yaitu: Burger, Ayam, Drink, Snack, and Paket Family. Setiap menu memiliki name, stock, price, createdAt (tanggal mulai dijual/mulai ditambahkan ke menu), dan memiliki satu kategori. 
Buatlah database schema dari requirement diatas. Untuk lebih jelas silahkan untuk melihat data csv dari Hacktiv Restaurant.

## PART 1
### Release 0: Schema
Berdasarkan dari penjelasan dan csv yang diberikan buatlah database schema dari Hacktiv Restaurant ini. Untuk pembuatan ERD gunakan draw.io atau gambar digital lainnya. Hasil akhir dapat di screenshoot dan dikumpulkan dengan menggunakan github.

### Release 1: Basic Query 
Dari schema release 0 yang telah kamu kerjakan kemarin, 
1. Buatlah database baru yang bernama RestaurantDB
2. Buatlah tabel yang dibutuhkan dengan menggunakan query create table, dan juga jangan lupa untuk relasinya.
3. Buatlah query insert, select, update dan delete data ke dalam masing-masing tabel. Gunakan data dari csv yang diberikan. 
4. Buatlah query yang dapat melakukan insert beberapa data sekaligus.
5. Cobalah query untuk drop semua table yang telah dibuat.
6. Buatlah file baru bernama query_release_1.txt dan cantumkan query-query yang berhasil kamu buat dalam file tersebut.

### Release 2: Advance Query (Join Table  and Aggregate Function)
Melanjutkan dari release 1 yang sudah dikerjakan sekarang kita akan membuat query yang lebih kompleks:  
1. Tampilkan menu beserta kategorinya.
2. Tampilkan menu dengan kategori Snack.
3. Tampilkan menu dengan stock terbanyak dari kategori Burger.
4. Tampilkan menu beserta kategorinya dengan harga termahal.
5. Tampilkan harga rata-rata dari menu yang mempunyai kategori Ayam.
6. Tampilkan jumlah stok dari menu yang mempunyai kategori Drink.
7. Tampilkan jumlah stok dari menu yang ditambahkan di bulan agustus dari kategori Burger.
8. Buatlah file baru bernama query_release_2.txt dan cantumkan query-query yang berhasil kamu buat dalam file tersebut.
HINT: Untuk Tanggal pada postgres kamu bisa menggunakan fungsi DATE_PART atau DATE_TRUNC 


## PART 2
INTEGRATING WITH NODE POSTGRES and MVC Pattern
Bila kamu sudah menguasai query, sekarang kita akan menjembatani database Postgres dengan Bahasa Pemrograman Javascript. Disini, kamu memerlukan library tambahan seperti Node Postgres.
 
Koneksikan terlebih dahulu database postgresql dengan project Javascript mu di file connection.js. Pastikan kamu sudah memasukkan nama database yang sebelumnya telah dibuat, credential username dan password secara benar. (Reference: link)

### Release 0: Set up the Schema DB
Di dalam file setup.js, buat ulang table-table yang dibutuhkan. Secara query pembuatan table, tentunya tidak berbeda dengan release 0 diatas. (Reference: link)

### Release 1: Seed Data
Setelah tabel-tabel dari schema `RestaurantDB` telah dibuat, buatlah satu file baru bernama seeding.js dan masukkan (insert) data file menus.json, categories.json ke tabel `Menus` dan `Categories`

Baca file-file tersebut menggunakan fungsi readFileSync kemudian lakukan perulangan untuk insert data-data tersebut ke tabel yang telah kamu buat.

NOTE: Data di-input harus sesuai dengan urutan pada file csv

### Release 2: It’s Query Party DQL!! 🎉🎉
NOTE : 
Gunakan OOP Paradigm dalam memproses data di aplikasi. Semua Output adalah dalam bentuk instance dari class yang sesuai.
Contoh : 
- Class Menu
    - name
    - category
    - stock
    - price
    - createdAt
- Class Category
    - category
    - totalStock
    - totalSales
Gunakan MVC pattern dalam menampilkan hasil dari masing-masing query ke dalam console terminal.

Mari kita mulai dengan query-query sederhana.
1. Command node app.js query-1
    Buatlah Query SQL untuk menampilkan menu, yang mempunyai kategori Drink dan di menu mulai bulan Mei 2021 - Juni 2021 dan data diurutkan berdasarkan tanggal.
    
    <img width="492" alt="Screen Shot 2022-08-04 at 17 45 18" src="https://user-images.githubusercontent.com/22075597/182829173-882e5f5c-a454-474a-9330-43cf011872fd.png">

2. Command node app.js query-2
    Buatlah Query SQL untuk menampilkan menu yang mempunyai jumlah stok terbanyak di database.
    
    <img width="490" alt="Screen Shot 2022-08-04 at 17 45 22" src="https://user-images.githubusercontent.com/22075597/182829226-4c18dc62-cc09-4cfe-a582-36eac1c70b66.png">

   
3. Command node app.js query-3
    Buatlah Query SQL untuk menampilkan menu dimana nama barangnya mengandung kata “Burger”.
    
    <img width="485" alt="Screen Shot 2022-08-04 at 17 45 27" src="https://user-images.githubusercontent.com/22075597/182829245-57c0b48e-2591-479c-a269-8dcd98ccfd05.png">

4. Command node app.js query-4
    Buatlah Query SQL untuk menampilkan menu dan kategorinya yang mempunyai stok terbanyak dari tanggal 2021-06-02 s/d 2021-07-09.
    
    <img width="487" alt="Screen Shot 2022-08-04 at 17 45 32" src="https://user-images.githubusercontent.com/22075597/182829270-0b6181e2-abf1-47d6-a8e6-ad9bee5993b9.png">

5. Command node app.js query-5
    Buatlah Query SQL untuk menampilkan nama kategori yang mempunyai harga penjualan diatas 3000000 dan data diurutkan dari penjualan yang terbanyak.
    Harga penjualan adalah stok x harga.
    
    <img width="332" alt="Screen Shot 2022-08-04 at 17 45 39" src="https://user-images.githubusercontent.com/22075597/182829295-4706912d-36a0-4d35-8479-cad6235e94bc.png">

NOTE
Gunakanlah library cli-table (optional) / `console.table()` jika kamu ingin ber-eksperimen membuat hasil query kamu berada dalam tabel.

<img width="392" alt="Screen Shot 2022-08-04 at 17 46 17" src="https://user-images.githubusercontent.com/22075597/182829342-241130dc-172a-40f1-9c9c-ae9b8cd9961f.png">

