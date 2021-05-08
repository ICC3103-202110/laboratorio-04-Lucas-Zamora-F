var prompt = require('prompt-sync')();

function app(counter){
    while (true){
        console.clear();
        const currentView = view(counter);  
        console.log(currentView);
        var msg = prompt('What would you do? ');
        if (msg === 'q')
            break
        else
            counter = update(msg, counter)
        
    }     
}

function view(counter){
    var view = ('Count: ' + counter + '\n' + '\n' + '(+) (-)' + '\n'+ '\n' + '(q) for quit')
    return view
}

function update(msg, counter){
    if (msg === '+')
        return (counter + 1)
    if (msg === '-')
        return (counter - 1)
    else
        return counter

}
app(0)