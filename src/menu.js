const menu = (content) => {
    let menuPage = document.createElement('div')
    menuPage.innerHTML = `
        <section class="main-menu">
            <div class="center">
                    <h5>BEST IN TOWN</h5>
                    <h1 class="pizza">Menu</h1>
            </div>
        </section>

        <section class="menu">
            <div class="story">
                <div class="heading">
                    <h2>Choose from Pizza</h2>
                </div>
                <div class="row">
                    <div class="menu-item">
                        <img class="pizzas" src="images/pepperoni.jpg">
                        <h5>Pizza Pepperoni</h5>
                        <h4 class="money">6.90$</h4>
                    </div>
                    <div class="menu-item">
                        <img class="pizzas" src="images/mario.jpg">
                        <h5>Pizza Mario</h5>
                        <h4 class="money">7.50$</h4>
                    </div>
                    <div class="menu-item">
                        <img class="pizzas" src="images/rancho.jpg">
                        <h5>Pizza Rancho</h5>
                        <h4 class="money">10$</h4>
                    </div>
                    <div class="menu-item">
                        <img class="pizzas" src="images/4cheese.jpg">
                        <h5>Pizza 4 Cheese</h5>
                        <h4 class="money">4.20$</h4>
                    </div>
                </div>
            </div>
        </section>

        <section class="menu">
            <div class="story">
                <div class="heading">
                    <h2>Choose from Salads</h2>
                </div>
                <div class="row">
                    <div class="menu-item">
                        <img class="salads" src="images/salad-1.jpg">
                        <h5>Salad Tomatoes</h5>
                        <h4 class="money">6.90$</h4>
                    </div>
                    <div class="menu-item">
                        <img class="salads" src="images/salad-2.jpg">
                        <h5>Salad Greek</h5>
                        <h4 class="money">7.50$</h4>
                    </div>
                    <div class="menu-item">
                        <img class="salads" src="images/salad-3.jpg">
                        <h5>Salad Tuna</h5>
                        <h4 class="money">10$</h4>
                    </div>
                    <div class="menu-item">
                        <img class="salads" src="images/salad-4.jpg">
                        <h5>Salad Veggy</h5>
                        <h4 class="money">4.20$</h4>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <a href="#"><img class="logo" src="images/logo.png"></a>
            <div class="sub">
            <p class="underline">Adress:</p>
            <p>Plot 5 George Street, Georgian House</p>
            </div>
            <div class="sub">
            <p class="underline">Phone:</p>
            <p>+256 414 233 219</p>
            </div>
            <div class="sub">
            <p class="underline">Email:</p>
            <p>uugveauiusaosas@gmail.com</p>
            </div>

            <ul class="social-media">
				<li>
					<a class="circle">
						<i class="fab fa-facebook-f"></i>
					</a>
				</li>
				<li>
					<a class="circle">
						<i class="fab fa-twitter"></i>
					</a>
				</li>
				<li>
					<a class="circle">
						<i class="fab fa-instagram"></i>
					</a>
				</li>
			</ul>
            
            <p class="copyright">Copyright ©2020 HawaiianWave All rights reserved</p>
        </footer>
    `

    content.appendChild(menuPage)
}

export default menu