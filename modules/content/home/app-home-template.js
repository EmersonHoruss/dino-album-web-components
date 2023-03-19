const template = document.createElement("template")

template.innerHTML = `
<div id="about">
        <section>
                <h2>About</h2>
                <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_OxonRsV8w4.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player>
                <p>Dino's project is an international company and is working for you since 2023 a.C. giving you the best experience in everything you want because the company has the best people working in each part of the glove.</p>
        </section>
        
        <section>
                <h2>The manager</h2>
                <img>
                <p>Dino's project is an international company and is working for you since 2023 a.C. giving you the best experience in everything you want because the company has the best people working in each part of the glove.</p>
        </section>

        <section>
                <h2>Our Clients</h2>
                <p>Dino's project is an international company and is working for you since 2023 a.C. giving you the best experience in everything you want because the company has the best people working in each part of the glove.</p>
                <app-carousel></app-carousel>
        </section>                
</div>
`

export default template
