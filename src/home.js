const home = (content) => {
    let homePage = document.createElement('div')
    homePage.innerHTML = `
        <section class="main">
            <div class="center">
                    <h5>BEST IN TOWN</h5>
                    <h1 class="pizza">Pizza & Salads</h1>
                    <h5>
                        <button class="pizza-btn">See Today's Menu</button>
                    </h5>
            </div>
        </section>

        <section class="about">
            <div class="side-left"></div>
            <div class="side-right"></div>
            <div class="story">
                <div class="heading">
                    <img class="heading-img" src="images/heading_logo.png">
                    <h2>Our Story</h2>
                </div>
                <div class="heading-text">
                    <div class="col">
                        <p>Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. Morbi maximus lobortis ipsum, ut blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis massa. Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus. Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulum id dapibus dolor, ac cursus nulla. </p>
                    </div>
                
                    <div class="col">
                        <p>Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. Morbi maximus lobortis ipsum, ut blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis massa. Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus. Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulum id dapibus dolor, ac cursus nulla. </p>
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
					<a class="circle" href="#">
						<i class="fab fa-facebook-f"></i>
					</a>
				</li>
				<li>
					<a class="circle" href="#">
						<i class="fab fa-twitter"></i>
					</a>
				</li>
				<li>
					<a class="circle" href="#">
						<i class="fab fa-instagram"></i>
					</a>
				</li>
			</ul>

            <p class="copyright">Copyright ©2020 HawaiianWave All rights reserved</p>
        </footer>
    `

    content.appendChild(homePage)
}

export default home