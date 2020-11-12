export const error = (message:string) => {
    console.error(message);
}

export const info = (message: string) => {
    fetch('https://postb.in/1605067471374-6811872534453', {
        method: 'POST',
        body: JSON.stringify({ date: new Date(), message }),
        headers: { "Content-type": "application/json" }

    }).then(res => console.info(res));
    console.info(message);
}