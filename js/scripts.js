$(function(){

    /*
     *  Select2 color settings. Change value in select2Color variable with appropriate class
        for color of the select2 field dropdown. Usually it is should be the same class with the widget color class
    */
    var select2Color = 'red';

    $('.select-two-wrapper').on('click', function(){
        $('.select2-dropdown').addClass(select2Color);
    });

    /*
    *   Select2 field
    */
    $('.select-two-field').select2({
        width: '100%'
    });

    /*
    *   Trigger widget scollbar
    */
    $('.scrollbar-inner').scrollbar();

    /*
    *   Trigger navigation scrollbar
    */
    var navHeight = $('.ls-navigation .ls-navigation-inner').innerHeight();

        /* Calculation of viewport height minus the total height of the two container above navigation () */
    var sidebarHeightCalc = $('.left-sidebar').innerHeight() - 195;

        /* Check if navigation is higher than calulated viewport height and if it is true, than show scrolbar */
    if (sidebarHeightCalc < navHeight) {
        $('.ls-navigation-inner').addClass('mh-add scrollbar-inner');
        $('.ls-navigation-inner').scrollbar();

        $('.mh-add').css('max-height',sidebarHeightCalc);
        $('.ls-navigation-inner > ul').css('border-right','1px solid #2e2e2e');
    }

        /* Show scrollbar if window is resized */
    $(window).resize(function(){
        var navHeight = $('.ls-navigation .ls-navigation-inner').innerHeight();
        var sidebarHeightCalc = $('.left-sidebar').innerHeight() - 195;
        if (sidebarHeightCalc < navHeight) {
            $('.ls-navigation-inner').addClass('mh-add scrollbar-inner');
            $('.ls-navigation-inner').scrollbar();
            
            $('.ls-navigation-inner > ul').css('border-right','1px solid #2e2e2e');

            $('.mh-add').css('max-height',sidebarHeightCalc);
        } else {

           $('.mh-add').css('max-height','100%');
           $('.ls-navigation-inner').not().scrollbar();
        }
    });

    /*
    *   Slide toggle navigation dropdowns
    */
        /* Slide subnavigation */
    $('.ls-navigation-inner > ul > li > a').on('click',function(e){
        e.preventDefault();

        if ($(this).hasClass('active')) {
            $(this).parent().find('.ls-nav-dropdown' ).stop().slideUp();
            $(this).removeClass('active');
        } else {
            $(this).parent().find('.ls-nav-dropdown').stop().slideDown(function(){

                /* After the subnavigation is open, add scrollbar if navigation is larger than viewport */
                var navHeight = $('.ls-navigation .ls-navigation-inner').innerHeight();
                var sidebarHeightCalc = $('.left-sidebar').innerHeight() - 195;

                if(sidebarHeightCalc < navHeight) {
                    $('.ls-navigation-inner').addClass('mh-add scrollbar-inner');
                    $('.ls-navigation-inner').scrollbar();
                    $('.mh-add').css('max-height',sidebarHeightCalc);
                }
            });
            $(this).addClass('active');
        }

        

        /* Collapse dropdown of this element if clicked on other navigation link */
        $(this).parent().siblings().find("a").removeClass('active');
        $(this).parent().siblings().find('.ls-nav-dropdown').stop().slideUp();
        $(this).parent().siblings().find('.ls-nav-subnav').stop().slideUp();
    });
        /* Slide second subnavigation */
    $('ul.ls-nav-dropdown > li > a').on('click',function(e){
        e.preventDefault();

        if ($(this).hasClass('active')) {
            $(this).parent().find('.ls-nav-subnav' ).stop().slideUp();
            $(this).removeClass('active');
        } else {
            $(this).parent().find('.ls-nav-subnav').stop().slideDown();
            $(this).addClass('active');
        }

        /* Collapse dropdown of this element if clicked on other navigation link */
        $(this).parent().siblings().find("a").removeClass('active');
        $(this).parent().siblings().find('.ls-nav-dropdown').stop().slideUp();
        $(this).parent().siblings().find('.ls-nav-subnav').stop().slideUp();
    });
    

    /*
    *   Datatables
    */
    $('#datatable').DataTable({
        responsive: true,
        "oLanguage": {
         "oPaginate": {
           "sNext": "",
           "sPrevious": ""
         }
        }
    });

    /*
    *   TinyMCE
    */
    tinymce.init({
        selector: '.tinymce',
        min_height: 406,
        resize: false
    });

    /*
    *   Trigger notifications dropdown
    */
    $('.ls-notify-action').on('click', function(e){
        e.preventDefault();

        $('.ls-notifications-dropdown').stop().toggleClass('ls-nd-slide');
    });

    /*
    *   Trigger widget settings container
    */
    $('.wa-settings').on('click', function(e){
        if ($(this).hasClass('wa-settings-close')) {
           e.preventDefault();
            $('.widget-content-settings').css('top','-100%');
            $(this).removeClass('wa-settings-close'); 
        } else {
            e.preventDefault();
            $('.widget-content-settings').css('top','0');
            $(this).addClass('wa-settings-close'); 
        }
    });

    /*
    *   Trigger reset password container
    */
    $('.login-forgot-password-link').on('click', function(e){
        $('.login-forgot-password-form').css('top','0px');
    });
    
    $('.login-reset-back').on('click', function(e){
        $('.login-forgot-password-form').css('top','-100%');
    });

});
