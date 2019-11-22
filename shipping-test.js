;
(function ($) {
    if ($('#title1 .give-wrap .inner-left .post-top .post-intro .post-time').length > 0) {
        giveawayFun();
    }
    //动态更新首页video-mod
    var video_mod_data = [{
        "a_href": "https://reolink.com/best-reolink-captures/?id=28",
        "img_src": "https://cdn.reolink.com/wp-content/assets/2018/03/home-video-1.jpg",
        'gtag_val': 'video-v1',
        "rel": ""
    }, {
        "a_href": "https://reolink.com/best-reolink-captures/?id=96235",
        "img_src": "https://cdn.reolink.com/wp-content/assets/2018/12/package-safe-1.jpg",
        'gtag_val': 'video-v2',
        "rel": ""
    }, {
        "a_href": "https://reolink.com/best-reolink-captures/?id=163953",
        "img_src": "https://cdn.reolink.com/wp-content/assets/2019/04/homepage-live-pc.jpg",
        'gtag_val': 'video-live',
        "rel": "nofollow"
    }, {
        "a_href": "https://reolink.com/wanderlusting-with-reolink/",
        "img_src": "https://cdn.reolink.com/wp-content/assets/2019/03/wanderlusting-with-reolink.jpg",
        'gtag_val': 'video-v3',
        "rel": ""
    }];
    var m_video_mod_data = [{
        'm_href': 'https://reolink.com/best-reolink-captures/?id=96235',
        'm_position': 'rotate-left',
        'm_img': 'package-safe',
        'm_imgsrc': 'https://cdn.reolink.com/wp-content/assets/2018/12/package-safe-1-m.jpg',
        'gtag_val': 'video-v2',
        "m_rel": ""
    }, {
        'm_href': 'https://m.reolink.com/best-reolink-captures/?id=28',
        'm_position': 'rotate-center',
        'm_img': 'Winter-Fun',
        'm_imgsrc': '/wp-content/assets/m/2018/03/Winter-Fun.jpg',
        'gtag_val': 'video-v1',
        "m_rel": ""
    }, {
        'm_href': 'https://reolink.com/best-reolink-captures/?id=163953',
        'm_position': 'rotate-right',
        'm_img': 'live-video',
        'm_imgsrc': 'https://cdn.reolink.com/wp-content/assets/2019/04/homepage-live-m.jpg',
        'gtag_val': 'video-live',
        "m_rel": "nofollow"
    }, {
        'm_href': 'https://reolink.com/wanderlusting-with-reolink/',
        'm_position': 'rotate-behind',
        'm_img': 'wanderlusting-with-reolink',
        'm_imgsrc': 'https://cdn.reolink.com/wp-content/assets/2019/03/wanderlusting-with-reolink-m.jpg',
        'gtag_val': 'video-v3',
        "m_rel": ""
    }];
    function homepageYoutube() {
        var youtubeId = [], player = null, id = $('.open-youtube');
        id.map(function (index, elem) {
            youtubeId.push($(elem).attr('data-youtube-id'));
        });
        $('a.info-title').click(function () {
            $(this).parents('.v-container').find('.cover').trigger('click');
        });
        if (!!youtubeId.length) {
            var onPlayerReady = function onPlayerReady() {
                $('.play-icon').show();
                $('.open-youtube').on('click', function () {
                    var index = youtubeId.indexOf($(this).attr('data-youtube-id'));
                    $('#nav-bar').addClass('hide');
                    $('#youtube-video').removeClass('hide');
                    player.playVideoAt(index);
                });
                $('#video-close').on('click', function () {
                    $('#nav-bar').removeClass('hide');
                    $('#youtube-video').addClass('hide');
                    player.pauseVideo();
                });
                $('.video-content').click(function (event) {
                    event.stopPropagation();
                });
                $('#youtube-video').click(function () {
                    $('#youtube-video').addClass('hide');
                    player.pauseVideo();
                });
            };
            window.onYouTubeIframeAPIReady = function () {
                player = new YT.Player('video-source', {
                    height: '360',
                    width: '640',
                    playerVars: {
                        rel: 0,
                        loop: 1,
                        playlist: youtubeId.join(',')
                    },
                    events: { 'onReady': onPlayerReady }
                });
            };
            $.getScript('https://www.youtube.com/iframe_api', function () {
            });
        }
    }
    if ($('.i-am-homepage>.section-video-mod>.video-mod>ul').length > 0) {
        try {
            for (var _iterator2 = video_mod_data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var i = _step2.value;
                var video_mod_lis, video_mod_lis_public = '<img src="' + i.img_src + '"><div class="cover"><span class="icon-icon_play play-icon"></span></div>';
                if (i.data_youtube_id) {
                    video_mod_lis = '<li onclick="gtag(\'event\', \'click\', {\'event_category\': \'engagement\',\'event_label\': \'homepage\',\'value\': \''+ i.gtag_val +'\'});" class="open-youtube" data-youtube-id="' + i.data_youtube_id + '">' + video_mod_lis_public + '</li>';
                } else {
                    video_mod_lis = '<li><a onclick="gtag(\'event\', \'click\', {\'event_category\': \'engagement\',\'event_label\': \'homepage\',\'value\': \''+ i.gtag_val +'\'});" href="' + i.a_href + '" rel="' + i.rel + '" target="_blank">' + video_mod_lis_public + '</a></li>';
                }
                $('.i-am-homepage>.section-video-mod>.video-mod>ul').append(video_mod_lis);
            }
        } catch (err) {
            console.error(err);
        }
        homepageYoutube();
    }
    if ($('.mobile-body>.stereo-carousel-wrap>.stereo-carousel>.container>.shared-video>ul').length > 0) {
        try {
            for (var _iterator3 = m_video_mod_data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _i = _step3.value;
                var m_video_mod_lis;
                m_video_mod_lis = '<li class="' + _i.m_position + '"><a onclick="gtag(\'event\', \'click\', {\'event_category\': \'engagement\',\'event_label\': \'homepage\',\'value\': \''+ _i.gtag_val +'\'});" href="' + _i.m_href + '" rel="' + _i.m_rel + '" target="_blank"><img src="' + _i.m_imgsrc + '" alt="' + _i.m_img + '"></a><i class="icon-icon_play-video"></i></li>';
                $('.mobile-body>.stereo-carousel-wrap>.stereo-carousel>.container>.shared-video>ul').append(m_video_mod_lis);
            }
        } catch (err) {
            console.error(err);
        }
    }

    if ($('.i-am-homepage').length > 0) {
        $('.section-video-mod .video-mod a.ui-link').attr('onclick', 'gtag(\'event\', \'click\', {\'event_category\': \'engagement\',\'event_label\': \'homepage\',\'value\': \'video-all\'});')
        $('.stereo-carousel-wrap a.see-more').attr('onclick', 'gtag(\'event\', \'click\', {\'event_category\': \'engagement\',\'event_label\': \'homepage\',\'value\': \'video-all\'});')
    }
    


    // 动态更新首页新品宣传版块
    var arr = [
        {
            start: 'Tue Apr 30 2019 0:00:00 GMT+0800',
            end: 'Mon May 6 2019 5:59:59 GMT+0800',
            country: ['TH','TR','US','VN','AE','AU','CA','ID','IL','JP','KH','KR','MY','NZ','PH','SA','SG','GB','DE','SK','SI','SE','RS','RO','PT','PL','NO','NL','MT','LV','LU','LT','IT','IE','HU','HR','GR','FR','FI','ES','EE','DK','CZ','CH','BG','BE','AT']
        },
        {
            start: 'Mon May 13 2019 15:00:00 GMT+0800',
            end: 'Tue Oct 1 2019 15:00:00 GMT+0800',
            country: ['TH','TR','US','VN','AE','AU','CA','ID','IL','JP','KH','KR','MY','NZ','PH','SA','SG','GB','DE','SK','SI','SE','RS','RO','PT','PL','NO','NL','MT','LV','LU','LT','IT','IE','HU','HR','GR','FR','FI','ES','EE','DK','CZ','CH','BG','BE','AT']
        },
    ];

    var flag = false;
    if (window.location.pathname === '/' || window.location.pathname === '/de/') {
        ReoAPI.get('/session/profile/').then(function (result) {
            var country = result.data.me.country;
            for (let index in arr){
                if (Business.isin(arr[index].start,arr[index].end) && arr[index].country.indexOf(country)!==-1) {
                    if (location.href.indexOf('/de/')==-1) {
                        var flash_sale_img = 'https://cdn.reolink.com/wp-content/assets/2019/04/index-pc-en.jpg';
    
                        if (location.href.indexOf('/m.')!==-1) {
                            flash_sale_img = 'https://cdn.reolink.com/wp-content/assets/2019/04/index-m-en.jpg';
                        }
                        var banner = {
                            list:[
                                {
                                    product_name:'E1 Zoom',
                                    product_des:'Pan, Tilt & Zoom - Have a Full View of Your Home',
                                    learn_more:'Learn More',
                                    a_href:'https://reolink.com/product/e1-zoom/',
                                    product_img:'https://cdn.reolink.com/wp-content/assets/2019/11/e1-zoom.png',
                                    state_logo:'new'
                                },
                                {
                                    product_name:'Flash Sale',
                                    product_des:'Limited-Time Deals on Smart Security Cameras!',
                                    learn_more:'Save Now',
                                    a_href:'https://reolink.com/flash-sale/',
                                    product_img: flash_sale_img,
                                    state_logo:''
                                }
                            ]
                        }
                        
                    } else {
                        var flash_sale_img = 'https://cdn.reolink.com/wp-content/assets/2019/04/index-pc-de.jpg';
    
                        if (location.href.indexOf('/m.')!==-1) {
                            flash_sale_img = 'https://cdn.reolink.com/wp-content/assets/2019/04/index-m-de.jpg';
                        }
                        var banner = {
                            list:[
                                {
                                    product_name:'E1 Zoom',
                                    product_des:'Pan, Tilt & Zoom – Rundumsicht für Ihr Zuhause',
                                    learn_more:'Mehr erfahren',
                                    a_href:'https://reolink.com/de/product/e1-zoom/',
                                    product_img:'https://cdn.reolink.com/wp-content/assets/2019/11/e1-zoom.png',
                                    state_logo:'new'
                                },
                                {
                                    product_name:'BLITZANGEBOTE',
                                    product_des:'Exklusive Deals mit Super-Rabatt, zeitbegrenzt!',
                                    learn_more:'Jetzt sichern',
                                    a_href:'https://reolink.com/de/flash-sale/',
                                    product_img:flash_sale_img,
                                    state_logo:''
                                }
                            ]
                        }
                        if (location.href.indexOf('/m.')!==-1) {
                            banner.list[1].product_img = 'https://cdn.reolink.com/wp-content/assets/2019/04/index-m-de.jpg';
                        }
                    }
                    flag = true;
                }
                if (!flag) {
                    if (location.href.indexOf('/de/')==-1) {
                        var banner = {
                            list:[

                                {
                                    product_name:'E1 Zoom',
                                    product_des:'Pan, Tilt & Zoom - Have a Full View of Your Home',
                                    learn_more:'Learn More',
                                    a_href:'https://reolink.com/product/e1-zoom/',
                                    product_img:'https://cdn.reolink.com/wp-content/assets/2019/11/e1-zoom.png',
                                    state_logo:'new'


                                },
                                {
                                    product_name:'RLK8-800B4',
                                    product_des:'4K UHD - More Peaceful Mind When See More Clearly 24/7',
                                    learn_more:'Learn More',
                                    a_href:'https://reolink.com/product/rlk8-800b4/',
                                    product_img:'https://cdn.reolink.com/wp-content/assets/2019/02/index-rlk8-800b4.png',
                                    state_logo:'new'
                                }
                            ]
                        }
                    } else {
                        var banner = {
                            list:[
                                {
                   
                                    product_name:'E1 Zoom',
                                    product_des:'Pan, Tilt & Zoom – Rundumsicht für Ihr Zuhause',
                                    learn_more:'Mehr erfahren',
                                    a_href:'https://reolink.com/de/product/e1-zoom/',
                                    product_img:'https://cdn.reolink.com/wp-content/assets/2019/11/e1-zoom.png',
                                    state_logo:'new'
                                },
                                {
                                    product_name:'RLK8-800B4',
                                    product_des:'4K UHD – Höhere Videoqualität, sicherer Rundumschutz',
                                    learn_more:'Mehr erfahren',
                                    a_href:'https://reolink.com/de/product/rlk8-800b4/',
                                    product_img:'https://cdn.reolink.com/wp-content/assets/2019/02/index-rlk8-800b4.png',
                                    state_logo:'new'
                                }
                            ]
                        }
                    }
                }
                    
            }
            
            if ($('div').hasClass('publicity-mod')) {
                var html = template('box',banner);
                $('.pc-body .publicity-mod').html(html);
                $('.mobile-body .publicity-mod').html(html);
                if (flag) {
                    $('.pc-body .publicity-mod .two-content').eq(1).children('a').addClass('flash-sale');
                }
            }
        });
    }


    // 官网PC,Mac版本号更新
    if (window.location.href.indexOf('/software-and-manual/') > 0) {

        if (location.href.indexOf('/de/')==-1) {

            var pc_mac_content = [
                    
                [    
                    
                    {
                        version_number:  '32-bit Download<br/>V7.2.2.33 | Updated: Apr 29, 2019',
                        version_number_download:  'https://s3.amazonaws.com/reolink-storage/website/client/Reolink+Client+Windows+v7.2.2.33+x86.zip',
                    },
                    {
                        version_number:  "64-bit Download<br/>V7.2.2.33 |  Updated: Apr 29, 2019",
                        version_number_download:  'https://s3.amazonaws.com/reolink-storage/website/client/Reolink+Client+Windows+v7.2.2.33+x64.zip',
                    },
                        
                    
                ],

                [    
                    
                    {
                        version_number:  "Download<br/>V3.5.6.55  | Updated: Apr 28, 2019",
                        version_number_download: 'https://cdn.reolink.com/files/client/Mac-ReolinkClient.zip',
                    },
    
                    
                ],

            ]

        }else{
            var pc_mac_content = [
                    
                [    
                    
                    {
                        version_number: "32-bit Download<br/>V7.2.2.33 | Aktualisiert am 29.04.2019",
                        version_number_download: 'https://s3.amazonaws.com/reolink-storage/website/client/Reolink+Client+Windows+v7.2.2.33+x86.zip',
                    },
                    {
                        version_number: "64-bit Download<br/>V7.2.2.33 | Aktualisiert am 29.04.2019",
                        version_number_download: 'https://s3.amazonaws.com/reolink-storage/website/client/Reolink+Client+Windows+v7.2.2.33+x64.zip'
                    }
                    
                ],

                [    
                    
                    {
                        version_number: "Download<br/>V3.5.6.55 | Aktualisiert am 28.04.2019",
                        version_number_download: 'https://cdn.reolink.com/files/client/Mac-ReolinkClient.zip',
                    },
    
                    
                ],

            ]

        };
        
        pc_mac_content.forEach(function(value,index){
            var aLabel = [];
            value.forEach(function(ele,i){
                aLabel.push('<p><a class="versions versions' + (i + 1) + '" href="'+ ele['version_number_download'] +'" > '+ ele['version_number'] + '</a></p>');
            });

            $('body').find('#download').find('.mod-download-left').find('.multi-versions li').eq(index).find('.versions').html(aLabel);

        })
        
    }
        

    //首页、store页、deals-and-new页banner
    var holidayConfig = {
        "primeDay": {
            "index": {
                "pc": {
                    "theme": "#7f2f5f",
                    "background": "/wp-content/assets/2019/06/prime-day-home-banner-pc.jpg",
                    "title": {
                        "en": "Prime Day",
                        "de": "Prime Day"
                    },
                    "description": {
                        "en": "2-Day Epic Deals for Everyone <br> Up to 38% OFF",
                        "de": "48-Stunden-Angebote für jeden <br> Bis zu 30% Rabatt"
                    },
                    "button": {
                        "en": "Save Now",
                        "de": "Jetzt sichern"
                    },
                    "subDescription": {
                        "en": "Ends July 16",
                        "de": "Endet am 16. Juli"
                    },
                    "link": {
                        "en": "https://reolink.com/flash-sale/",
                        "de": "https://reolink.com/de/flash-sale/"
                    }
                },
                "mobile": {
                    "theme": "#7f2f5f",
                    "background": "/wp-content/assets/2019/06/prime-day-home-banner-m.jpg",
                    "title": {
                        "en": "Prime Day",
                        "de": "Prime Day"
                    },
                    "description": {
                        "en": "Up to 38% OFF <br> 2-Day Epic Deals for Everyone <br> Ends July 16",
                        "de": "Bis zu 30% Rabatt <br> 48-Stunden-Angebote für jeden <br> Endet am 16. Juli "
                    },
                    "button": {
                        "en": "Save Now",
                        "de": "Jetzt sichern"
                    },
                    "subDescription": {
                        "en": "",
                        "de": ""
                    },
                    "link": {
                        "en": "https://m.reolink.com/flash-sale/",
                        "de": "https://m.reolink.com/de/flash-sale/"
                    }
                }
            },
            "store": {
                "pc": {
                    "theme": "#7f2f5f",
                    "background": "/wp-content/assets/2019/06/prime-day-store-banner-pc.jpg",
                    "title": {
                        "en": "Prime Day",
                        "de": "Prime Day"
                    },
                    "description": {
                        "en": "2-Day Epic Deals for Everyone <br>Up to 38% OFF",
                        "de": "48-Stunden-Angebote für jeden <br>Bis zu 30% Rabatt"
                    },
                    "button": {
                        "en": "Shop Now",
                        "de": "Jetzt sichern"
                    },
                    "subDescription": {
                        "en": "Ends July 16",
                        "de": "Endet am 16. Juli"
                    },
                    "link": {
                        "en": "https://reolink.com/flash-sale/",
                        "de": "https://reolink.com/de/flash-sale/"
                    }
                },
                "mobile": {
                    "theme": "#7f2f5f",
                    "background": {
                        "en": "/wp-content/assets/2019/06/prime-day-store-banner-en-m.jpg",
                        "de": "/wp-content/assets/2019/06/prime-day-store-banner-de-m.jpg"
                    },
                    "title": {
                        "en": "Prime Day",
                        "de": "Prime Day"
                    },
                    "description": {
                        "en": "Up to 38% OFF! Ends July 16",
                        "de": "Bis zu 30% Rabatt! Endet am 16. Juli"
                    },
                    "button": {
                        "en": "Save Now",
                        "de": "Jetzt sichern"
                    },
                    "link": {
                        "en": "https://m.reolink.com/flash-sale/",
                        "de": "https://m.reolink.com/de/flash-sale/"
                    }
                }
            },
            "deals_and_new": {
                "link" : {
                    "en": "https://m.reolink.com/flash-sale/",
                    "de": "https://m.reolink.com/de/flash-sale/"
                },
                "background" : {
                    "en": "/wp-content/assets/2019/06/prime-day-deals-and-new-en.jpg",
                    "de": "/wp-content/assets/2019/06/prime-day-deals-and-new-de.jpg"
                },
                "dec": {
                    "en": "Up to 38% OFF, 2-Day Epic Deals for Everyone!",
                    "de": "Bis zu 30% Rabatt; 48-Stunden-Angebote für jeden!"
                },
                "more": {
                    "en": "Save Now",
                    "de": "Jetzt sichern"
                },
                "status": "new"
            }
        },
        "paypal": {
            "index": {
                "pc": {
                    "theme": "#fff",
                    "background": "/wp-content/assets/2019/07/paypal-homepage-banner.jpg",
                    "buttonBackground":'linear-gradient(90deg,#f5534a,#f77245);',
                    'logo': "/wp-content/assets/2019/07/ppcom-white.svg",
                    "title": {
                        "en": "Buy More Save More <br>with PayPal",
                        "de": "Direktabzug <br>mit PayPal"
                    },
                    "description": {
                        "en": "Sitewide. <br>$5 OFF $500+; $15 OFF $1000+; $40 OFF $2000+",
                        "de": "Seitenweit: 5€ sparen ab 500€ - <br>15€ sparen ab 1000€ - 40€ sparen ab 2000€"
                    },
                    "button": {
                        "en": "Shop Now",
                        "de": "Jetzt sparen"
                    },
                    "subDescription": {
                        "en": "Ends July 20",
                        "de": "Endet am 20. Juli"
                    },
                    "link": {
                        "en": "https://store.reolink.com/",
                        "de": "https://store.reolink.com/de/"
                    }
                },
                "mobile": {
                    "theme": "#fff",
                    "background": "/wp-content/assets/2019/07/paypal-homepage-banner-m.jpg",
                    "buttonBackground":'linear-gradient(90deg,#f5534a,#f77245);',
                    "title": {
                        "en": "Buy More Save More with PayPal",
                        "de": "Direktabzug <br>mit PayPal"
                    },
                    "description": {
                        "en": "Sitewide. $5 OFF $500+; $15 OFF $1000+; <br>$40 OFF $2000+",
                        "de": "Seitenweit: 5€ sparen ab 500€ - <br>15€ sparen ab 1000€ - 40€ sparen ab 2000€"
                    },
                    "button": {
                        "en": "Shop Now",
                        "de": "Jetzt sichern"
                    },
                    "subDescription": {
                        "en": "Ends July 20",
                        "de": "Endet am 20. Juli"
                    },
                    "link": {
                        "en": "https://m.store.reolink.com/",
                        "de": "https://m.store.reolink.com/de/"
                    }
                }
            }
        }
    };

    $(document.body).trigger('addHolydayBanner', holidayConfig);



    //万圣节flash页面应急样式修改
    if (window.location.href.indexOf('/flash-sale/') !== -1) {

        ReoAPI.get('/lightning-deals/time').then(function (res) {

            if (res.data.name) {
            
                $('head').append("\n            <style type=\"text/css\">\n                body#holiday-promotions .holiday-banner-wrap .reo-container {\n                    font-size: 0;\n                }\n                .flash-sale,\n                body#holiday-promotions .holiday-color {\n                    background-color: #212121;\n                }\n                .flash-sale .classify-name,\n                body.holiday-promotions .title,\n                .video-user-info .video-title,\n                .holiday-vote .vote-number,\n                .holiday-vote .holiday-copyright,\n                .more-options-need .terms-wrap .terms-title,\n                .more-options-need .terms-wrap .terms-content .every-term,\n                .video-vote-dialog h4 {\n                    color: #ff6c08 !important;\n                }\n                body#holiday-promotions .flash-sale .reo-container .products-box {\n                    border: 1px solid #fff;\n                    background-color: #fff;\n                }\n                .flash-sale .products-box .ui-button.red-button {\n                    background: #ff6c08;\n                    border: 1px solid #ff6c08;\n                }\n                .flash-sale .products-box .ui-button.red-button:hover {\n                    background: #ff6c08;\n                }\n                body.holiday-promotions .subtitle {\n                    color: #fff;\n                }\n                body#holiday-promotions .holiday-vote .decoration-patch:nth-of-type(5) {\n                    display: none;\n                }\n                .more-options-need .more-choose {\n                    border-bottom: solid 1px #FF6C08;\n                }\n                body#holiday-promotions .video-vote-dialog .ui-input {\n                    border-color: #ff6c08;\n                }\n                @media screen and (min-width: 1200px) {\n                    body#holiday-promotions .holiday-vote .vote-video-list li .video-content {\n                        background-color: #ff6c08;\n                    }\n                    body#holiday-promotions .holiday-vote .ui-button {\n                        background-color: #ff6c08;\n                        border: 2px solid #ff6c08;\n                    }\n                    body#holiday-promotions .holiday-vote-wrap {\n                        background: #000000;\n                        margin-top: -1px;\n                    }\n                    body#holiday-promotions .video-vote-dialog-wrap .ui-button.red-button {\n                        background: #ff6c08;\n                        border: 1px solid #ff6c08;\n                    }\n                    .holiday-vote {\n                        background-image: url(https://cdn.reolink.com/wp-content/assets/2019/10/Halloween-sales-background-pc.png);\n                    }\n                }\n                @media screen and (max-width: 1199px) {\n                    body#holiday-promotions .holiday-vote .vote-video-list li .video-content {\n                        background-color: #ff6c08;\n                    }\n                    body#holiday-promotions .holiday-vote .ui-button {\n                        background-color: #ff6c08;\n                        border: 2px solid #ff6c08;\n                    }\n                    body#holiday-promotions .video-vote-dialog-wrap .ui-button.red-button {\n                        background: #ff6c08;\n                        border: 1px solid #ff6c08;\n                    }\n                    body#holiday-promotions .holiday-vote-wrap {\n                        background: #000000;\n                    }\n                    .holiday-vote {\n                        background-image: url(https://cdn.reolink.com/wp-content/assets/2019/10/Halloween-sales-background-m.png);\n                    }\n                    body#holiday-promotions .cam-links .holiday-empty-button:hover {\n                        background-color: #FF6C08;\n                        color: #fff;\n                    }\n                    .more-options-need .terms-wrap {\n                        padding: .6rem 0;\n                        margin: 0;\n                    }\n                }\n            <style>");
        
                $('body#holiday-promotions .holiday-vote').find('.decoration-patch').eq(0).attr('src','https://cdn.reolink.com/wp-content/assets/2019/10/Halloween-sales-decoration-7.png');
                $('body#holiday-promotions .holiday-vote').find('.decoration-patch').eq(1).attr('src','https://cdn.reolink.com/wp-content/assets/2019/10/Halloween-sales-decoration-8.png');
                $('body#holiday-promotions .holiday-vote').find('.decoration-patch').eq(2).attr('src','https://cdn.reolink.com/wp-content/assets/2019/10/Halloween-sales-decoration-9.png');
                $('body#holiday-promotions .holiday-vote').find('.decoration-patch').eq(3).attr('src','https://cdn.reolink.com/wp-content/assets/2019/10/Halloween-sales-decoration-10.png');
                $('.video-vote-dialog img').attr('src','https://cdn.reolink.com/wp-content/assets/2019/10/Halloween-sale-line.png');
                $('.spring-decoration').eq(1).css('display', 'none');
                $('.video-vote-dialog-wrap').css('z-index', 100);
        
                if (window.location.href.indexOf('/m.') !== -1) {
                    
                    $('body#holiday-promotions .holiday-vote').find('.decoration-patch').eq(3).css({'bottom': 'auto', 'top': '18rem', 'width': '12%'});
                } else {
                    
                    $('body#holiday-promotions .holiday-vote').find('.decoration-patch').eq(3).css({'bottom': 'auto', 'top': '18rem'});
                }
        
            }
        })
    }

    
})(jQuery);