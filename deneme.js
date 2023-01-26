function gorevItemOlustur(gorev){
    //div oluşturma
    const gorevDiv = document.createElement('div');
    gorevDiv.classList.add('gorev-item');
//li oluştur
    const gorevLi = document.createElement('li');
    gorevLi.classList.add('gorev-tanim');
    gorevLi.innerText = gorev;
    gorevDiv.appendChild(gorevLi);
//tamamlandı butonu ekle
    const gorevTamamBtn = document.createElement('button');
    gorevTamamBtn.classList.add('gorev-btn');
    gorevTamamBtn.classList.add('gorev-btn-tamamlandi');
    gorevTamamBtn.innerHTML = '<i class="fa fa-check-square" aria-hidden="true"></i>';
    gorevDiv.appendChild(gorevTamamBtn);
    console.log('eklendi');

    const gorevSilBtn = document.createElement('button');
    gorevSilBtn.classList.add('gorev-btn');
    gorevSilBtn.classList.add('gorev-btn-sil');
    gorevSilBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    gorevDiv.appendChild(gorevSilBtn);
    
//oluşturduğumuz divi, ul içine ekleme
    gorevListesi.appendChild(gorevDiv);
}

function gorevEkle(e){
    e.preventDefault();
    gorevItemOlustur(yeniGorev.value);
    //local storage'a kaydet
    localStorageKaydet(yeniGorev.value);
    yeniGorev.value='';

}





function localStorageKaydet(yeniGorev){
    let gorevler;

    if(localStorage.getItem('gorevler')=== null){
        gorevler = [];
    }else {
        gorevler = JSON.parse(localStorage.getItem(' gorevler '));
    }

    gorevler.push(yeniGorev);
    localStorage.setItem('gorevler', JSON.stringify(gorevler));
}

function localStorageOku(){
    let gorevler;

    if(localStorage.getItem('gorevler')=== null){
        gorevler = [];
    }else {
        gorevler = JSON.parse(localStorage.getItem(' gorevler '));
    }


    gorevler.forEach(function(gorev){
        gorevItemOlustur(gorev);
        
    });
}