const contact = (content) => {
    let contactPage = document.createElement('div')
    contactPage.innerHTML = `
        <section class="contact">
            <div class="center">
                    <h5>Say Hello</h5>
                    <h1 class="pizza">Contact</h1>
            </div>
        </section>

        <section class="about">
            <div class="story">
                <div class="heading">
                    <img class="heading-img" src="images/heading_logo.png">
                    <h2>Say Hello</h2>
                    <h5>Say hello, send us a message</h5>
                    <p>Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis. Enean porttitor eros non ultrices convallis. Vivamus quis dolor ut arcu lobortis finibus a vitae leo. Sed eget tempus sem. Nullam sed lacus sed metus tincidunt lobortis lobortis at nibh. Morbi euismod, arcu in gravida rhoncus</p>
                </div>

                <form>
                        <div class="contact-row">
                                <div class="input"> <input type="text" placeholder="Name">  </div>
                                <div class="input"> <input type="text" placeholder="E-mail">  </div>
                                <div class="big-input"><input type="text" placeholder="Subject">  </div>
                                <div class="big-input">
                                <textarea placeholder="Message"></textarea></div>
                        </div>
                        <h5 class="contact-btn">
                            <button class="pizza-btn">Send Message</button>
                        </h5>
                </form>
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

    content.appendChild(contactPage)
}

export default contact