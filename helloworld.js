console.log('Hello World');
const exitTime = 10000

const timerId = setTimeout(() => {
    console.log('Goodbye World');
}, exitTime);

process.on('SIGINT', () => {
    console.log('\nStopped by user after ' + Math.floor(process.uptime()) + ' seconds');
    process.exit(0);
});