//1 - Referência e bibliotecas
//Declara um objeto chamado test vindo da biblioteca playwright/test
const { test, expect} = require('@playwright/test');

//2- Classes ou Funções ou Metódos
// Um script pode executar de forma: - Sincrona ou Assíncrona


test('Realizar o fluxo de compra da mochila', async ({ page })=> {

    await page.goto('https://www.saucedemo.com') // Acessa o site
    await expect(page).toHaveURL('https://www.saucedemo.com') // Verifica se está na página raiz
    const botao_login = page.locator('#login-button') // Identifica o botão Login
    await expect(botao_login).toHaveText('Login') // Verifica se o botão Login está visível

    // Realizar o login 
    await page.fill('[name="user-name"]', 'standard_user') // Preenche o campo usuário
    await page.fill('[placeholder="Password"]', 'secret_sauce') // Preenche o campo senha 
    await botao_login.click(); // Clica no botão Login

    // Página de Inventário / Produtos
    // Verificar se o usuário está na página de inventário
    await expect(page).toHaveURL(/.*inventory/) // Verifica se está na página de inventário
    const tituloSecao= 'span.title' // Identifica o título da seção
    await expect(page.locator(tituloSecao)).toHaveText('Products')// Verifica se o título da página é Products

    // Adicionar a mochila ao carrinho de compras
    const btnAdicionar = '[data-test="add-to-cart-sauce-labs-backpack"]'
    await page.locator(btnAdicionar).click() 




    //Verificar se o carrinho de compras está com 1 item
    const icoQuantidadeCart= 'span.shopping_cart_badge' // Identifica o ícone de quantidade do carrinho por css selector
    await expect(page.locator(icoQuantidadeCart)).toHaveText('1') // Verifica se o carrinho está com 1 item


    // Clicar no ícone do carrinho de compras
    await page.locator(icoQuantidadeCart).click() // Clica no ícone do carrinho de compras

    //Espera de 3 segundos
    await page.waitForTimeout(3000) //Mal visto no mercado










});// final do teste

//3 - Ações ou Comandos ou Interações ou Validações