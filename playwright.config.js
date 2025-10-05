const { defineConfig, devices } = require('@playwright/test')
const path = require('path')
const { compute_run_folder, ensure_subdirs } = require('./utils/path_tools')

// Diretórios onde ficam os artefatos
const ARTIFACTS_ROOT = path.join(__dirname, 'artifacts') //nome da pasta raiz
const rundDir = compute_run_folder(ARTIFACTS_ROOT)
const {resultsDir, screenshotsDir} = ensure_subdirs(rundDir)

// Exões caminhos de diretórios como vairiáveis de ambiente
process.env.RUN_DIR         = rundDir
process.env.SCREENSHOTS_DIR = screenshotsDir

module.exports = defineConfig({
    testDir: './tests', // nossos testes estão na pasta testes  
    timeout: 30000, // cada teste pode durar no máximo 30 segundos
    fullyParallel: true, // testes podem ser executados em paralelo / multi thread
    outputDir: resultsDir, 
    use: {
        baseURL: 'https://www.saucedemo.com',
        headless: false, // false - exibe o browser e true oculta
        // Políticas globais de artefatos automaticos
        screenshot: 'only-on-failure', // apenas quando der erro
        video: 'retain-on-failure',   // apenas quando der erro
        trace: 'retain-on-failure',   // apenas quando der erro
        
        // outros tipos de timeout
        actionTimeout: 15000, // timeout se nada estiver acontecendo em 15 segundos
        navigationTimeout: 20000, // cada navegação pode durar no máximo 20 segundos
        
        launchOptions: {
            slowMo: 0    // espere 1 segundo entre cada ação
        }
    },

   projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome']}

        }    
    ]
        
     })        