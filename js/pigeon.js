console.log("\n%c Pigeon By 山卜方 %c https://abc.lol ","color:#fff;background:#000;padding:5px 0","color:#fff;background:#666;padding:5px 0");
//返回顶部
$("#top_to").hide();$(window).scroll(function(){if($(this).scrollTop()>200){$("#top_to").fadeIn(100)}else{$("#top_to").fadeOut(200)}});$("#top_to").click(function(){$("body,html").animate({scrollTop:0},400);return false});


//懒加载
function LanLoad(){
    new LazyLoad({});
}
function message(){
    message_box = {
        clearButterbar: function(e) {
            if (jQuery("section").length > 0) {
                jQuery("section").remove();
            }
        },
        message_box: function(message) {
            var t = this;
            t.clearButterbar();
            jQuery("body").append('<section class="filter_frame filter_open">'+
            '<div class="filter_box">'+
            '<div class="filter_bg"></div>'+
            '<div class="filter_tip">' + message + '<div class="filter_tip_off"><div id="filter_off" onclick="share_off()"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-close"><svg id="icon-close" viewBox="0 0 1024 1024"><path d="M29.696 512c0 266.24 215.552 482.304 482.304 482.304S994.304 778.752 994.304 512v-0.512c0-266.24-216.064-482.304-482.304-482.304S29.696 245.248 29.696 512z" fill="#ffffff"></path><path d="M544.256 512l168.448-168.448c8.704-8.704 8.704-22.528 0-31.232l-1.024-1.024c-8.704-8.704-22.528-8.704-31.232 0L512 480.256l-168.448-168.96c-8.704-8.704-22.528-8.704-31.232 0l-1.024 1.024c-8.704 8.704-8.704 22.528 0 31.232l168.448 168.96L311.296 680.96c-8.704 8.704-8.704 22.528 0 31.232l1.024 1.024c8.704 8.704 22.528 8.704 31.232 0L512 544.768l168.448 168.448c8.704 8.704 22.528 8.704 31.232 0l1.024-1.024c8.704-8.704 8.704-22.528 0-31.232L544.256 512z" fill="#dbdbdb"></path></svg></use></svg></div></div></div>'+
            '</div>'+
            '</section>');
        }
        
    };
};
function share_messages(){
    message_share = {
        clearButterbar: function(e) {
            if (jQuery("section").length > 0) {
                jQuery("section").remove();
            }
        },
        message_share: function(message) {
            var t = this;
            t.clearButterbar();
            jQuery("body").append('<section class="filter_frame filter_open">'+
            '<div class="filter_box">'+
            '<div class="filter_bg"></div>'+
            '<div class="filter_tip share_tip">' + message + '<div class="filter_tip_off"><div id="filter_off" onclick="share_off()"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-close"><svg id="icon-close" viewBox="0 0 1024 1024"><path d="M29.696 512c0 266.24 215.552 482.304 482.304 482.304S994.304 778.752 994.304 512v-0.512c0-266.24-216.064-482.304-482.304-482.304S29.696 245.248 29.696 512z" fill="#ffffff"></path><path d="M544.256 512l168.448-168.448c8.704-8.704 8.704-22.528 0-31.232l-1.024-1.024c-8.704-8.704-22.528-8.704-31.232 0L512 480.256l-168.448-168.96c-8.704-8.704-22.528-8.704-31.232 0l-1.024 1.024c-8.704 8.704-8.704 22.528 0 31.232l168.448 168.96L311.296 680.96c-8.704 8.704-8.704 22.528 0 31.232l1.024 1.024c8.704 8.704 22.528 8.704 31.232 0L512 544.768l168.448 168.448c8.704 8.704 22.528 8.704 31.232 0l1.024-1.024c8.704-8.704 8.704-22.528 0-31.232L544.256 512z" fill="#dbdbdb"></path></svg></use></svg></div></div></div>'+
            '</div>'+
            '</section>');
        }
        
    };
};


