$(function() {
    $('#yes').click(function(event) {
        modal('我就知道橘子姐姐您一定会愿意的。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('明人不说暗话！', A);
    });
});

function A() {
    modal('上天派我来凡间', B);
}

function B() {
    modal('就是为了让我找到你', C);
}

function C() {
    modal('请你跟我走吧', D);
}

function D() {
    modal('王母娘娘说了', E);
}

function E() {
    modal('你本不属于人间', F);
}

function F() {
    modal('是那次宴会上的一个意外', G);
}

function G() {
    modal('你落入凡尘', H);
}

function H() {
    modal('现在，让我带你重回仙界', I);
}

function I() {
    modal('请带上你的手机', J)
}

function J() {
    modal('滴滴一下出发吧！！！', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
