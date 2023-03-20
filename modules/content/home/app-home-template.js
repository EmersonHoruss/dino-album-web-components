const template = document.createElement("template")

template.innerHTML = `
<div id="home" class="wrapper">
        <section id="about" class="full-view top-as-padding bottom-as-padding">
                <div class="title"> 
                        <h2>About</h2>
                </div>
                
                <div class="wrapper-lottie">
                        <lottie-player
                                background="transparent" 
                                speed="1" 
                                loop 
                                autoplay>
                        </lottie-player>
                </div>
                
                <div class="content">
                        <p>
                                Dino's project is an international company and 
                                is working for you since 2023 a.C. giving you 
                                the best experience in everything you want 
                                because the company has the best people working 
                                in each part of the glove.
                        </p>
                </div>
        </section>

        <section id="founder" class="full-view top-as-padding bottom-as-padding">
                <div class="title"> 
                        <h2>The Founder</h2>
                </div>
                
                <div class="wrapper-lottie">
                        <lottie-player
                                background="transparent" 
                                speed="1" 
                                loop 
                                autoplay>
                        </lottie-player>
                </div>
                
                <div class="content">
                        <p>
                                Drako dino is from Peru's. He grew up with their 
                                parent in the mountains. He's a very creative
                                drake and it's interested to help people and 
                                this is main porpuse he created the company to
                                help them.
                        </p>
                </div>
        </section>

        <section id="clients" class="full-view top-as-padding bottom-as-padding">
                <div class="title"> 
                        <h2>Our Clients</h2>
                </div>

                <div class="wrapper-lottie">
                        <lottie-player
                                background="transparent" 
                                speed="1" 
                                loop 
                                autoplay>
                        </lottie-player>
                </div>

                <div class="content">
                       <app-carousel></app-carousel>
                </div>
        </section>
</div>
`

export default template