function share_off() {
    $('section').toggleClass('filter_close');
    setTimeout("jQuery('.filter_tip').remove()", 400);
    setTimeout("jQuery('section').remove()", 600);
};

function dianzan(){
    var storage = window.localStorage;
    if(Config.post_id!=0){
        if(storage.getItem('like_'+Config.post_id)){
         $('.zan_btn[data-action="like"]').addClass('current');
         $('.zan_btn[data-action="like"]').attr('data-action', 'unlike');
        }
    };
    $(document).on("click", '.zan_btn[data-action="like"]', function () {
        if(storage.getItem('like_'+Config.post_id))
            event.preventDefault();
            var $this = $('.zan_btn');
            var id = $(this).data("id");
            var html = $this.html();
        
            if ($this.hasClass('requesting')) {
                return false;
            };
        
            $this.addClass('requesting');
            $.ajax({
                url: Config.ajax_url,
                type: 'post',
                dataType: 'html',
                data: { likeup: id, do_action: 'do' },
            })
                .done(function (data) {storage.setItem('like_'+id, true);
                    $this.addClass('current').html(html);
                    $this.attr('data-action', 'unlike');
                    Qmsg.success('Cảm ơn bạn! 😊');
                    $('.agree-num').html(data.trim());
                })
                .always(function () {
                    $this.removeClass('requesting');
                });
            return false;
        });
    
    $(document).on("click", '.zan_btn[data-action="unlike"]', function () {
    if(!storage.getItem('like_'+Config.post_id)){return false;};
    event.preventDefault();
    var $this = $('.zan_btn');
    var id = $(this).data("id");
    var html = $this.html();

    if ($this.hasClass('requesting')) {
        return false;
    };

    $this.addClass('requesting');

    $this.removeClass('current');

    $.ajax({
        url: Config.ajax_url,
        type: 'post',
        dataType: 'html',
        data: {likeup: id, do_action: 'undo' },
    })
        .done(function (data) {storage.removeItem('like_'+id); 
            $this.removeClass('current').html(html);
            $this.attr('data-action', 'like');
            Qmsg.warning('Không thích à? 😰');
            $('.agree-num').html(data.trim());
        })
        .always(function () {
            $this.removeClass('requesting');
        });
    return false;
});
};
function ajax_paging(){
    $('.paging_next a').click(function() {
        $this = $(this);
        $this.addClass('loading').text('Đang tải... 💤');
        aMsg = Qmsg.loading({
			content:"Đang tải... 💤"
		});
        var href = $this.attr('href');
        if (href != undefined) {
            $.ajax({
                url: href,
                type: 'get',
                error: function(request) {
					aMsg.close();
					Qmsg.error('Tải không thành công, vui lòng làm mới và thử lại! 🤨');
                },
                success: function(data) {
                    $this.removeClass('loading').text('Xem thêm');
                    var $res = $(data).find('.index_list');
                    $('.pigeon_ajax').append($res.fadeIn(500));
                    var newhref = $(data).find('.paging_next a').attr('href');
                    aMsg.close();
                    Qmsg.success('Tải thành công! 😁');
                    if (newhref != undefined) {
                        $('.paging_next a').attr('href', newhref);
                    } else {
                        $('.paging_next a').remove();
                    }
                    new LazyLoad({});
                }
            });
        }
        return false;
    });
};

function slide(){
    if (Config.swiper === 'true') {
    var swiper = new Swiper('.swiper-container', {
        speed:1000,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay : {
            delay:3000
        },
        navigation: {
            nextEl: '.slide_button-next',
            prevEl: '.slide_button-prev',
        },
      });
    };
};

