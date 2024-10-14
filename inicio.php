<?php include 'includes/head.php'; ?>
<!-- header -->
<div class="bg-home">

    <header>

        <nav class="header-content container">

            <div class="header-icons" data-aos="fade-down">
                <a class="links-social-instagram"><i class="fa-brands fa-instagram fa-2x"></i></a>
                <a class="links-social-facebook"><i class="fa-brands fa-facebook fa-2x"></i></a>
                <a class="links-social-linkedin"><i class="fa-brands fa-linkedin fa-2x"></i></a>
                <a class="links-social-youtube"><i class="fa-brands fa-youtube fa-2x"></i></a>
                <a class="links-social-linktr"><i class="fa-solid fa-tree fa-2x"></i></a>
            </div>

            <div class="header-logo" data-aos="fade-up" data-aos-delay="300">
                <img data-aos="flip-up" data-aos-delay="300" data-aos-duraction="1500" src="assets/logo.webp"
                    srcset="assets/logo.webp" alt="Logo da barbearia" />
            </div>

            <div data-aos="fade-down">
                <a href="#" class="header-button whatsapp-contact">
                    Agendar Horário
                </a>
            </div>

        </nav>

        <main class="hero container" data-aos="fade-up" data-aos-delay="400">
            <h1></h1>
            <p>Aqui podemos colocar uma frase de efeito, para atrair os clientes</p>

            <button id="comprar" class="button-contact">
                Saiba mais
            </button>
            <br>
            <div class="scroll">
                <p>Use o scroll</p>
                <div class='mouse-container'>
                    <div class='mouse'>
                        <span class='scroll-down'></span>
                    </div>
                </div>
            </div>
        </main>

    </header>

</div>

<!-- about -->
<section class="about">

    <div class="container about-content">
        <div data-aos="zoom-in" data-aos-delay="100">
            <img src="assets/image.webp" srcset="assets/image.webp" alt="Imgem sobre a barberaria" />
        </div>

        <div class="about-description" data-aos="zoom-out-left" data-aos-delay="250">
            <h2>Sobre</h2>
            <blockquote>
                <p class="paragrafo">Douglas Meazza é um Personal Trainer reconhecido no Rio Grande do Sul, com 10
                    anos de experiência na área. Ele se destaca por sua abordagem inovadora, sempre buscando métodos
                    eficazes para o emagrecimento e bem-estar.</p>
                <p class="paragrafo">Natural de ********, Douglas fundou o projeto "Te ensinarei", onde
                    compartilha sua paixão por fitness e nutrição, ajudando pessoas a alcançarem suas metas de forma
                    saudável e sustentável.</p>
                <p class="paragrafo">Aos *** anos, Douglas combina conhecimento prático com uma visão motivadora,
                    comprometido em transformar vidas e promover hábitos saudáveis para todos.</p>
            </blockquote><br>
            <i>
                <i class="fa-solid fa-quote-left"></i>
                Persista sempre na busca dos seus sonhos.
                <i class="fa-solid fa-quote-right"></i> <br>
                - Douglas Meazza
            </i>
        </div>
    </div>

</section>

<!-- services -->
<section class="services" id="comprar">

    <div class="services-content container" data-aos="fade-down" data-aos-delay="100">
        <h2>Nosso Produto Principal</h2>
        <p>Vejas o nosso produto <strong>destaque</strong></p>
    </div>

    <section class="haircuts">
        <div class="haircut" data-aos="fade-up" data-aos-delay="150">
            <img src="assets/guia-1.webp" class="principal" srcset="assets/guia-1.webp" alt="Guia" />
            <div class="haircut-info">
                <button class="hotmart" id="hotmart">Saiba mais</button>
            </div>
        </div>
    </section>

    <br><br><br>

    <div class="services-content container" data-aos="fade-down" data-aos-delay="300">
        <p>Vejas produtos relacionados</p>
    </div>

    <section class="haircuts">

        <div class="haircut" data-aos="fade-up" data-aos-delay="250">
            <img src="assets/guia-2.webp" srcset="assets/guia-2.webp" alt="Guia" />
            <div class="haircut-info">
                <button class="hotmart" id="hotmart">Saiba mais</button>
            </div>
        </div>

        <div class="haircut" data-aos="fade-up" data-aos-delay="350">
            <img src="assets/guia-3.webp" srcset="assets/guia-3.webp" alt="Guia" />
            <div class="haircut-info">
                <button class="hotmart" id="hotmart">Saiba mais</button>
            </div>
        </div>

    </section>

    <div class="services-content container" data-aos="fade-up" data-aos-delay="500">
        <p>Conheça o nosso catálogo clicando <a href="" class="link-catalogo"><u>aqui</u> </a><i
                class="fa-solid fa-arrow-up-right-from-square fa-2xs icon-link"></i></p>
    </div>

</section>

<?php include 'includes/footer.php'; ?>