process.stdout.write('Hello World\n');
const startTime = Date.now();

const timerId = setTimeout(() => {
    process.stdout.write('Goodbye World\n');
    process.exit(0);
}, 10000);

process.stdin.on('data', (data) => {
    if(data.toString().trim() === 'finish'){
        clearTimeout(timerId);
        process.stdout.write('Stopped by user after ' + (Date.now() - startTime)/1000 + ' seconds\n');
        process.exit(0);
    }
})