//Ajax 评论
function ajaxComment(){
    $('.new_comment_form').submit(function(event){
        var commentdata=$(this).serializeArray();
        $.ajax({
            url:$(this).attr('action'),
            type:$(this).attr('method'),
            data:commentdata,
            beforeSend:function() {
                aMsg = Qmsg.loading({
                    content:"Đang gửi, vui lòng đợi... 💤"
                });
            },
            error:function(request) {
                aMsg.close();
                Qmsg.warning(request.responseText.split('<div class="container">')[1].split('</div>')[0]);
            },
            success:function(data){
                $('#submitComment').addClass('submit').text('Bình luận');
                var error=/<title>Error<\/title>/;
                if (error.test(data)){
                    var text=data.match(/<div(.*?)>(.*?)<\/div>/is);
                    var str='Một lỗi không rõ đã xảy ra!';if (text!=null) str=text[2];
                    aMsg.close();
					Qmsg.error('Gửi không thành công!');
                } else {
                    aMsg.close();
                    Qmsg.success('Bình luận thành công! 😉');
                    $('.textarea_box').val('');
                    if ($('#cancel-comment-reply-link').css('display')!='none') $('#cancel-comment-reply-link').click();
                    var target='#comments',parent=true;
                    $.each(commentdata,function(i,field) {if (field.name=='parent') parent=false;});
                    if (!parent || !$('ol.page-navigator .prev').length){
                        var latest=-19260817;
                        $('#comments .comment-parent',data).each(function(){
                            var id=$(this).attr('id'),coid=parseInt(id.substring(8));
                            if (coid>latest) {latest=coid;target='#'+id;}
                        });
                        jQuery(document).ready(function($){
                            $(".cross-excerpt img").each(function(){
                                var _a = $("").attr("href",this.src);
                                var element = document.createElement("a");
                                $(element).attr("data-fancybox", "images");
                                $(element).attr("href", $(this).attr("src"));
                                $(this).wrap(element);
                            })
                            if ($('#comments .parent').length > 0) {
                                for (var i = 0; i < $('#comments .parent').length; i ++) {
                                    var parentLink = '<a class="mr-1" href="' + $('#comments .parent').eq(i).attr('href') + '">' + $('#comments .parent').eq(i).html() + '</a>';
                                    $('#comments .parent').eq(i).next().prepend(parentLink);
                                }
                                $('#comments .parent').remove();
                            };
                            let elements = document.querySelectorAll(".cross-excerpt img");
                            elements.forEach(element=>element.classList.toggle("cross-imgg"));
                            new LazyLoad({});
                        });
                    }
                    $('.comment').html($('.comment',data).html()); 
                    $('.comments-title').html($('.comments-title',data).html()); 
                    $('.comments_lie').html($('.comments_lie',data).html());
                }
            }
        });
        return false;
    });
};
//评论@标签
function mraite(){
    if ($('#comments .parent').length > 0) {
        for (var i = 0; i < $('#comments .parent').length; i ++) {
            var parentLink = '<a class="mr-1" href="' + $('#comments .parent').eq(i).attr('href') + '">' + $('#comments .parent').eq(i).html() + '</a>';
            $('#comments .parent').eq(i).next().prepend(parentLink);
        }
        $('#comments .parent').remove();
    };
};
//私密评论
function private_comment(){
    $('#inset_3').click(function () {
        if($(this).is(':checked')) {
          $("textarea").addClass("simi");
        }else {
          $("textarea").removeClass("simi");
        }
    });
};
//collapse
function collapse(){
    $('.article-collapse .collapse-head').on('click', function () {
        let next = $(this).next();
        next.slideToggle(200);
        $('.article-collapse .collapse-body').not(next).slideUp();
    });
};
//tabs
function tabs(){
    $('.article-tabs .nav span').on('click', function () {
        let panel = $(this).attr('data-panel');
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.article-tabs').find('.tab-content div').hide();
        $(this)
        .parents('.article-tabs')
        .find('.tab-content div[data-panel=' + panel + ']')
        .show();
    });
};
function dmfz(){

    var codeblocks = document.getElementsByTagName("pre")
    //循环每个pre代码块，并添加 复制代码
    
    for (var i = 0; i < codeblocks.length; i++) {
        //显示 复制代码 按钮
        currentCode = codeblocks[i]
        currentCode.style = "position: relative;"
        var copy = document.createElement("div")
        copy.style = "position: absolute;right: 0px;\
        top: -5px;padding: 2px 8px;\
        margin: 8px;cursor: pointer;\
        z-index: 9999;"
        copy.innerHTML = "<i class='iconfont icon-fuzhi'></i>"
        currentCode.appendChild(copy)
        //让所有 "复制"按钮 全部隐藏
        copy.style.visibility = "hidden"
    }
    
    
    for (var i = 0; i < codeblocks.length; i++) {
    
    
        !function (i) {
            //鼠标移到代码块，就显示按钮
            codeblocks[i].onmouseover = function () {
                codeblocks[i].childNodes[1].style.visibility = "visible"
            }
    
            //执行 复制代码 功能
            function copyArticle(event) {
                const range = document.createRange();
    
                //范围是 code，不包括刚才创建的div
                range.selectNode(codeblocks[i].childNodes[0]);
    
                const selection = window.getSelection();
                if (selection.rangeCount > 0) selection.removeAllRanges();
                selection.addRange(range);
                document.execCommand('copy');
                Qmsg.success('Sao chép thành công! 😆');
                setTimeout(function () {
                    codeblocks[i].childNodes[1].innerHTML = "<i class='iconfont icon-fuzhi'></i>"
                }, 1000);
                //清除选择区
                if (selection.rangeCount > 0) selection.removeAllRanges(); 0
            }
            codeblocks[i].childNodes[1].addEventListener('click', copyArticle, false);
    
        }(i);
    
        !function (i) {
            //鼠标从代码块移开 则不显示复制代码按钮
            codeblocks[i].onmouseout = function () {
                codeblocks[i].childNodes[1].style.visibility = "hidden"
            }
        }(i);
    }
};
function encryption(){
    $(".protected").submit(function() {
        var surl=$(".protected").attr("action");//表单地址
        $.ajax({
                        type: "POST",
                        url:surl,
                        data:$('.protected').serialize(),// 你的form
                        async:true,
                        error: function(request) {
                            Qmsg.error('Gửi không thành công, vui lòng làm mới và thử lại!');
                        },
                        success: function(data) {
        if(data.indexOf("密码错误") >= 0 && ((data.indexOf("<title>Error</title>") >= 0 && data.indexOf("<title>Error</title>") <= 100) || data.indexOf("Typecho_Widget_Exception") >= 0)) {
            Qmsg.error('密码错误');
        }else{
        location.reload();//密码正确刷新页面
        Qmsg.success('密码正确');
        }
        }
        });
        return false;
    });
};

