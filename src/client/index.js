function component() {
    let element = documet.createElement('div');

    element.innerHTML = _.join(['Hello', 'there!'], ' ');
    return element;
}

document.body.appendChild(component());