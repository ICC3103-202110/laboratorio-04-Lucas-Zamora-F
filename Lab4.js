var prompt = require('prompt-sync')();

function app(counter){
    while (true){
        console.clear();
        const currentView = view(counter);  
        console.log(currentView);
        var msg = prompt('What would you do? ');
        if (msg === 'q')
            break
        if (msg === '+') or (msg === '-')
            counter = update(msg, counter)
    }     
}

function view(counter){
    var view = ('Count: ' + counter + '\n' + '\n' + '(+) (-)' + '\n'+ '\n' + '(q) for quit')
    return view
}

function update(msg, counter){
    if (msg === '+')
        return (msg + 1)
    if (msg === '-')
}
app(0)