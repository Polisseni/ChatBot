// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(ajuda|Ajuda|AJUDA|Agendar|AGENDAR|agendar|suporte|Suporte|SUPORTE|catálogo|Catálogo|CATÁLOGO|CATALOGO|Catalogo|catalogo|informaçoes|Informaçoes|INFORMACOES|informacoes|Informações|INFORMAÇÕES|menu|Menu|MENU|dia|DIA|tarde|TARDE|noite|NOITE|oi|Oi|OI|Olá|olá|ola|Ola|OLA|OLÁ|Teste|teste|TESTE|Eae|eae|EAE)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá, '+ name.split(" ")[0] + '! Sou o assistente virtual da empresa My Tech Path! Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Como Funciona\n2 - Nossos Serviços\n3 - Benefícios\n4 - Como aderir\n5 - Outras perguntas'); //Primeira mensagem de texto
        
    
        
    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Serviços de Desenvolvimento Profissional e Organizacional.\n\nOfereço um conjunto completo de serviços voltados para o desenvolvimento de carreira e a preparação profissional, tanto para indivíduos quanto para empresas.\n\nPara profissionais em transição ou crescimento de carreira, auxilio na construção de currículos estratégicos e cartas de apresentação personalizadas, otimização de perfis no LinkedIn, além de preparar você para entrevistas de emprego — desde simulações práticas até um acompanhamento completo em todas as etapas do processo seletivo, com suporte especializado.\n\nTambém ofereço uma consultoria de carreira mais ampla, ideal para quem busca repensar caminhos profissionais, alinhar propósito e conquistar novas oportunidades com mais clareza e direção.\n\nPara empresas, realizo treinamentos voltados ao desenvolvimento de equipes, com foco em performance, alinhamento e comunicação. Também ofereço treinamentos e workshops sobre Diversidade, Equidade, Inclusão e Pertencimento (DEIB), além de palestras personalizadas para diferentes contextos organizacionais.\n\nCada serviço é pensado para atender às necessidades específicas de quem busca evoluir profissionalmente ou fortalecer sua atuação no mercado.\n\nEntre em contato para saber qual serviço faz mais sentido para o seu momento.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'COMO FUNCIONA?\nÉ muito simples.\n\n1º Passo\nFaça seu cadastro e escolha o plano que desejar.\n\n2º Passo\nApós efetuar o pagamento do plano escolhido você já terá acesso a nossa área exclusiva para começar seu atendimento na mesma hora.\n\n3º Passo\nSempre que precisar');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://mypathtech.com/');


    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*Plano 1: Construção de CV + Cover Letter* - 53€.\n\n*Plano 2: Linkedin* - 53€.\n\n*Plano 3: Mock Interview/ Preparação para entrevista (1 hora)* - 80€.\n\n*Plano 4: Preparação completa para todas etapas da entrevista de emprego (3 etapas, feitas com suporte de recrutadora e prof. de inglês)* - 240€.\n\n*Plano 5: Consultoria completa de carreira* - 342€.\n\n*Plano 6: Treinamentos de equipe* - valor sob consulta\n\n*Plano 7: Treinamento de DEIB para empresa* - valor sob consulta\n\n*Plano 8: Palestras e Workshops* - valor sob consulta');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://mypathtech.com/');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Sorteio de prêmios todo ano.\n\nAtendimento e serviços a distância ou presencial, de segunda a sexta das 8h até as 18h.\n\nRede de apoio segura e confiável');
        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://mypathtech.com/');

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Você pode aderir aos nossos planos diretamente pelo nosso site ou pelo WhatsApp.\n\nApós a adesão, você terá acesso imediato');


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://mypathtech.com/');


    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp ou visite nosso site: https://www.instagram.com/mytechpath/ ');


    }








});