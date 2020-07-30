### Express Cronjob Rate Limit Access API

**Berikut** ini adalah cara simple implementasi untuk memberikan **RATE LIMIT ACCESS** pada sebuah **Route API**, cari ini bisa digunakan untuk melindungi **Route API** anda dari serangan seperti **Brute Force** atau membatasi **Limit Access Request** permintaan yang dikirim oleh user walaupun ini bukan cara yang terbaik untuk melakukan hal tersebut, cara kerjanya **IP Address** pengguna akan di cek terlebih dahulu jika **IP Address** pengguna melakukan **Request** melebihi batas **Maxsimum** yang telah ditentukan, maka nanti akan melemparkan pesan kesalahan dan **Request** yang diberikan tidak akan menumpuk dikarenakan sudah dibatasi dan **Request** yang diberikan juga akan dibersihkan secara **Otomatis**.

#### Cara Menjalankan Aplikasi

**Install module** terlebih dahulu sesuai dengan apa yang tertera di `package.json`, kemudian buka **terminal** dan silahkan ketikan `npm install` atau `yarn add`, setelah selesai menginstall **module** tersebut lalu silahkan jalankan dengan cara mengetikan `npm start` atau `yarn start` pada **terminal**.

#### Endpoit Routes:

| Nama | Route Name | Request Method |
| -----| -----------| ---------------|
|  **Testing Create** | http://localhost:3000| **POST**
|  **Testing Results** | http://localhost:3000 | **GET**