function cross_ajax(){
    $('.commentslistnext').click(function() {
        $this = $(this);
        $this.addClass('loading').text('Đang tải...'); 
        var href = $this.attr('href'); 
        if (href != undefined) { 
            $.ajax({ 
                url: href,
                type: 'get',
                error: function(request) {
                },
                success: function(data) { 
                    $this.removeClass('loading').text('Xem thêm');
                    var $res = $(data).find('.comment_ajax');
                    $('.comment-list').append($res.fadeIn(500));
                    var newhref = $(data).find('.commentslistnext').attr('href');
                    if (newhref != undefined) {
                        $('.commentslistnext').attr('href', newhref);
                    } else {
                        $('.commentslistnext').remove();
                    }
                    let elements = document.querySelectorAll(".cross_xia img");
                    elements.forEach(element=>element.classList.toggle("cross-imgg"));
                }
            });
        }
        return false;
    });
};
function archives(){
    $('.archives_btn').first().next().slideToggle(0);
    $('.archives_btn').on('click', function () {
        let next = $(this).next();
        next.slideToggle(200);
        $('.archives_open').not(next).slideUp();
    });
};
//时光机图片
function crossimg(){
    jQuery(document).ready(function($){
        $(".cross-excerpt img").each(function(){
            var _a = $("").attr("href",this.src);
            var element = document.createElement("a");
            $(element).attr("data-fancybox", "images");
            $(element).attr("href", $(this).attr("src"));
            $(this).wrap(element);
        })
        let elements = document.querySelectorAll(".cross-excerpt img");
        elements.forEach(element=>element.classList.toggle("cross-imgg"));
    });
};


