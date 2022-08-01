function insertAtCursor(myField, myValue) {
    var textTop = myField.scrollTop;
    var documentTop = document.documentElement.scrollTop;

    //IE 浏览器
    if (document.selection) {
        myField.focus();
        var sel = document.selection.createRange();
        sel.text = myValue;
        sel.select();
    }

    //FireFox、Chrome等
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
        myField.focus();
        myField.selectionStart = startPos + myValue.length;
        myField.selectionEnd = startPos + myValue.length;
    } else {
        myField.value += myValue;
        myField.focus();
    }

    myField.scrollTop = textTop;
    document.documentElement.scrollTop = documentTop;
}
$(function() {
    if($('#wmd-button-row').length>0){
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-sj-button" style="" title="Chèn thụt lề dòng đầu tiên">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-suoqi"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-zt-button" style="" title="Chèn văn bản màu">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-ziti"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-bili-button" style="" title="Chèn video BiliBili">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-bilibili"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-shipin-button" style="" title="Chèn video cục bộ">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-shipin"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-wangyiyun-button" style="" title="Chèn NetEase Cloud Music">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-wangyiyinle"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-photo-button" style="" title="Bộ album">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xiangce"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-text-button" style="" title="Chèn văn bản được đánh dấu">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-tanhao"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-ss-button" style="" title="Chèn hộp thu nhỏ">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xiala"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-tab-button" style="" title="Chèn TAB">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-tab"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-anniu-button" style="" title="Nút chèn">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-anniu"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-hf-button" style="" title="Chèn cmt mới hiển thị">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-bukejian"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-dl-button" style="" title="Chèn đăng nhập mới hiển thị">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-denglu"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-blackcard-button" style="" title="Chèn có thể nhìn thấy qua">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-shubiao"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-cid-button" style="" title="Chèn thẻ bài viết">' +'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-kapian"></use></svg>' +'</li>');
        $('#wmd-button-row').append('<li class="wmd-button" id="wmd-owo-button" style="" title="Chèn biểu tượng cảm xúc"><span class="OwO"></span></li>');
        new OwO({
            logo: 'OωO表情',
            container: document.getElementsByClassName('OwO')[0],
            target: document.getElementById('text'),
            api: '/usr/themes/pigeon/assets/owo/OwO.json',
            position: 'down',
            width: '400px',
            maxHeight: '250px'
        });
        $(document).on('click','#wmd-sj-button',function() {
            myField = document.getElementById('text');
            insertAtCursor(myField, '&emsp;&emsp;');
        });
        $(document).on('click','#wmd-bili-button',function() {
            myField = document.getElementById('text');
            insertAtCursor(myField, '\n[bilibili bv="" p="1"]\n');
        });
        $(document).on('click','#wmd-shipin-button',function() {
            myField = document.getElementById('text');
            insertAtCursor(myField, '\n[video src="Địa chỉ video"]\n');
        });
        $(document).on('click','#wmd-wangyiyun-button',function() {
            myField = document.getElementById('text');
            insertAtCursor(myField, '\n[mp3][/mp3]\n');
        });
        $(document).on('click', '#wmd-photo-button', function () {
            myField = document.getElementById('text');
            insertAtCursor(myField, '\n[photos]\n\n[/photos]\n');
        });
        $(document).on('click', '#wmd-dl-button', function () {
            myField = document.getElementById('text');
            insertAtCursor(myField, '\n[login][/login]\n');
        });
        $(document).on('click', '#wmd-hf-button', function () {
            myField = document.getElementById('text');
            insertAtCursor(myField, '\n[hide][/hide]\n');
        });
        $(document).on('click', '#wmd-cid-button', function () {
            myField = document.getElementById('text');
            insertAtCursor(myField, '\n[cid="Nhập ID bài viết cần chèn"]\n');
        });
        $(document).on('click', '#wmd-blackcard-button', function () {
            myField = document.getElementById('text');
            insertAtCursor(myField, '\n[bkc][/bkc]\n');
        });

        $(document).on('click', '#wmd-zt-button', function() {

            $('body').append(
                '<div id="TPanel">'+
                '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>'+
                '<div class="wmd-prompt-dialog">'+
                '<div>'+
                '<p><b>文字样式自定义</b></p>'+
                '<p><labe>Nhập màu văn bản</labe><input name="color"' +
                ' type="text" placeholder="Tùy chọn (ví dụ: #ffffff, red)"></input></p>' +
                ' <p><labe>Nhập nội dung văn bản</labe><textarea type="text"/></p>'+
                '</div>'+
                '<form>'+
                '<button type="button" class="btn btn-s primary" id="t_ok">Ok</button>'+
                '<button type="button" class="btn btn-s" id="t_cancel">Bỏ</button>'+
                '</form>'+
                '</div>'+
                '</div>');

        });


        $(document).on('click', '#wmd-anniu-button', function() {

            $('body').append(
                '<div id="anniu">'+
                '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>'+
                '<div class="wmd-prompt-dialog">'+
                '<div>'+
                '<p><b>Thêm button</b></p>'+
                '<p><labe>Màu button</labe><input name="color"' +
                ' type="text" placeholder="Tùy chọn (ví dụ: #ffffff, red)"></input></p>' +
                '<p><labe>URL của button</labe><input name="links"' +
                ' type="text" placeholder="Vui lòng nhập liên kết button"></input></p>' +
                '<p><labe>按钮文字</labe><input name="title"' +
                ' type="text" placeholder="Vui lòng nhập tên button"></input></p>' +
                '</div>'+
                '<form>'+
                '<button type="button" class="btn btn-s primary" id="anniu_ok">Ok</button>'+
                '<button type="button" class="btn btn-s" id="anniu_cancel">Bỏ</button>'+
                '</form>'+
                '</div>'+
                '</div>');

        });

        $(document).on('click', '#wmd-text-button', function() {//标签

            $('body').append(
                '<div id="textPanel">'+//标签
                '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>'+
                '<div class="wmd-prompt-dialog">'+
                '<div>'+
                '<p><b>Thêm trích dẫn được đánh dấu</b></p>'+
                '<p><labe>Phong cách</labe></p>'+
                '<p><select id="type" style="width: 100%"><option value="share">Màu xám</option><option value="yellow">Màu vàng</option><option value="red">Màu đỏ</option><option value="blue">Xanh lam</option><option value="green">Màu xanh lá cây</option></select></p>'+
                '</div>'+
                '<form>'+
                '<button type="button" class="btn btn-s primary" id="text_ok">Ok</button>'+//标签
                '<button type="button" class="btn btn-s" id="text_cancel">Bỏ</button>'+//标签
                '</form>'+
                '</div>'+
                '</div>');
            $('.wmd-prompt-dialog input').select();

        });

        $(document).on('click', '#wmd-ss-button', function() {//收缩框

            $('body').append(
                '<div id="ssPanel">'+//收缩框
                '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>'+
                '<div class="wmd-prompt-dialog">'+
                '<div>'+
                '<p><b>Thêm hộp thu nhỏ</b></p>'+
                '<p><select id="sst" style="width: 20%"><option value="collapse-block">Mở rộng</option><option value="collapse-none">合上</option></select><input type="text" name="bt" placeholder="Tiêu đề" style="width: 80%"></input></p>'+
                '</div>'+
                '<form>'+
                '<button type="button" class="btn btn-s primary" id="ss_ok">Ok</button>'+//收缩框
                '<button type="button" class="btn btn-s" id="ss_cancel">Bỏ</button>'+//收缩框
                '</form>'+
                '</div>'+
                '</div>');
            $('.wmd-prompt-dialog input').select();

        });

        $(document).on('click', '#wmd-tab-button', function() {

            textContent = '[tabs]\n' +
                '[tab-pane label="Tab 1"]Nội dung 1[/tab-pane]\n' +
                '[tab-pane label="Tab 2"]Nội dung 2[/tab-pane]\n' +
                '[/tabs]';

            myField = document.getElementById('text');
            inserContentToTextArea(myField,textContent);

        });

        $(document).on('click','#t_ok',function() {
            //执行一个ajax请求获取解析歌单地址的音频信息
            myField = document.getElementById('text');
            var content = $('.wmd-prompt-dialog textarea').val();
            var color = $('.wmd-prompt-dialog input[name = "color"]').val();
            if (color!=""){
                color = ' '+color+'';
            }
            var insertContent = "";
            if ($("#isCenter").is(':checked')){
                insertContent = '<p class="center"'+color+'>'+content+'</p>';
            }else{
                insertContent = '[colour type="'+color+'"]'+content+'[/colour]';
            }

            inserContentToTextArea(myField,insertContent,'#TPanel');

        });

        $(document).on('click','#anniu_ok',function() {
            myField = document.getElementById('text');
            var lianjie = $('.wmd-prompt-dialog input[name = "links"]').val();
            var name = $('.wmd-prompt-dialog input[name = "title"]').val();
            var color = $('.wmd-prompt-dialog input[name = "color"]').val();
            if (color!=""){
                color = ' '+color+'';
            }
            var insertContent = "";
            if ($("#isCenter").is(':checked')){
                insertContent = '<p class="center"'+color+'>'+content+'</p>';
            }else{
                insertContent = '[button color="'+color+'" url="'+lianjie+'"]'+name+'[/button]';
            }

            inserContentToTextArea(myField,insertContent,'#anniu');

        });

        $(document).on('click','#text_ok',function() {//标签

            var obj_ty = document.getElementById("type"); //定位id
            var index_ty = obj_ty.selectedIndex; // 选中索引
            var type = obj_ty.options[index_ty].value; // 选中值
//输出格式
            textContent = '[tip type="' + type + '"]这里编辑标签内容[/tip]';

            myField = document.getElementById('text');
            inserContentToTextArea(myField,textContent,'#textPanel');//标签

        });

        $(document).on('click','#ss_ok',function() {//收缩框

            var obj_ty = document.getElementById("sst"); //定位id
            var index_ty = obj_ty.selectedIndex; // 选中索引
            var type = obj_ty.options[index_ty].value; // 选中值
            var t = $('.wmd-prompt-dialog input[name="bt"]').val();
//输出格式
            textContent = '[collapse status="' + type + '" label="' + t + '"]Chỉnh sửa nội dung của hộp thu nhỏ tại đây[/collapse]';

            myField = document.getElementById('text');
            inserContentToTextArea(myField,textContent,'#ssPanel');//收缩框

        });

        $(document).on('click','#t_cancel',function() {
            $('#TPanel').remove();
            $('textarea').focus();
        });
        $(document).on('click','#text_cancel',function() {//标签
            $('#textPanel').remove();//标签
            $('textarea').focus();
        });

        $(document).on('click','#ss_cancel',function() {//收缩框
            $('#ssPanel').remove();//收缩框
            $('textarea').focus();
        });
        $(document).on('click','#anniu_cancel',function() {
            $('#anniu').remove();
            $('textarea').focus();
        });

    }
});

//插入内容到编辑器
function inserContentToTextArea(myField,textContent,modelId) {
    $(modelId).remove();
    if (document.selection) {//IE浏览器
        myField.focus();
        var sel = document.selection.createRange();
        sel.text = textContent;
        myField.focus();
    } else if (myField.selectionStart || myField.selectionStart == '0') {
        //FireFox、Chrome
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        var cursorPos = startPos;
        myField.value = myField.value.substring(0, startPos)
            + textContent
            + myField.value.substring(endPos, myField.value.length);
        cursorPos += textContent.length;

        myField.selectionStart = cursorPos;
        myField.selectionEnd = cursorPos;
        myField.focus();
    }
    else{//其他环境
        myField.value += textContent;
        myField.focus();
    }

    //开启粘贴上传图片

}


