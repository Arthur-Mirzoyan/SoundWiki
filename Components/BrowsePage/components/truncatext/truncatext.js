function TruncateText(selector, maxLength) {    //Function for making text shorter  
    if (selector.length > maxLength) {
        selector = selector.substr(0, maxLength) + '...';
    }
    return selector;
}

export default TruncateText