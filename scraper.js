const puppeteer = require('puppeteer');                                   // puppeteer sert à récupérer la source HTML d'une page chargée
const fs = require('fs');                                                 // fs nous sert ici à écrire notre fichier

const getResults = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.folhomee.fr/', {waitUntil: 'networkidle0'});      // on demande ici à puppeteer d'aller sur folhomee.fr, si la réponse est bonne...
    const html = await page.content();
    fs.writeFile('views/page.html', html, _ => console.log('HTML saved with success ! '));   //alors fs enregistre le code html dans le fichier gh.html
    await browser.close();
};


module.exports = getResults;
