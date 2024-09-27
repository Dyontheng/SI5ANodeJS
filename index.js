// inisialisasi modul http
const http = require('http');
const { stringify } = require('querystring');

// buat server
const server = http.createServer( (req, res)=>
{
//res.writeHead(200, { 'Content-Type': 'text/html'});
//res.write('Selamat pagi');

    if(req.url=== '/dosen'){
        message='list data dosen';
        data=['ahmad','hafizh','widi'];
    } else if (req.url === '/mahasiswa'){
        message='list data mahasiswa';
        data=['kennny','rizky','akbar'];
    }else if (req.url=== '/fakultas'){
        massage='list fakultas';
        data=['kodekteran','hukum'];
    }else if (req.url=== '/prodi'){
        message='list prodi';
        data=['SI','TI'];
    }
    } else {
        message= 'tidak ditemukan';
        data=[];

    }
    res.write(JSON.stringify({
        'message':message,
        'data':data,
        'status':'success'
    }))

res.writeHead(200,{'content-type':'application/json'});
res.write(JSON,stringify({
    'message':'selamat pagi',
    'status ': 'succes'
}));

res.end();
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan di http://${host}:${port}`);

});