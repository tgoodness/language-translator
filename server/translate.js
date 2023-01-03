const googleTranslateApi = require('@vitalets/google-translate-api');

googleTranslateApi('Hello, how are you?', { to: 'ha' }).then((res) => {
    console.log(res.text);
    console.log(res.from.language.iso);
}).catch(err => {
    console.error(err);
});