//PjAX配置
if (Config.Pjax === 'true') {
    $(document).pjax('a[href^="' + Config.homeUrl + '"]:not(a[target="_blank"], a[no-pjax])', {
        container: '#pjax',
        fragment: '#pjax',
        timeout: 8000
    })
    .on('pjax:send', function() { 
        NProgress.start(); 
    })
    .on('pjax:complete', function() {
        //NProgress
        NProgress.done();
       //返回顶部
       message();
       share_messages();
       dianzan();
       ajax_paging();
       LanLoad();
       slide();
       ajaxComment();
       mraite();
       private_comment();
       collapse();
       tabs();
       dmfz();
       encryption();
       cross_ajax();
       crossimg();
       archives();

    });
};
//Cuộc gọi không có pjax
(function() {
    message();
    share_messages();
    dianzan();
    ajax_paging();
    LanLoad();
    slide();
    ajaxComment();
    mraite();
    private_comment();
    collapse();
    tabs();
    dmfz();
    encryption();
    cross_ajax();
    crossimg();
    archives();

})();

function getChildren(el, className) {
    for (let item of el.children) if (item.className === className) return item;
    return null;
}

customElements.define(
    'pigeon-mlist',
    class PigeonMlist extends HTMLElement {
        constructor() {
            super();
            this.options = {
                id: this.getAttribute('id'),
                color: this.getAttribute('color') || '#1989fa',
                autoplay: this.getAttribute('autoplay') ? true : false
            };
            this.render();
        }
        render() {
            if (!this.options.id) return (this.innerHTML = 'ID danh sách phát trên đám mây NetEase chưa được điền!');
            this.innerHTML = '<span style="display: block" class="_content"></span>';
            fetch('https://api.injahow.cn/meting/?type=playlist&id=' + this.options.id).then(async response => {
                const audio = await response.json();
                new APlayer({
                    container: getChildren(this, '_content'),
                    lrcType: 3,
                    theme: this.options.color,
                    autoplay: this.options.autoplay,
                    audio
                });
            });
        }
    }
);

customElements.define(
    'pigeon-musi',
    class PigeonMusi extends HTMLElement {
        constructor() {
            super();
            this.options = {
                id: this.getAttribute('id'),
                color: this.getAttribute('color') || '#1989fa',
                autoplay: this.getAttribute('autoplay') ? true : false
            };
            this.render();
        }
        render() {
            if (!this.options.id) return (this.innerHTML = 'ID danh sách phát trên đám mây NetEase chưa được điền!');
            this.innerHTML = '<span style="display: block" class="_content"></span>';
            fetch('https://api.injahow.cn/meting/?type=song&id=' + this.options.id).then(async response => {
                const audio = await response.json();
                new APlayer({
                    container: getChildren(this, '_content'),
                    lrcType: 3,
                    theme: this.options.color,
                    autoplay: this.options.autoplay,
                    audio
                });
            });
        }
    }
);

//搜索框
function search_show(){
	if($("#search_bar").css("display")=='none'){
		 $("#search_bar").slideDown();
	}else{
		 $("#search_bar").slideUp();
     };
    if($("#sou_block").css("display")=='none'){
        $("#sou_block").slideDown(0);
   }else{
        $("#sou_block").slideUp(0);
    };

    if($("#sou_none").css("display")=='none'){
        $("#sou_none").slideDown(0);
   }else{
        $("#sou_none").slideUp(0);
    }
};


