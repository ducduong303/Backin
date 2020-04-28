var all = {
    init: function () {
        this.load();
        this.fixed();
        this.clickmenu()
        this.scrollprogress();
        this.product();
        this.carousel();
        this.carousel2();
        this.shoppingCart();
        
    },
    load:function(){
        const load = document.querySelector('.load');
        const ul = document.querySelector('.load ul')
        setTimeout(()=>{
            load.classList.add('none')
        },2000)
        setTimeout(()=>{
            ul.classList.add('none')
        },1500)
    },
    /** Nav fixed */
    fixed: function () {
        let header = document.querySelector('.header');
        let ontop = document.querySelector('.ontop');
        window.addEventListener('scroll', function () {
            if (this.window.scrollY > 100) {
                header.classList.add('hien');
                ontop.classList.add('scale')
            }
            else {
                header.classList.remove('hien');
                ontop.classList.remove('scale')
                

            }
        })
    },
    /** Xử lý Menu Responsive */
    clickmenu: function () {
        /**Click menu */
        let tab = document.querySelectorAll('.tab')
        let sub__nav = document.querySelectorAll('.sub__nav')
        let icon = document.querySelectorAll('.icon')
        tab.forEach(function (btn, index) {
            btn.addEventListener('click', function () {
                sub__nav[index].classList.toggle('he')
                icon[index].classList.toggle('deg')

            })
        })
        /**Click bar */
        let bar = document.querySelector('.bar')
        let nav__menu = document.querySelector('.nav__menu-center')
        bar.addEventListener('click', () => {
            nav__menu.classList.toggle('height')
        })
        /**Click Search */
        let nut = document.querySelector('.search');
        let ovelay = document.querySelector('.search-overlay');
        nut.addEventListener('click',()=>{
            ovelay.classList.add('bienmat')
        })  
        ovelay.addEventListener('click',(event)=>{
            if(event.target == ovelay ){
                ovelay.classList.remove('bienmat')
            }
        })
    },
    /** Scroll Progress */
    scrollprogress: function () {
        let progress = document.querySelector('.header__bootom-box')
        window.addEventListener('scroll', () => {
            const windowScroll = window.pageYOffset;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (windowScroll / height) * 100
            progress.style.width = `${scrolled}%`
        })
    },
    product:function(){
 
        let img_a = document.getElementById('a')
        let img_b = document.getElementById('b')
        let img_c = document.getElementById('c')
        let img_d = document.getElementById('d')
        let img_e = document.getElementById('e')
        let img_f = document.getElementById('f')
        let img_g = document.getElementById('g')
        let img_h = document.getElementById('h')
        let nav_a = document.querySelectorAll('.nav-a')
        let nav_b = document.querySelectorAll('.nav-b')
        let nav_c = document.querySelectorAll('.nav-c')
        let nav_d = document.querySelectorAll('.nav-d')
        let nav_e = document.querySelectorAll('.nav-e')
        let nav_f = document.querySelectorAll('.nav-f')
        let nav_g = document.querySelectorAll('.nav-g')
        let nav_h = document.querySelectorAll('.nav-h')

        nav_a.forEach(x =>x.addEventListener('click',navclick_a))
        function navclick_a(e){
            // Lắp qua remove 
            nav_a.forEach(x=> x.classList.remove('xanh'))
            // target change img
            img_a.src = e.target.src; 
            img_a.classList.add('small')
            // Thêm animaion
            setTimeout(function(){
                img_a.classList.remove('small')
            },500)
            // add style boder
            e.target.classList.add('xanh')
        }
        nav_b.forEach(x =>x.addEventListener('click',navclick_b))
        function navclick_b(e){
            nav_b.forEach(x=> x.classList.remove('xanh'))
            img_b.src = e.target.src; 
            img_b.classList.add('small')
            setTimeout(function(){
                img_b.classList.remove('small')
            },500)
            e.target.classList.add('xanh')
        }
        nav_c.forEach(x =>x.addEventListener('click',navclick_c))
        function navclick_c(e){
            nav_c.forEach(x=> x.classList.remove('xanh'))
            img_c.src = e.target.src; 
            img_c.classList.add('small')
            setTimeout(function(){
                img_c.classList.remove('small')
            },500)
            e.target.classList.add('xanh')
        }
        nav_d.forEach(x =>x.addEventListener('click',navclick_d))
        function navclick_d(e){
            nav_d.forEach(x=> x.classList.remove('xanh'))
            img_d.src = e.target.src; 
            img_d.classList.add('small')
            setTimeout(function(){
                img_d.classList.remove('small')
            },500)
            e.target.classList.add('xanh')
        }
        nav_e.forEach(x =>x.addEventListener('click',navclick_e))
        function navclick_e(e){
            nav_e.forEach(x=> x.classList.remove('xanh'))
            img_e.src = e.target.src; 
            img_e.classList.add('small')
            setTimeout(function(){
                img_e.classList.remove('small')
            },500)
            e.target.classList.add('xanh')
        }
        nav_f.forEach(x =>x.addEventListener('click',navclick_f))
        function navclick_f(e){
            nav_f.forEach(x=> x.classList.remove('xanh'))
            img_f.src = e.target.src; 
            img_f.classList.add('small')
            setTimeout(function(){
                img_f.classList.remove('small')
            },500)
            e.target.classList.add('xanh')
        }
        nav_g.forEach(x =>x.addEventListener('click',navclick_g))
        function navclick_g(e){
            nav_g.forEach(x=> x.classList.remove('xanh'))
            img_g.src = e.target.src; 
            img_g.classList.add('small')
            setTimeout(function(){
                img_g.classList.remove('small')
            },500)
            e.target.classList.add('xanh')
        }
        nav_h.forEach(x =>x.addEventListener('click',navclick_h))
        function navclick_h(e){
            nav_h.forEach(x=> x.classList.remove('xanh'))
            img_h.src = e.target.src; 
            img_h.classList.add('small')
            setTimeout(function(){
                img_h.classList.remove('small')
            },500)
            e.target.classList.add('xanh')
        }
    },
     /** Slide owl Carousel */
    carousel: function () {
        $(document).ready(function () {
            $('.slide1').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
                autoplay: false,
                navText: ['<i class="fa fa-angle-left" ></i>', '<i class="fa fa-angle-right" ></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            })
        });
    },
    carousel2: function () {
        $(document).ready(function () {
            $('.owl-carousel').owlCarousel({
                loop: true,
                // margin: 10,
                nav: false,
                dots: true,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    900:{
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            })
        });
    },
    shoppingCart: function () {

        let carts = document.querySelectorAll('.add-cart');
        let products = [
            {
                name: "Gray pack",
                tag: "graypack",
                price: 15,
                inCart: 0
            },
            {
                name: "Orange pack",
                tag: "orangepack",
                price: 20,
                inCart: 0
            },
            {
                name: "Brown pack",
                tag: "brownpack",
                price: 15,
                inCart: 0
            },
            {
                name: "Black pack",
                tag: "blackpack",
                price: 20,
                inCart: 0
            },
            {
                name: "Gray2 pack",
                tag: "gray2pack",
                price: 20,
                inCart: 0
            },
            {
                name: "Yellow pack",
                tag: "yellowpack",
                price: 20,
                inCart: 0
            },
            {
                name: "Blue pack",
                tag: "bluepack",
                price: 20,
                inCart: 0
            },
            {
                name: "Green pack",
                tag: "greenpack",
                price: 20,
                inCart: 0
            }
        ];

        for (let i = 0; i < carts.length; i++) {
            carts[i].addEventListener('click', () => {
                cartNumbers(products[i]);
                totalCost(products[i]);
            });
        }

        // Hàm update sản phẩm trong giỏ hàng
        function onLoadCartNumbers() {
            let productNumbers = localStorage.getItem('cartNumbers');
            if (productNumbers) {
                document.querySelector('.header__cart span').textContent = productNumbers;
            }
        }

        // Hàm tính toán sản phẩm
        function cartNumbers(product, action) {
            // Bất kỳ khi nào lấy dữ liệu từ local cũng phải xem kiểu trả về
            let productNumbers = localStorage.getItem('cartNumbers'); // lấy dữ liệu
            productNumbers = parseInt(productNumbers); // chuyển thành số

            let cartItems = localStorage.getItem('productsInCart');
            cartItems = JSON.parse(cartItems);

            if (action) {
                localStorage.setItem("cartNumbers", productNumbers - 1);
                document.querySelector('.header__cart span').textContent = productNumbers - 1;
            } else if (productNumbers) {
                localStorage.setItem("cartNumbers", productNumbers + 1); // nếu đã tồn tại thì + thêm 
                document.querySelector('.header__cart span').textContent = productNumbers + 1; // in 
            } else {
                localStorage.setItem("cartNumbers", 1);
                document.querySelector('.header__cart span').textContent = 1;
            }
            setItems(product);

        }

        // Hàm đẩy sản phẩm nên local
        function setItems(product) {
            let productNumbers = localStorage.getItem('cartNumbers');
            productNumbers = parseInt(productNumbers);
            let cartItems = localStorage.getItem('productsInCart');
            cartItems = JSON.parse(cartItems);

            if (cartItems != null) {
                let currentProduct = product.tag;

                if (cartItems[currentProduct] == undefined) {
                    cartItems = {
                        ...cartItems,
                        [currentProduct]: product
                    }
                }
                cartItems[currentProduct].inCart += 1;

            } else {
                product.inCart = 1;
                cartItems = {
                    [product.tag]: product
                };
            }

            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        }

        // Hàm tính tổng sản phẩm
        function totalCost(product, action) {
            let cart = localStorage.getItem("totalCost");

            if (action) {
                cart = parseInt(cart);

                localStorage.setItem("totalCost", cart - product.price);
            } else if (cart != null) {

                cart = parseInt(cart);
                localStorage.setItem("totalCost", cart + product.price);

            } else {
                localStorage.setItem("totalCost", product.price);
            }
        }
        // Hàm hiển thị sản phẩm
        function displayCart() {
            // Kéo dữ liệu trên local 
            let cartItems = localStorage.getItem('productsInCart');
            cartItems = JSON.parse(cartItems);

            let cart = localStorage.getItem("totalCost");
            cart = parseInt(cart);

            let productContainer = document.querySelector('.products');

            if (cartItems && productContainer) {
                productContainer.innerHTML = '';
                Object.values(cartItems).map(item => {
                    // cộng phần tử html không muốn bị ghi đè sdung +=
                    productContainer.innerHTML += `
                    <div class = "product">
                        <div class = "product-box">
                        <i class="far fa-times-circle"></i>
                            <img src = "./assets/image/product/${item.tag}.webp">
                             <span>${item.name}<span>  
                        </div> 
                       <div class = "price">
                            <span>$${item.price},00</span>
                       </div>
                      
                       <div class = "quantity">
                       <i class="fas fa-chevron-circle-left decrease"></i>
                       <span><input type = "text" value ="${item.inCart}" class= " incar"></span>
                       <i class="fas fa-chevron-circle-right increase"></i>
                       </div>
                       <div class ="total">
                            <span>$${item.inCart * item.price},00</span>           
                       </div>
                    </div>           
                `


                });
                productContainer.innerHTML += `
                <div class="totalCost">
                    <h3 class="total-tilte">Basket Total</h3>
                    <h3 class="total-price">$${cart},00</h3>
                </div>
                <a href="index.html" class="pay">Thanh Toán</a>
                `
                deleteButtons();
                manageQuantity();
            }
        }
        // Hàm Tăng giảm quantity
        function manageQuantity() {
            let decreaseButtons = document.querySelectorAll('.decrease');
            let increaseButtons = document.querySelectorAll('.increase');
            let currentQuantity = 0;
            let currentProduct = '';
            let cartItems = localStorage.getItem('productsInCart');
            cartItems = JSON.parse(cartItems);

            for (let i = 0; i < increaseButtons.length; i++) {
                decreaseButtons[i].addEventListener('click', () => {

                    currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;

                    currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();


                    if (cartItems[currentProduct].inCart > 1) {
                        cartItems[currentProduct].inCart -= 1;
                        cartNumbers(cartItems[currentProduct], "decrease");
                        totalCost(cartItems[currentProduct], "decrease");
                        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                        displayCart();
                    }
                });
                increaseButtons[i].addEventListener('click', () => {
                    currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
                    currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();
                    cartItems[currentProduct].inCart += 1;
                    cartNumbers(cartItems[currentProduct]);
                    totalCost(cartItems[currentProduct]);
                    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                    displayCart();
                });
            }
        }
        //Hàm xóa Sản phẩm
        function deleteButtons() {
            let deleteButtons = document.querySelectorAll('.fa-times-circle');
            let productNumbers = localStorage.getItem('cartNumbers');
            let cartCost = localStorage.getItem("totalCost");
            let cartItems = localStorage.getItem('productsInCart');
            cartItems = JSON.parse(cartItems);
            let productName;


            for (let i = 0; i < deleteButtons.length; i++) {
                deleteButtons[i].addEventListener('click', () => {
                    productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g, '').trim();

                    localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
                    localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart));

                    delete cartItems[productName];
                    localStorage.setItem('productsInCart', JSON.stringify(cartItems));

                    displayCart();
                    onLoadCartNumbers();
                })
            }
        }
        onLoadCartNumbers();
        displayCart();
    },

}
all.init();


