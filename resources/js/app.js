requirejs.config({
    baseUrl: '/js',
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        can: 'lib/can.jquery.min',
        helper: 'helper',
        loading: 'lib/loading.plugin',
        spin: 'lib/spin.min',
        util: 'util',
        moment: 'lib/moment.min',
        summernote: '/summernote/summernote',
        slick: 'lib/slick.min',
        jspdf: 'lib/jspdf.min',
        html2canvas: 'lib/html2canvas.min',
        Sortable: 'lib/Sortable.min',

        // jquery and plugins
        'jquery' : 'lib/jquery-2.1.0.min',
        'jquery.masked-input': 'lib/jquery.masked-input.min',
        'jquery.gritter': 'lib/jquery.gritter.min',
        'jquery.placeholder' : 'lib/jquery.placeholder.min',
        'jquery.cookie' : 'lib/jquery.cookie',
        'jquery.animateNumber': 'lib/jquery.animateNumber.min',
        'jquery.form': 'lib/jquery.form.min',

        // es6 pollyfills
        'promise': 'lib/es6-promise.auto.min',

        // controls
        fileUploadControl: 'control/file-upload-control',
        pagingControl: 'control/paging-control',

        steelControl: 'control/steel-control',
        selectControl: 'control/select-control',
        productSelectControl: 'control/product-select-control',
        baseCartControl: 'control/base-cart-control',
        cartControl: 'control/cart-control',
        miniCartControl: 'control/mini-cart-control',
        popCartControl: 'control/pop-cart-control',
        formControl: 'control/form-control',
        modalControl: 'control/modal-control',
        postCodeControl: 'control/post-code-control',

        //mobile
        popupControl: 'control/popup-control',
        mobileCartControl: 'control/mobile-cart-control',
        popLoginControl: 'control/pop-login-control',
        popCounselControl: 'control/pop-counsel-control'
    },

    shim: {
        'loading': ['jquery', 'spin'],
        'jquery.masked-input': ['jquery'],
        'jquery.gritter': ['jquery'],
        'jquery.placeholder' : ['jquery'],
        'jquery.cookie': ['jquery'],
        'jquery.animateNumber': ['jquery'],
        'jquery.form': ['jquery'],
        'promise': {
            exports: 'Promise'
        }
    }
});