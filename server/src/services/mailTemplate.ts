export const mailTemplate = (userName: string, game: string, matchLink: string, date: string, time: string) => {
    return `
    <html>
        <head>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
        </head>
        <body style="font-family: 'Barlow', sans-serif; text-align: center;">
            <div style="background-color: #58CBFB; font-size: 24px; height: 100px; display: flex; justify-content: center; align-items: center;">
                <h1 style="margin: 0; width: 100%;">Confirmação de partida</h1>
            </div>
            <div style="font-size: 18px; padding: 20px;">
                <p>Olá, <strong>${userName}</strong>!</p>
                <p>Gostaríamos de avisar que sua partida de <strong>${game}</strong> está confirmada para 
                    às <strong>${time}</strong> do dia <strong>${date}</strong>!</p>
        
                <p>Clique no botão abaixo para acessar o link da sua partida</p>
            </div>

            <a href="${matchLink}" style="background-color: #58CBFB; color: white; padding: 10px 20px; text-decoration: none; border-radius: 10px; display: inline-block; margin-top: 20px;">Entrar</a>
            
        </body>
    </html>`;
}