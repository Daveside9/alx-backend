import redis from 'redis';

const publisher = redis.createClient();

publisher.on('error', (error) => console.error(`Redis_client not connected to the server: ${error.message}`));
publisher.on('connect', () => console.log('Redis client_connected to the server'));

function publishMessage(message, time) {
    setTimeout(() => {
        console.log(`About_to_send ${message}`);
        publisher.publish('holberton_school_channel', message);
    }, time);
}

publishMessage('Holberton Student #1 starts course', 100);
publishMessage('Holberton Student #2 starts course', 200);
publishMessage('KILL_SERVER', 300);
publishMessage('Holberton Student #3 starts course', 400);
