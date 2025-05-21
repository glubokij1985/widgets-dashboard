const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const manifestPath = path.resolve(__dirname, 'mf.manifest.json');
if (!fs.existsSync(manifestPath)) {
    console.error('mf.manifest.json не найден!');
    process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

async function runApp(app) {
    return new Promise((resolve, reject) => {
        console.log(`Запускаю ${app.name} (cwd: ${app.cwd}, cmd: ${app.cmd})`);
        const parts = app.cmd.split(' ');
        const proc = spawn(parts[0], parts.slice(1), {
            cwd: path.resolve(__dirname, app.cwd),
            shell: true,
            stdio: ['ignore', 'pipe', 'pipe']
        });

        proc.stdout.on('data', data => {
            process.stdout.write(`[${app.name} stdout] ${data}`);
        });
        proc.stderr.on('data', data => {
            process.stderr.write(`[${app.name} stderr] ${data}`);
        });

        proc.on('close', code => {
            console.log(`${app.name} завершился с кодом ${code}`);
            resolve();
        });

        proc.on('error', err => {
            console.error(`${app.name} ошибка:`, err);
            reject(err);
        });
    });
}

(async () => {
    for (const app of manifest.apps) {
        try {
            await runApp(app);
        } catch (e) {
            console.error('Ошибка запуска приложения:', e);
        }
    }
    console.log('Все приложения запущены (или завершились)');
})();
