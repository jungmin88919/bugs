$(function(){

    //검색창 열고 닫기
    $('.search-btn').click(function(){
        $('.header-search').toggleClass('active');
    })

    //전체메뉴
    $('.header .menu-btn').click(function(){
        $('.nav-layer').addClass('on');
        $('body').addClass('scroll-hidden');
    })
    $('.nav-layer .btn-close').click(function(){
        $('.nav-layer').removeClass('on');
        $('body').removeClass('scroll-hidden');
    })

    //배너 스와이퍼
    const bannerSlide = new Swiper(".group-banner", {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    });

    //Top버튼
    $('.btn-top').click(function(){
        window.scrollTo({top:0,behavior:"smooth"})
    })

    //사업자정보 나타내기
    $('.company').click(function(){
        $(this).siblings('.company-info').toggleClass('active');
    })

    //앱에서열기 버튼 닫기
    $('.go-app .btn-close').click(function(){
        $('.go-app').css('display','none');
    })


    //제이슨 불러오기
    //최신앨범
    fetch('./assets/data/newData.json')
    .then(res=>res.json())
    .then(json=>{
        
        data = json.items;

        let newmusic = ``;

        data.forEach(element => {
            newmusic+=`<li class="newmusic-item">
                <a href="">
                    <div class="img-wrap">
                        <button class="play"><span class="blind">재생</span></button>
                        <img src="${element.thumb}" alt>
                    </div>
                    <div class="txt-wrap">
                        <em class="title">${element.title}</em>
                        <p class="artist">${element.artist}</p>
                        <time datetime="2023-05-07">
                            <time>${element.date}</time>
                        </time>
                    </div>
                </a>
            </li>`;
        });

        $('.newmusic-list').html(newmusic);
    })

    //뮤직비디오

    fetch('./assets/data/videoData.json')
    .then(res=>res.json())
    .then(json=>{
        
        data =json.items;

        let mv = ``;
        
        data.forEach(element => {
            mv+=`<li class="mv-item">
            <a href="">
                <div class="img-wrap">
                    <img src="${element.thumb}" alt="I AM">
                    <time>
                        <span class="blind">재생시간</span>
                        ${element.time}
                    </time>
                </div>
                <div class="txt-wrap">
                    <em class="title">${element.title}</em>
                    <span class="artist">${element.artist}</span>
                </div>
            </a>
        </li>`;
        });

        $('.mv-list').html(mv);
    })

})